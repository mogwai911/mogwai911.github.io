import { readdir, readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const textExtensions = new Set(['.astro', '.css', '.html', '.js', '.json', '.md', '.mjs', '.svg', '.ts', '.txt', '.xml', '.yml', '.yaml']);
const scanRoots = ['.'];
const ignored = new Set(['node_modules', '.git', '.astro']);
const fromCodes = (codes) => String.fromCharCode(...codes);

const forbidden = [
  ['private full name', fromCodes([26417, 20975, 20803])],
  ['private phone', fromCodes([49, 51, 57, 53, 51, 51, 50, 55, 50, 54, 57])],
  ['student email', fromCodes([107, 97, 55, 48, 52, 51, 122, 104, 45, 115, 64, 115, 116, 117, 100, 101, 110, 116, 46, 108, 117, 46, 115, 101])],
  ['private name transliteration', fromCodes([107, 97, 105, 121, 117, 97, 110])],
  ['local drive path', fromCodes([69, 58, 92])],
  ['local user path', fromCodes([67, 58, 92, 85, 115, 101, 114, 115, 92])],
  ['private vault name', fromCodes([26611, 26263, 33457, 26126, 21448, 19968, 26449])],
];

async function walk(path) {
  const result = [];
  try {
    for (const entry of await readdir(path, { withFileTypes: true })) {
      if (ignored.has(entry.name)) continue;
      const full = join(path, entry.name);
      if (entry.isDirectory()) result.push(...await walk(full));
      else if (entry.isFile() && textExtensions.has(extname(entry.name).toLowerCase())) result.push(full);
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  return result;
}

const files = [];
for (const dir of scanRoots) files.push(...await walk(join(root, dir)));
const violations = [];

for (const file of files) {
  const content = await readFile(file, 'utf8');
  for (const [label, needle] of forbidden) {
    if (content.toLowerCase().includes(needle.toLowerCase())) violations.push(`${relative(root, file)}: ${label}`);
  }
}

try {
  const history = execFileSync('git', ['log', '-p', '--all', '--no-ext-diff'], { cwd: root, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });
  for (const [label, needle] of forbidden) {
    if (history.toLowerCase().includes(needle.toLowerCase())) violations.push(`git history: ${label}`);
  }
} catch {
  // The source scan still works before the repository is initialized.
}

if (violations.length) {
  console.error(`Privacy check failed:\n${violations.join('\n')}`);
  process.exit(1);
}

console.log(`Privacy check passed (${files.length} text files plus Git history scanned).`);
