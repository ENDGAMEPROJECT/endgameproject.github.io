import { readdirSync, statSync, readFileSync } from 'fs';
import { join } from 'path';

function walkHtml(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkHtml(full, results);
    else if (entry.endsWith('.html')) results.push(full);
  }
  return results;
}

const files = walkHtml('docs');
for (const f of files) {
  const rel = f.replace(/\\/g, '/').replace(/.*docs\//, '');
  const content = readFileSync(f, 'utf8');
  const hasTitle = content.includes('<title>');
  console.log((hasTitle ? '[OK]  ' : '[MISS]'), rel);
}
