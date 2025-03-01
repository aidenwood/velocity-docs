// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Velocity Docs',
			social: {
				github: 'https://github.com/aidenwood',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Components',
					// Autogenerate a group of links for directory.
					autogenerate: { directory: 'components' },
				  },
			],
		}),
	],
});
