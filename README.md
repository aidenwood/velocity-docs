# Velocity Docs

Docs site for [Velocity Components](https://github.com/aidenwood/velocity-components) and the
[`velocityx` CLI](https://github.com/aidenwood/velocityX-cli). Astro + Tailwind, themed with the
same Velocity preset shipped to customers.

**Public.** This repo was previously an unused Starlight starter (last touched March 2025) —
it's now the real docs surface for the component subscription.

## What's here

- `/` — landing page: what Velocity Components is, free vs subscription, SEO entry point.
- `/docs/getting-started/` — install the CLI, add a component, wire up the theme.
- `/docs/components/` + `/docs/components/<slug>/` — full reference, **generated at build time
  from the live registry** (`https://aidxn.com/r`), one page per component.
- `/docs/cli/` — every `velocityx` command.
- `/docs/theming/` — the 24 CSS variables that re-theme the whole library.

## One source of truth — no second copy of the manifest

Component pages are **not** built from a copy of `free-components.json` pasted into this repo.
`src/lib/registry.ts` fetches `https://aidxn.com/r/index.json` and `https://aidxn.com/r/<slug>.json`
at build time — the same endpoint the CLI and the components showcase site read. Free components
arrive with real file content inline (so the "Source" section on a free component's page is
always the current, genuine file); paid components come back `files: []` / `requiresLicense: true`
with no authentication ever attempted here, so there is no code path in this repo that can hold
paid source in memory. Rebuilding this site always picks up the latest registry state — there is
nothing here to fall out of sync.

The theme files (`theme/velocity-preset.cjs`, `theme/velocity-theme.css`) are vendored the same
way, via `npm run sync:theme` — pulled from the live registry's `theme.json`, not hand-copied.
Re-run it if the upstream theme contract changes.

## Dev

```bash
npm install
npm run sync:theme   # refresh theme/ from the live registry (occasional, not on every build)
npm run dev
npm run build         # writes dist/, generates sitemap-index.xml
npm run preview
```

## Netlify

`netlify.toml` builds with `npm run build` → publishes `dist/`. Site: `docs.aidxn.com`.

## Verifying the leak boundary

After any change to `src/pages/docs/components/`, confirm the split still holds in the build
output:

```bash
npm run build
grep -rl "Pulled live from the registry" dist/docs/components/*/index.html | wc -l   # expect 40 (free)
grep -rl "subscription gates" dist/docs/components/*/index.html | wc -l               # expect 180 (paid)
```

If those two numbers don't match the registry's free/paid split, something in
`src/pages/docs/components/[slug]/index.astro` is leaking — stop and fix it before deploying.
