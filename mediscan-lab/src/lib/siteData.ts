import { wordpressPreviewData } from '../data/wordpressPreviewData';

export const BOOKING_URL = 'https://reports.mediscanlab.com/hcbooking/';

export const siteData = {
    ...wordpressPreviewData,
    bookingUrl: BOOKING_URL
};

type SearchItemType = 'page' | 'post' | 'package' | 'service' | 'test' | 'product' | 'custom';

export type SearchItem = {
    type: SearchItemType;
    title: string;
    path: string;
    excerpt: string;
};

export type ResolvedContent = {
    sourceType: 'page' | 'post' | 'product' | 'custom';
    title: string;
    slug: string;
    path: string;
    link: string;
    excerpt: string;
    content?: string;
    kind: string;
    postType?: string;
    postTypeLabel?: string;
    date?: string;
    price?: string;
};

const normalizePath = (value: string) => value.replace(/\/+$/g, '') || '/';

const pagePathMap = new Map(wordpressPreviewData.pages.map((page) => [normalizePath(page.path), page]));
const pageSlugMap = new Map(wordpressPreviewData.pages.map((page) => [page.slug, page]));
const postSlugMap = new Map(wordpressPreviewData.posts.map((post) => [post.slug, post]));
const postPathMap = new Map(wordpressPreviewData.posts.map((post) => [normalizePath(post.path), post]));
const productSlugMap = new Map(wordpressPreviewData.products.map((product) => [product.slug, product]));
const productPathMap = new Map(wordpressPreviewData.products.map((product) => [normalizePath(product.path), product]));
const customPathMap = new Map(wordpressPreviewData.customEntries.map((entry) => [normalizePath(entry.path), entry]));

export const sortedPages = [...wordpressPreviewData.pages].sort((a, b) => a.title.localeCompare(b.title));
export const sortedPosts = [...wordpressPreviewData.posts].sort((a, b) => b.date.localeCompare(a.date));
export const sortedProducts = [...wordpressPreviewData.products].sort((a, b) => a.title.localeCompare(b.title));
export const sortedCustomEntries = [...wordpressPreviewData.customEntries].sort((a, b) => a.title.localeCompare(b.title));
export const checkupPackages = wordpressPreviewData.checkupPackages;
export const serviceHighlights = wordpressPreviewData.serviceHighlights;
export const labTests = wordpressPreviewData.labTests;

export const getPageBySlug = (slug: string) => pageSlugMap.get(slug) ?? null;
export const getPageByPath = (path: string) => pagePathMap.get(normalizePath(path)) ?? null;
export const getPostBySlug = (slug: string) => postSlugMap.get(slug) ?? null;
export const getPostByPath = (path: string) => postPathMap.get(normalizePath(path)) ?? null;
export const getProductBySlug = (slug: string) => productSlugMap.get(slug) ?? null;
export const getProductByPath = (path: string) => productPathMap.get(normalizePath(path)) ?? null;
export const getCustomEntryByPath = (path: string) => customPathMap.get(normalizePath(path)) ?? null;

export const getAnyContentByPath = (path: string): ResolvedContent | null => {
    const normalized = normalizePath(path);

    const page = getPageByPath(normalized);
    if (page) {
        return { sourceType: 'page', ...page };
    }

    const post = getPostByPath(normalized);
    if (post) {
        return {
            sourceType: 'post',
            ...post,
            kind: 'support'
        };
    }

    const product = getProductByPath(normalized);
    if (product) {
        return {
            sourceType: 'product',
            ...product,
            kind: 'checkup'
        };
    }

    const custom = getCustomEntryByPath(normalized);
    if (custom) {
        return {
            sourceType: 'custom',
            ...custom
        };
    }

    return null;
};

const cleanSearch = (value: string) => value.trim().toLowerCase();

export const searchSite = (query: string): SearchItem[] => {
    const q = cleanSearch(query);
    if (!q) {
        return [];
    }

    const pageResults = sortedPages
        .filter((page) => page.kind !== 'test')
        .filter((page) => !/sample page|homepage|elementor|#\d+/i.test(page.title))
        .filter((page) => `${page.title} ${page.excerpt} ${page.content}`.toLowerCase().includes(q))
        .map((page) => ({
            type: 'page' as const,
            title: page.title,
            path: page.path,
            excerpt: page.excerpt
        }));

    const postResults = sortedPosts
        .filter((post) => `${post.title} ${post.excerpt} ${post.content ?? ''}`.toLowerCase().includes(q))
        .map((post) => ({
            type: 'post' as const,
            title: post.title,
            path: post.path,
            excerpt: post.excerpt
        }));

    const packageResults = checkupPackages
        .filter((item) => `${item.title} ${item.sourcePage} ${item.price}`.toLowerCase().includes(q))
        .map((item) => ({
            type: 'package' as const,
            title: `${item.title} (${item.price})`,
            path: item.sourcePath,
            excerpt: `From ${item.sourcePage}`
        }));

    const serviceResults = serviceHighlights
        .filter((item) => `${item.title} ${item.excerpt}`.toLowerCase().includes(q))
        .map((item) => ({
            type: 'service' as const,
            title: item.title,
            path: item.path,
            excerpt: item.excerpt
        }));

    const productResults = sortedProducts
        .filter((item) => `${item.title} ${item.excerpt} ${item.content ?? ''} ${item.price}`.toLowerCase().includes(q))
        .map((item) => ({
            type: 'product' as const,
            title: `${item.title} (${item.price})`,
            path: item.path,
            excerpt: item.excerpt
        }));

    const testResults = labTests
        .filter((item) => `${item.title} ${item.excerpt}`.toLowerCase().includes(q))
        .map((item) => ({
            type: 'test' as const,
            title: item.title,
            path: item.path,
            excerpt: item.excerpt
        }));

    const customResults = sortedCustomEntries
        .filter((item) => `${item.title} ${item.excerpt} ${item.content ?? ''} ${item.postTypeLabel}`.toLowerCase().includes(q))
        .map((item) => ({
            type: 'custom' as const,
            title: `${item.title} (${item.postTypeLabel})`,
            path: item.path,
            excerpt: item.excerpt
        }));

    const merged = [...pageResults, ...postResults, ...packageResults, ...serviceResults, ...productResults, ...testResults, ...customResults];
    const seen = new Set<string>();
    return merged
        .filter((item) => {
            const key = `${item.path}::${item.title}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        })
        .slice(0, 60);
};

export const toParagraphs = (content: string, maxParagraphs = 12) => {
    if (!content.trim()) {
        return [];
    }

    const rawLines = content
        .split(/\n+/)
        .map((line) => line.trim())
        .map((line) => line.replace(/\s{2,}/g, ' ').replace(/\s*-\s*-\s*-\s*/g, ' ').trim())
        .filter(Boolean)
        .filter((line) => !/^read more$/i.test(line))
        .filter((line) => !/^book package$/i.test(line))
        .filter((line) => !/^book now$/i.test(line))
        .filter((line) => !/^client\s+\d+$/i.test(line))
        .filter((line) => line.length > 4);

    const uniqueLines: string[] = [];
    const seen = new Set<string>();
    for (const line of rawLines) {
        const key = line.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        uniqueLines.push(line);
    }

    if (uniqueLines.length === 0) {
        return [];
    }

    const groups: string[] = [];
    let buffer = '';

    const flushBuffer = () => {
        if (!buffer.trim()) return;
        groups.push(buffer.trim());
        buffer = '';
    };

    for (const line of uniqueLines) {
        const isHeadingLike =
            line.length <= 70 &&
            !line.endsWith('.') &&
            !line.endsWith('?') &&
            !line.endsWith('!') &&
            /^[A-Za-z0-9&(),/'\- ]+$/.test(line);

        const isListLike = /^[-•]\s/.test(line) || /^\d+[.)]\s/.test(line);

        if (isHeadingLike || isListLike || line.length >= 200) {
            flushBuffer();
            groups.push(line);
            continue;
        }

        if (!buffer) {
            buffer = line;
            continue;
        }

        if ((`${buffer} ${line}`).length > 240) {
            flushBuffer();
            buffer = line;
            continue;
        }

        buffer = `${buffer} ${line}`;
    }
    flushBuffer();

    if (groups.length > 0) {
        return groups.slice(0, maxParagraphs);
    }

    const normalized = content.replace(/\s+/g, ' ').trim();
    if (!normalized) return [];
    const sentences = normalized.split(/(?<=[.!?])\s+(?=[A-Z0-9])/).filter(Boolean);
    if (sentences.length === 0) return [normalized];

    const fallback: string[] = [];
    for (let i = 0; i < sentences.length; i += 2) {
        fallback.push(`${sentences[i]} ${sentences[i + 1] ?? ''}`.trim());
    }
    return fallback.slice(0, maxParagraphs);
};
