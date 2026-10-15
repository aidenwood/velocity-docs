import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// The docs site for Velocity Components + the velocityx CLI. Every component
// reference page is generated at build time from the live registry
// (https://aidxn.com/r) — never from a copy of free-components.json pasted
// into this repo. One source of truth, read over the network, not forked.
export default defineConfig({
  site: 'https://docs.aidxn.com',
  trailingSlash: 'always',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
