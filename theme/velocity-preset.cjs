/**
 * Velocity Tailwind preset — the one line that makes every Velocity component
 * work in a project that is not Velocity.
 *
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('./velocity-theme/velocity-preset.cjs')],
 *     content: ['./src/**\/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
 *   }
 *
 * WHY THIS EXISTS
 * Every Velocity component is written against a `primary-*` / `accent-*` scale.
 * Without this preset those class names resolve to nothing, and a component
 * installed into a fresh Next or Vite app renders with no colour at all — which
 * would make the entire free tier look broken on first contact.
 *
 * This preset defines that scale in terms of CSS custom properties, so:
 *   - the class names in the components never change,
 *   - and you re-theme the whole set by overriding ~24 variables, nothing else.
 *
 * ── THE ALPHA-CHANNEL GOTCHA (read before editing) ──────────────────────────
 * The variables hold **raw space-separated RGB channels** (`187 51 255`), NOT
 * `#BB33FF` and NOT `rgb(187 51 255)`. That is what lets Tailwind's slash-opacity
 * syntax work: `bg-primary-600/20` compiles to
 * `rgb(var(--vx-primary-600) / 0.2)`. Put a hex in the variable and every
 * opacity variant in the library silently fails — the colour renders at full
 * strength or not at all, with no error. This exact class of bug has already
 * shipped unreadable hero text on this codebase once.
 */

/** Builds a Tailwind colour scale backed by CSS vars, alpha-channel safe. */
function cssVarScale(name, stops) {
  return Object.fromEntries(
    stops.map((stop) => [stop, `rgb(var(--vx-${name}-${stop}) / <alpha-value>)`])
  );
}

const STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: cssVarScale('primary', STOPS),
        accent: cssVarScale('accent', STOPS),

        // Neutral ramp. 154 of the shipped component files are written against
        // `text-secondary-*` / `bg-secondary-*` / `border-secondary-*`. This
        // resolved on aidxn.com only because that project's own config maps
        // `secondary: colors.neutral` — installed anywhere else, every one of
        // those classes compiled to nothing.
        secondary: cssVarScale('secondary', STOPS),

        // Semantic aliases. Use these in new components where the meaning is
        // clearer than a ramp stop — they re-theme with everything else.
        surface: 'rgb(var(--vx-surface) / <alpha-value>)',
        'surface-raised': 'rgb(var(--vx-surface-raised) / <alpha-value>)',
        ink: 'rgb(var(--vx-ink) / <alpha-value>)',
        'ink-muted': 'rgb(var(--vx-ink-muted) / <alpha-value>)',
        hairline: 'rgb(var(--vx-hairline) / <alpha-value>)',
      },
      borderRadius: {
        vx: 'var(--vx-radius, 0.75rem)',
        'vx-lg': 'var(--vx-radius-lg, 1rem)',
      },
      fontFamily: {
        // Deliberately inherits. Velocity never sets a component-level
        // font-family — the host project's own font cascade wins, which is why
        // these components do not fight an existing design system.
        vx: 'var(--vx-font, inherit)',
      },
    },
  },
};
