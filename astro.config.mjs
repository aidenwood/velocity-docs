// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Velocity Docs',
        social: {
            github: 'https://github.com/aidenwood',
        },
        sidebar: [
            {
                label: 'Why Velocity',
                autogenerate: { directory: 'why-velocity' },
            },
            {
                label: 'Guides',
                autogenerate: { directory: 'guides' },
            },
            {
                label: 'Starter Templates',
                autogenerate: { directory: 'templates' },
            },
            {
                label: 'Components',
                // Autogenerate a group of links for directory.
                autogenerate: { directory: 'components' },
              },
        ],
		}), markdoc()],
});