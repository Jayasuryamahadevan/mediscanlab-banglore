import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');
const exportCandidates = [
  'mediscanlab.WordPress.2026-02-26-update.xml',
  'mediscanlab.WordPress.2026-02-26-update (1).xml',
  'mediscanlab.WordPress.2026-02-26.xml'
].map((name) => path.resolve(projectRoot, '..', name));

const xmlPath =
  exportCandidates.find((candidate) => {
    if (!fs.existsSync(candidate)) return false;
    return fs.statSync(candidate).size > 0;
  }) ?? '';

if (!xmlPath) {
  throw new Error(`No non-empty WordPress export XML found in ${path.resolve(projectRoot, '..')}`);
}

const outputPath = path.resolve(projectRoot, 'src', 'data', 'wordpressPreviewData.ts');

const decodeEntities = (value = '') =>
  value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&#x[0-9a-fA-F]+;/g, '')
    .replace(/&#\d+;/g, '');

const unwrapCdata = (value = '') => value.replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/m, '$1');
const cleanText = (value = '') => decodeEntities(unwrapCdata(value)).trim();

const htmlToText = (value = '') =>
  cleanText(value)
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[[^\]]+\]/g, ' ')
    .replace(/\n{2,}/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\s+\n/g, '\n')
    .replace(/\n\s+/g, '\n')
    .trim();

const collapseText = (value = '') => htmlToText(value).replace(/\s+/g, ' ').trim();

const sanitizeLines = (value = '') => {
  const lines = htmlToText(value)
    .split('\n')
    .map((line) => line.trim())
    .map((line) => line.replace(/\s*-\s*-\s*-\s*/g, ' ').replace(/\s{2,}/g, ' ').trim())
    .filter(Boolean)
    .filter((line) => !/^read more$/i.test(line))
    .filter((line) => !/^book package$/i.test(line))
    .filter((line) => !/^book now$/i.test(line))
    .filter((line) => !/^view all tests$/i.test(line))
    .filter((line) => !/^client\s+\d+$/i.test(line))
    .filter((line) => !/^our services$/i.test(line));

  const deduped = [];
  const seen = new Set();
  for (const line of lines) {
    const key = line.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(line);
  }

  return deduped.join('\n');
};

const toSlug = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const extractTag = (xml, tag) => {
  const safeTag = tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = xml.match(new RegExp(`<${safeTag}(?:\\s+[^>]*)?>([\\s\\S]*?)</${safeTag}>`, 'i'));
  return cleanText(match?.[1] ?? '');
};

const pickExcerpt = (raw, maxLength = 220) => {
  const text = collapseText(raw);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
};

const truncateText = (raw, maxLength = 5000) => {
  const text = sanitizeLines(raw);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
};

const classifyPage = (title = '', slug = '', pathName = '') => {
  const key = `${title} ${slug} ${pathName}`.toLowerCase();
  if (/\btest(s)?\b|lft|d-dimer|coombs|widal|pregnancy|hpv|pap/.test(key)) return 'test';
  if (/check\s*up|checkup|diabetic|hypertension|renal|wellness|package/.test(key)) return 'checkup';
  if (/service|radiology|cardiology|laboratory|clinical/.test(key)) return 'service';
  if (/about|company|history|management|team|quality|client|partner/.test(key)) return 'about';
  if (/contact|career|faq|plan|news|media|solution|blog/.test(key)) return 'support';
  return 'general';
};

const publicCustomTypeMeta = {
  'dsvy-service': { label: 'Service', fallbackPrefix: '/services', kind: 'service' },
  'dsvy-portfolio': { label: 'Portfolio', fallbackPrefix: '/portfolio', kind: 'general' },
  'dsvy-team-member': { label: 'Team Member', fallbackPrefix: '/team', kind: 'about' },
  'dsvy-testimonial': { label: 'Testimonial', fallbackPrefix: '/testimonials', kind: 'about' },
  'dsvy-client': { label: 'Client', fallbackPrefix: '/clients', kind: 'about' }
};
const publicCustomPostTypes = Object.keys(publicCustomTypeMeta);

const getFallbackPathByType = (type, slug) => {
  if (type === 'post') return `/blog/${slug}`;
  if (type === 'product') return `/product/${slug}`;
  const meta = publicCustomTypeMeta[type];
  if (meta) return `${meta.fallbackPrefix}/${slug}`;
  return `/${slug}`;
};

const makePathFromLink = (link, fallbackSlug, type) => {
  const fallbackPath = getFallbackPathByType(type, fallbackSlug);
  try {
    const parsed = new URL(link);
    const cleanedPath = parsed.pathname.replace(/\/+$/, '');
    if (type === 'post') {
      return fallbackPath;
    }
    if (!cleanedPath || cleanedPath === '/' || cleanedPath === '#') {
      return fallbackPath;
    }
    if (cleanedPath === '/blog' && type === 'page') {
      return '/blog';
    }
    return cleanedPath;
  } catch {
    return fallbackPath;
  }
};

const extractPostMeta = (block = '') => {
  const postMetaBlocks = block.match(/<wp:postmeta>[\s\S]*?<\/wp:postmeta>/g) ?? [];
  const values = new Map();
  for (const postMeta of postMetaBlocks) {
    const key = extractTag(postMeta, 'wp:meta_key');
    const value = extractTag(postMeta, 'wp:meta_value');
    if (!key || !value || values.has(key)) continue;
    values.set(key, value);
  }
  return values;
};

const normalizeCurrency = (raw) => {
  const value = cleanText(raw);
  if (!value) return '';
  const numeric = Number(value);
  if (!Number.isNaN(numeric) && Number.isFinite(numeric)) {
    return `₹${Math.round(numeric).toLocaleString('en-IN')}`;
  }
  if (value.startsWith('₹')) return value;
  return `₹${value}`;
};

const ensureUnique = (candidate, usedSet, fallbackPrefix = 'item') => {
  let value = candidate || fallbackPrefix;
  let index = 2;
  while (usedSet.has(value)) {
    value = `${candidate || fallbackPrefix}-${index}`;
    index += 1;
  }
  usedSet.add(value);
  return value;
};

const xml = fs.readFileSync(xmlPath, 'utf8');
const channelHead = xml.split('<item>')[0] ?? xml;
const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
const siteLink = extractTag(channelHead, 'link') || 'https://mediscanlab.com';

const items = itemBlocks.map((block) => ({
  title: extractTag(block, 'title'),
  link: extractTag(block, 'link'),
  description: extractTag(block, 'description'),
  content: extractTag(block, 'content:encoded'),
  excerpt: extractTag(block, 'excerpt:encoded'),
  postType: extractTag(block, 'wp:post_type'),
  status: extractTag(block, 'wp:status'),
  postDate: extractTag(block, 'wp:post_date'),
  slug: extractTag(block, 'wp:post_name'),
  raw: block
}));

const publishedPagesRaw = items.filter((item) => item.postType === 'page' && item.status === 'publish');
const publishedPostsRaw = items.filter((item) => item.postType === 'post' && item.status === 'publish');
const publishedProductsRaw = items.filter((item) => item.postType === 'product' && item.status === 'publish');
const publishedCustomRaw = items.filter((item) => publicCustomPostTypes.includes(item.postType) && item.status === 'publish');

const publishedByType = items
  .filter((item) => item.status === 'publish' && item.postType)
  .reduce((acc, item) => {
    acc[item.postType] = (acc[item.postType] ?? 0) + 1;
    return acc;
  }, {});

const pageSlugSet = new Set();
const pagePathSet = new Set(['/']);
const pages = publishedPagesRaw
  .map((item) => {
    const fallbackSlug = toSlug(item.title || item.link) || 'page';
    const initialSlug = item.slug || fallbackSlug;
    const slug = ensureUnique(initialSlug, pageSlugSet, 'page');
    const initialPath = makePathFromLink(item.link, slug, 'page');
    const pathName = ensureUnique(initialPath, pagePathSet, `/${slug}`);
    const content = truncateText(item.content || item.excerpt || item.description, 7000);
    const excerpt = pickExcerpt(item.content || item.excerpt || item.description, 260);

    return {
      title: item.title || slug.replace(/-/g, ' '),
      slug,
      path: pathName,
      link: item.link,
      excerpt,
      content,
      kind: classifyPage(item.title, slug, pathName)
    };
  })
  .filter((item) => item.path !== '/');

const postSlugSet = new Set();
const posts = publishedPostsRaw.map((item) => {
  const fallbackSlug = toSlug(item.title || item.link) || 'post';
  const slug = ensureUnique(item.slug || fallbackSlug, postSlugSet, 'post');
  const pathName = makePathFromLink(item.link, slug, 'post');
  const content = truncateText(item.content || item.excerpt || item.description, 7000);
  const excerpt = pickExcerpt(item.excerpt || item.content || item.description, 220);

  return {
    title: item.title || slug.replace(/-/g, ' '),
    slug,
    path: pathName,
    link: item.link,
    date: item.postDate || '',
    excerpt,
    content
  };
});

const productSlugSet = new Set();
const productPathSet = new Set();
const products = publishedProductsRaw.map((item) => {
  const fallbackSlug = toSlug(item.title || item.link) || 'product';
  const slug = ensureUnique(item.slug || fallbackSlug, productSlugSet, 'product');
  const initialPath = makePathFromLink(item.link, slug, 'product');
  const pathName = ensureUnique(initialPath, productPathSet, `/product/${slug}`);
  const content = truncateText(item.content || item.excerpt || item.description, 7000);
  const excerpt = pickExcerpt(item.excerpt || item.content || item.description, 220);
  const meta = extractPostMeta(item.raw);
  const price =
    normalizeCurrency(meta.get('_price') || meta.get('_regular_price') || meta.get('_sale_price') || '') || 'Contact for price';

  return {
    title: item.title || slug.replace(/-/g, ' '),
    slug,
    path: pathName,
    link: item.link,
    excerpt,
    content,
    price
  };
});

const customSlugSets = new Map(publicCustomPostTypes.map((postType) => [postType, new Set()]));
const customPathSet = new Set();
const customEntries = publishedCustomRaw.map((item) => {
  const meta = publicCustomTypeMeta[item.postType];
  const fallbackSlug = toSlug(item.title || item.link || meta.label) || meta.label.toLowerCase().replace(/\s+/g, '-');
  const slugSet = customSlugSets.get(item.postType) ?? new Set();
  if (!customSlugSets.has(item.postType)) {
    customSlugSets.set(item.postType, slugSet);
  }
  const slug = ensureUnique(item.slug || fallbackSlug, slugSet, meta.label.toLowerCase().replace(/\s+/g, '-'));
  const initialPath = makePathFromLink(item.link, slug, item.postType);
  const pathName = ensureUnique(initialPath, customPathSet, `${meta.fallbackPrefix}/${slug}`);
  const content = truncateText(item.content || item.excerpt || item.description, 7000);
  const excerpt = pickExcerpt(item.excerpt || item.content || item.description, 240);
  const canonicalLink = item.link && item.link !== '#' ? item.link : `${siteLink}${pathName}`;

  return {
    title: item.title || slug.replace(/-/g, ' '),
    slug,
    path: pathName,
    link: canonicalLink,
    excerpt,
    content,
    kind: meta.kind,
    postType: item.postType,
    postTypeLabel: meta.label,
    date: item.postDate || ''
  };
});

const pageByTitle = new Map(pages.map((page) => [page.title.toLowerCase(), page]));
const checkupPages = pages.filter((page) => page.kind === 'checkup');
const packageMatches = [];
for (const page of checkupPages) {
  const sourceRaw = publishedPagesRaw.find((candidate) => candidate.title.toLowerCase() === page.title.toLowerCase());
  if (!sourceRaw) continue;
  const matches = sourceRaw.content.matchAll(/<h3[^>]*>\s*([^<]+?)\s*<\/h3>\s*(\d{3,5})\/-/gi);
  for (const match of matches) {
    const title = collapseText(match[1]);
    if (!title || title.length < 6) continue;
    packageMatches.push({
      title,
      price: `₹${match[2]}`,
      sourcePage: page.title,
      sourcePageSlug: page.slug,
      sourcePath: page.path,
      sourceLink: page.link
    });
  }
}

const checkupPackages = packageMatches
  .filter(
    (item, index, arr) =>
      arr.findIndex(
        (candidate) => candidate.title === item.title && candidate.price === item.price && candidate.sourcePath === item.sourcePath
      ) === index
  )
  .slice(0, 48);

const serviceHighlights = [
  ...pages
    .filter((page) => page.kind === 'service')
    .map((page) => ({
      title: page.title,
      slug: page.slug,
      path: page.path,
      link: page.link,
      excerpt: page.excerpt
    })),
  ...customEntries
    .filter((entry) => entry.postType === 'dsvy-service' || entry.postType === 'dsvy-portfolio')
    .map((entry) => ({
      title: entry.title,
      slug: entry.slug,
      path: entry.path,
      link: entry.link,
      excerpt: entry.excerpt
    }))
]
  .filter((entry, index, arr) => arr.findIndex((candidate) => candidate.path === entry.path) === index);

const labTests = pages
  .filter(
    (page) =>
      page.kind === 'test' ||
      /^tests?$/i.test(page.title) ||
      /\btest(s)?\b|lft|d-dimer|coombs|widal|pregnancy|hpv|pap/i.test(`${page.title} ${page.slug}`)
  )
  .slice(0, 80)
  .map((page) => ({
    title: page.title,
    slug: page.slug,
    path: page.path,
    link: page.link,
    excerpt: page.excerpt
  }));

const preferredQuickLinkTitles = ['About Us', 'Health Check Up', 'Tests', 'Radiology Services', 'Blog', 'Contact', 'Careers'];
const quickLinks = preferredQuickLinkTitles
  .map((title) => {
    if (title.toLowerCase() === 'blog') {
      return {
        title: 'Blog',
        slug: 'blog',
        path: '/blog',
        link: `${extractTag(channelHead, 'link') || 'https://mediscanlab.com'}/blog`
      };
    }
    const found =
      pageByTitle.get(title.toLowerCase()) ??
      pages.find((page) => page.title.toLowerCase().startsWith(title.toLowerCase())) ??
      null;
    return found
      ? {
          title: found.title,
          slug: found.slug,
          path: found.path,
          link: found.link
        }
      : null;
  })
  .filter(Boolean)
  .filter((item, index, arr) => arr.findIndex((candidate) => candidate.path === item.path) === index);

const contactPage =
  pages.find((page) => /^contact$/i.test(page.title)) ??
  pages.find((page) => /^contact us$/i.test(page.title)) ??
  pages.find((page) => /contact/i.test(page.title)) ??
  null;

const contactSourceRaw = contactPage
  ? publishedPagesRaw.find((page) => page.title.toLowerCase() === contactPage.title.toLowerCase())
  : null;

const contactPlain = collapseText(contactSourceRaw?.content || '');
const phoneMatches = Array.from(new Set(contactPlain.match(/\+?\d[\d\s\-()]{7,}\d/g) ?? [])).slice(0, 3);
const emailMatches = Array.from(new Set(contactPlain.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) ?? []));
const locationMatch =
  contactPlain.match(/(?:our location|location)\s+([^+]+?)(?:email|phone|contact|$)/i)?.[1]?.trim() ?? '';

const categories = Array.from(
  new Set(
    (xml.match(/<wp:cat_name><!\[CDATA\[(.*?)\]\]><\/wp:cat_name>/g) ?? [])
      .map((item) => item.match(/<wp:cat_name><!\[CDATA\[(.*?)\]\]><\/wp:cat_name>/)?.[1] ?? '')
      .map((item) => item.trim())
      .filter(Boolean)
  )
).slice(0, 12);

const aboutPage =
  pages.find((page) => /^about us$/i.test(page.title)) ??
  pages.find((page) => /about/i.test(page.title)) ??
  pages[0];

const siteTitle = extractTag(channelHead, 'title') || 'MediScan Lab';
const siteDescription = extractTag(channelHead, 'description') || 'Trusted diagnostics and preventive healthcare.';
const totalPublicContent = pages.length + posts.length + products.length + customEntries.length;

const output = {
  generatedFrom: path.basename(xmlPath),
  generatedAt: new Date().toISOString(),
  site: {
    title: siteTitle,
    description: siteDescription,
    link: siteLink
  },
  hero: {
    heading: 'Prevention is better than cure',
    subheading: 'Book trusted diagnostics and preventive health checkups with Mediscan.',
    highlight: checkupPackages[0]?.price ? `Packages start at ${checkupPackages[0].price}` : 'Trusted preventive checkups',
    quickNote: 'Reports available quickly with trusted diagnostic accuracy.'
  },
  stats: {
    totalPages: pages.length,
    totalPosts: posts.length,
    totalProducts: products.length,
    totalTests: labTests.length,
    totalCustomEntries: customEntries.length,
    totalPublicContent,
    totalPackages: checkupPackages.length,
    totalServices: serviceHighlights.length
  },
  importSummary: {
    publishedByType
  },
  quickLinks,
  pages,
  posts,
  products,
  customEntries,
  labTests,
  checkupPackages,
  serviceHighlights,
  blogPosts: posts.map((post) => ({
    title: post.title,
    slug: post.slug,
    path: post.path,
    link: post.link,
    date: post.date,
    excerpt: post.excerpt
  })),
  categories,
  about: {
    title: aboutPage?.title ?? 'About Us',
    slug: aboutPage?.slug ?? 'about-us',
    path: aboutPage?.path ?? '/about-us',
    excerpt: aboutPage?.excerpt ?? ''
  },
  contact: {
    title: contactPage?.title ?? 'Contact',
    path: contactPage?.path ?? '/contact',
    phones: phoneMatches,
    emails: emailMatches.slice(0, 3),
    location: locationMatch || 'Kalaburagi, Karnataka'
  }
};

const outputSource = `/* eslint-disable */
// Auto-generated by scripts/generate-wordpress-preview-data.mjs
// Source: ${path.basename(xmlPath)}
export type PreviewLink = {
  title: string;
  slug: string;
  path: string;
  link: string;
};

export type CmsPagePreview = {
  title: string;
  slug: string;
  path: string;
  link: string;
  excerpt: string;
  content: string;
  kind: 'checkup' | 'service' | 'about' | 'support' | 'test' | 'general';
};

export type BlogPostPreview = {
  title: string;
  slug: string;
  path: string;
  link: string;
  date: string;
  excerpt: string;
  content?: string;
};

export type ProductPreview = {
  title: string;
  slug: string;
  path: string;
  link: string;
  excerpt: string;
  content?: string;
  price: string;
};

export type CustomEntryPreview = {
  title: string;
  slug: string;
  path: string;
  link: string;
  excerpt: string;
  content?: string;
  kind: 'service' | 'about' | 'general';
  postType: 'dsvy-service' | 'dsvy-portfolio' | 'dsvy-team-member' | 'dsvy-testimonial' | 'dsvy-client';
  postTypeLabel: string;
  date: string;
};

export type CheckupPackage = {
  title: string;
  price: string;
  sourcePage: string;
  sourcePageSlug: string;
  sourcePath: string;
  sourceLink: string;
};

export type ServiceHighlight = {
  title: string;
  slug: string;
  path: string;
  link: string;
  excerpt: string;
};

export type LabTestPreview = {
  title: string;
  slug: string;
  path: string;
  link: string;
  excerpt: string;
};

export type WordPressPreviewData = {
  generatedFrom: string;
  generatedAt: string;
  site: {
    title: string;
    description: string;
    link: string;
  };
  hero: {
    heading: string;
    subheading: string;
    highlight: string;
    quickNote: string;
  };
  stats: {
    totalPages: number;
    totalPosts: number;
    totalProducts: number;
    totalTests: number;
    totalCustomEntries: number;
    totalPublicContent: number;
    totalPackages: number;
    totalServices: number;
  };
  importSummary: {
    publishedByType: Record<string, number>;
  };
  quickLinks: PreviewLink[];
  pages: CmsPagePreview[];
  posts: BlogPostPreview[];
  products: ProductPreview[];
  customEntries: CustomEntryPreview[];
  labTests: LabTestPreview[];
  checkupPackages: CheckupPackage[];
  serviceHighlights: ServiceHighlight[];
  blogPosts: BlogPostPreview[];
  categories: string[];
  about: {
    title: string;
    slug: string;
    path: string;
    excerpt: string;
  };
  contact: {
    title: string;
    path: string;
    phones: string[];
    emails: string[];
    location: string;
  };
};

export const wordpressPreviewData: WordPressPreviewData = ${JSON.stringify(output, null, 2)};
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, outputSource, 'utf8');
console.log(`Generated ${path.relative(projectRoot, outputPath)} from ${path.relative(projectRoot, xmlPath)}`);
