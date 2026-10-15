# Velocity Docs

Docs site for Velocity Components and the `velocityx` CLI. Astro + Tailwind, themed with the
same Velocity preset shipped to customers.

Source repos are **private** — `aidenwood/velocity-x-components` (components + registry) and
`aidenwood/velocityX-cli` (the CLI). Don't link them from any public page here; both 404 for
anyone who isn't Aiden. The CLI is also **not published to npm** (`@aidxn/velocityx-cli` → 404,
re-confirmed 2026-10-16), which is why `/docs/getting-started/` says so in a banner instead of
printing an `npm install -g` line that cannot work.

**Public.** This repo was previously an unused Starlight starter (last touched March 2025) —
it's now the real docs surface for the component subscription.

## What's here

- `/` — landing page: what Velocity Components is, free vs subscription, SEO entry point.
- `/docs/getting-started/` — install the CLI, add a component, wire up the theme.
- `/docs/components/` + `/docs/components/<slug>/` — full reference, **generated at build time
  from the live registry** (`https://aidxn.com/r`), one page per component.
- `/docs/cli/` — every `velocityx` command.
- `/docs/theming/` — the 42 CSS variables that re-theme the whole library.

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

## Changes upstream (velocity-x-components)

This repo never forks component source or props — it reads the live registry and the vendored
theme/brand-chrome files at build time. If you're changing anything in `velocity-x-components`
itself (a component, its props, the theme kit), run `npm run verify` there before pushing — it's
that repo's pre-push gate (smoke render, basename check, paid-source leak check, ownership lock,
velocity-x sync check). This repo has nothing equivalent to run; it just needs a rebuild to pick
up whatever `verify` already confirmed is safe upstream.

## Netlify

`netlify.toml` builds with `npm run build` → publishes `dist/`. Site: `docs.aidxn.com`.

## Verifying the leak boundary

After any change to `src/pages/docs/components/`, confirm the split still holds in the build
output:

```bash
npm run build
grep -rl "Pulled live from the registry" dist/docs/components/*/index.html | wc -l   # expect 40 (free)
grep -rl "subscription gates" dist/docs/components/*/index.html | wc -l               # expect 365 (paid)
```

If those two numbers don't match the registry's free/paid split, something in
`src/pages/docs/components/[slug]/index.astro` is leaking — stop and fix it before deploying.
