import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));

async function walk(path) {
  const result = [];
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const full = join(path, entry.name);
    if (entry.isDirectory()) result.push(...await walk(full));
    else if (entry.isFile()) result.push(full);
  }
  return result;
}

function targetFor(url) {
  const pathname = decodeURIComponent(url.split('#')[0].split('?')[0]);
  if (!pathname || pathname === '/') return join(dist, 'index.html');
  const clean = pathname.replace(/^\//, '');
  if (extname(clean)) return join(dist, clean);
  return join(dist, clean, 'index.html');
}

const htmlFiles = (await walk(dist)).filter((file) => file.endsWith('.html'));
const failures = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const attributes = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const value of attributes) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(value)) continue;
    const target = value.startsWith('/') ? targetFor(value) : resolve(file, '..', value.split('#')[0]);
    try { await stat(target); } catch { failures.push(`${file} -> ${value}`); }
  }
}

if (failures.length) {
  console.error(`Broken internal links:\n${failures.join('\n')}`);
  process.exit(1);
}

console.log(`Link check passed (${htmlFiles.length} pages).`);
