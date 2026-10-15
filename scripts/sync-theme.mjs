// Vendors the Velocity theme kit (Tailwind preset + CSS variables) straight
// from the live registry — the exact same two files `velocityx theme` would
// write into a customer's project. This is the sanctioned distribution path,
// not a fork: the registry at https://aidxn.com/r is the one source of truth,
// and these files are *designed* to be copied into every consuming project.
//
// Run with: npm run sync:theme
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REGISTRY = process.env.VELOCITYX_REGISTRY || 'https://aidxn.com/r';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'theme');

async function main() {
  const res = await fetch(`${REGISTRY}/theme.json`, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`Registry returned ${res.status} fetching theme.json`);
  const body = await res.json();
  if (!body.files?.length) throw new Error('Registry returned no theme files.');

  await mkdir(outDir, { recursive: true });
  for (const file of body.files) {
    const target = path.join(outDir, path.basename(file.to));
    await writeFile(target, file.content, 'utf8');
    console.log(`  + theme/${path.basename(file.to)}`);
  }
  console.log('\nTheme synced from the live registry.');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
