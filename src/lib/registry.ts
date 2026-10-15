// Build-time registry client. Every component reference page is generated
// from this — never from a copy of free-components.json pasted into this
// repo. https://aidxn.com/r is the one source of truth (the same endpoint
// the velocityx CLI and the components showcase site both read).
//
// Astro calls these at build time (SSG), so a stale fetch only ever means
// "rebuild the docs site" — never a second, driftable copy of the manifest.

const REGISTRY = 'https://aidxn.com/r';

export interface RegistrySummary {
  slug: string;
  name: string;
  version?: string;
  updatedAt?: string;
  category: string;
  framework: 'react' | 'astro';
  description: string;
  access: 'free' | 'subscription';
  license: string;
  peerDeps: string[];
  fileCount: number;
  demoUrl: string;
  docsUrl: string;
  url: string;
}

export interface RegistryFile {
  from: string;
  to: string;
  content: string;
}

export interface RegistryComponent extends RegistrySummary {
  files?: RegistryFile[];
  requiresLicense?: boolean;
}

export interface RegistryIndex {
  name: string;
  version: string;
  updatedAt: string;
  homepage: string;
  registry: string;
  cli: string;
  freeLicense: string;
  freeRepo: string;
  subscription: { url: string; price: number; currency: string; interval: string };
  counts: { total: number; free: number; subscription: number };
  components: RegistrySummary[];
}

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`Registry returned ${res.status} for ${url}`);
  return (await res.json()) as T;
}

let cachedIndex: RegistryIndex | null = null;

/** The full index — every component's metadata, free and paid alike. */
export async function fetchIndex(): Promise<RegistryIndex> {
  if (cachedIndex) return cachedIndex;
  cachedIndex = await getJson<RegistryIndex>(`${REGISTRY}/index.json`);
  return cachedIndex;
}

/**
 * A single component. Free components arrive with real file content inline
 * (so docs pages can show genuine, in-sync source). Paid components come
 * back metadata-only with `requiresLicense: true` — this function never
 * authenticates, so paid source is structurally impossible to fetch here.
 * That is the leak check for this repo: no code path in this site can ever
 * hold paid source in memory.
 */
export async function fetchComponent(slug: string): Promise<RegistryComponent> {
  return getJson<RegistryComponent>(`${REGISTRY}/${slug}.json`);
}

const CATEGORY_ORDER = [
  'Heroes & Sections',
  'Forms',
  'Carousels & Tickers',
  'Bento & Layout',
  'Core UI',
  'Marketing & Social Proof',
  'E-Commerce',
  'Content & Dashboard',
  'Backgrounds',
  'Cards & Expandables',
  'Stats & Numbers',
  'Long-form',
  'Growth & Conversion',
  'Standard Data',
  'Standard Navigation',
  'Standard Overlays & Menus',
];

export function byCategory(components: RegistrySummary[]) {
  const names = [...new Set(components.map((c) => c.category ?? 'Other'))].sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a);
    const bi = CATEGORY_ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
  return names.map((name) => {
    const items = components.filter((c) => (c.category ?? 'Other') === name);
    return {
      name,
      items,
      free: items.filter((c) => c.access === 'free').length,
      paid: items.filter((c) => c.access !== 'free').length,
    };
  });
}

export function categorySlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
