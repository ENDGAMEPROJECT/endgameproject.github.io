import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, copyFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { metadataByPage } from './constants/metadata.js';
import {
  homePageSchema,
  aboutPageSchema,
  researchPageSchema,
  eventsPageSchema,
  escapeRoomsPageSchema,
} from './constants/schemas.js';

const BASE_URL = 'https://endgameproject.github.io';
const OG_IMAGE = `${BASE_URL}/assets/images/og-image.png`;

const schemaByKey = {
  home: homePageSchema,
  about: aboutPageSchema,
  research: researchPageSchema,
  events: eventsPageSchema,
  escaperooms: escapeRoomsPageSchema,
};

export function getPageInfo(filePath) {
  const rel = filePath.replace(/\\/g, '/').replace(/.*docs\//, '');

  if (rel === 'index.html')     return { key: 'home',        canonical: `${BASE_URL}/` };
  if (rel === 'about.html')     return { key: 'about',       canonical: `${BASE_URL}/about` };
  if (rel === 'research.html')  return { key: 'research',    canonical: `${BASE_URL}/research` };
  if (rel === 'events.html')    return { key: 'events',      canonical: `${BASE_URL}/events` };
  if (rel === 'escaperooms.html') return { key: 'escaperooms', canonical: `${BASE_URL}/escaperooms` };

  if (rel.startsWith('escaperooms/')) {
    const slug = rel.replace('escaperooms/', '').replace(/\.html$/, '');
    return { key: 'escaperooms', canonical: `${BASE_URL}/escaperooms/${slug}` };
  }
  if (rel.startsWith('events/')) {
    const slug = rel.replace('events/', '').replace(/\.html$/, '');
    return { key: 'events', canonical: `${BASE_URL}/events/${slug}` };
  }

  return { key: 'home', canonical: `${BASE_URL}/` };
}

export function injectMetaTags(html, metadata, canonicalUrl, schema) {
  if (html.includes('<title>')) return html;

  const { title, description, keywords } = metadata;
  const schemaTag = schema
    ? `<script type="application/ld+json">${JSON.stringify(schema).replace(/<\/script>/gi, '<\\/script>')}</script>`
    : '';

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    `<meta name="keywords" content="${keywords}">`,
    `<meta name="robots" content="index, follow">`,
    `<meta name="googlebot" content="index, follow">`,
    `<link rel="canonical" href="${canonicalUrl}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${canonicalUrl}">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:image" content="${OG_IMAGE}">`,
    `<meta property="og:locale" content="en_US">`,
    `<meta property="og:site_name" content="ENDGAME Project">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:site" content="@endgame_project">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:image" content="${OG_IMAGE}">`,
    schemaTag,
  ].join('');

  const result = html.replace(
    /(<meta charSet="utf-8"\/>|<meta charset="utf-8"\/>)/i,
    `$1${tags}`
  );
  return result;
}

function shouldSkip(rel) {
  return (
    rel.startsWith('superpowers/') ||
    rel.startsWith('play/') ||
    rel.endsWith('/play.html') ||
    rel.startsWith('google') ||
    rel === '404.html'
  );
}

function walkHtml(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      walkHtml(full, results);
    } else if (entry.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const docsDir = path.join(__dirname, 'docs');
  const ogSrc = path.join(__dirname, 'public/assets/images/bannerBg-placeholder.png');
  const ogDest = path.join(__dirname, 'docs/assets/images/og-image.png');
  if (!existsSync(ogDest)) {
    copyFileSync(ogSrc, ogDest);
    console.log(`Copied OG image → ${ogDest}`);
  }

  const files = walkHtml(docsDir);
  let count = 0;

  for (const file of files) {
    const rel = file.replace(/\\/g, '/').replace(/.*docs\//, '');
    if (shouldSkip(rel)) continue;

    const { key, canonical } = getPageInfo(file);
    const metadata = metadataByPage[key]?.en ?? metadataByPage.home.en;
    const schema = schemaByKey[key] ?? null;

    const html = readFileSync(file, 'utf8');
    const injected = injectMetaTags(html, metadata, canonical, schema);

    if (injected !== html) {
      writeFileSync(file, injected, 'utf8');
      console.log(`Injected: ${rel}`);
      count++;
    } else if (!html.includes('<title>')) {
      console.warn(`Warning: no charset anchor found in ${rel}, skipping`);
    }
  }

  console.log(`\nSEO injection complete: ${count} files updated.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch(err => { console.error(err); process.exit(1); });
}
