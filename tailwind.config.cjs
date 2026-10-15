/**
 * Dogfooding, same as the components site: this docs site themes itself with
 * the SAME preset shipped to customers (synced from the live registry via
 * `npm run sync:theme`, see theme/). If the preset regresses, these docs
 * visibly break too.
 */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  presets: [require('./theme/velocity-preset.cjs')],
};
