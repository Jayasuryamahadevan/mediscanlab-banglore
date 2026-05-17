import fs from 'fs';

const xmlData = fs.readFileSync('D:/Wordpressproject/mediscanlab.WordPress.2026-02-26.xml', 'utf8');

// Regex-based lightweight parsing because we don't have xml parser installed
const items = [...xmlData.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => m[1]);

const parsed = items.map(item => {
    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
    const title = titleMatch ? (titleMatch[1] || titleMatch[2]) : 'Unknown';
    
    const postTypeMatch = item.match(/<wp:post_type><!\[CDATA\[(.*?)\]\]><\/wp:post_type>|<wp:post_type>(.*?)<\/wp:post_type>/);
    const postType = postTypeMatch ? (postTypeMatch[1] || postTypeMatch[2]) : 'Unknown';

    const statusMatch = item.match(/<wp:status><!\[CDATA\[(.*?)\]\]><\/wp:status>|<wp:status>(.*?)<\/wp:status>/);
    const status = statusMatch ? (statusMatch[1] || statusMatch[2]) : 'Unknown';

    const contentMatch = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
    const content = contentMatch ? contentMatch[1] : '';

    return { title, postType, status, contentLen: content.length, contentSample: content.substring(0, 100) };
});

const grouped = parsed.reduce((acc, curr) => {
    if (curr.status !== 'publish') return acc;
    if (!acc[curr.postType]) acc[curr.postType] = [];
    acc[curr.postType].push({ title: curr.title, contentLen: curr.contentLen });
    return acc;
}, {});

fs.writeFileSync('D:/Wordpressproject/mediscan-lab/xml_summary.json', JSON.stringify(grouped, null, 2));
console.log('Summary created. Total items parsed:', parsed.length);
