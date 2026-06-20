import assert from 'assert';
import { injectMetaTags, getPageInfo } from './inject-seo.mjs';
import { metadataByPage } from './constants/metadata.js';

const mockHtml = '<!DOCTYPE html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/></head><body></body></html>';
const metadata = metadataByPage.home.en;

// Test 1: injects all required meta tags
const result = injectMetaTags(mockHtml, metadata, 'https://endgameproject.github.io/', null);
assert(result.includes('<title>'), 'Should inject <title>');
assert(result.includes(metadata.title), 'Title content should match');
assert(result.includes('<meta name="description"'), 'Should inject description');
assert(result.includes('<meta name="keywords"'), 'Should inject keywords');
assert(result.includes('<meta property="og:title"'), 'Should inject OG title');
assert(result.includes('<meta property="og:image"'), 'Should inject OG image');
assert(result.includes('<meta name="twitter:card"'), 'Should inject Twitter card');
assert(result.includes('<link rel="canonical"'), 'Should inject canonical');
assert(result.includes('index, follow'), 'Should inject robots meta');

// Test 2: does not double-inject on second run
const second = injectMetaTags(result, metadata, 'https://endgameproject.github.io/', null);
const titleCount = (second.match(/<title>/g) || []).length;
assert(titleCount === 1, 'Should not inject duplicate <title>');

// Test 3: injects JSON-LD when schema provided
const withSchema = injectMetaTags(mockHtml, metadata, 'https://endgameproject.github.io/', { '@type': 'WebPage' });
assert(withSchema.includes('application/ld+json'), 'Should inject schema script');
assert(withSchema.includes('"@type":"WebPage"'), 'Should include schema content');

// Test 4: omits JSON-LD when schema is null
assert(!result.includes('application/ld+json'), 'Should not inject schema when null');

// Test 5: getPageInfo maps standard paths
assert.deepStrictEqual(
  getPageInfo('docs/index.html'),
  { key: 'home', canonical: 'https://endgameproject.github.io/' }
);
assert.deepStrictEqual(
  getPageInfo('docs/research.html'),
  { key: 'research', canonical: 'https://endgameproject.github.io/research' }
);
assert.deepStrictEqual(
  getPageInfo('docs/escaperooms/echo.html'),
  { key: 'escaperooms', canonical: 'https://endgameproject.github.io/escaperooms/echo' }
);

// Test 6: getPageInfo handles Windows backslashes
assert.deepStrictEqual(
  getPageInfo('docs\\events\\PressNote011225.html'),
  { key: 'events', canonical: 'https://endgameproject.github.io/events/PressNote011225' }
);

// Test 7: unknown path falls back to home
assert.deepStrictEqual(
  getPageInfo('docs/unknown/page.html'),
  { key: 'home', canonical: 'https://endgameproject.github.io/' }
);

console.log('All tests passed!');
