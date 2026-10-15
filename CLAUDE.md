# velocity-docs — CLAUDE.md

Docs site for Velocity Components + the velocityx CLI. Read this before
touching `src/layouts/Base.astro` or any header/sub-header component.

## Header rule — standard header everywhere, app sub-header on app surfaces only

`src/components/brand/VelocityHeader.astro`, `AppSubheader.astro`,
`AuthCorner.astro` and `supabaseChrome.ts` are **synced copies from
velocity-x-components** (`npm run sync:brand-chrome`, run from that repo —
not this one). **Never hand-edit these four files here** — they're
overwritten on every sync. Fix them in velocity-x-components, then sync.

- **`VelocityHeader.astro`** — the standard Aidxn header, mounted once in
  `Base.astro` via `<VelocityHeader productLabel="Docs" nav={...} cta={...} />`.
  Same lockup, nav shape and sticky behaviour as aidxn.com's live header
  (`velocity-x-stock/src/components/layout/Header-Minimal.astro`, read-only
  reference). Carries the aidxn login/account corner — signed-out shows
  "Sign in", signed-in shows "Dashboard", both pointing at
  `aidxn.com/dashboard/*`.
- **`AppSubheader.astro`** — the second, sticky bar docking directly
  underneath the header. **App surfaces only.** Here, that's every `/docs/**`
  page — `Base.astro` renders it whenever `pathname.startsWith('/docs/')`,
  passing the existing `nav` array (Getting Started / Components / CLI /
  Theming) as `sectionNav` and a breadcrumb built from the URL segments. The
  home page gets the bare header only.
- **`supabaseChrome.ts`** — Supabase client backing the login corner. Stub
  client when `PUBLIC_SUPABASE_URL` / `PUBLIC_SUPABASE_ANON_KEY` are unset
  (see `.env.example`) — the corner just shows "Sign in" forever, it never
  throws.

**Why the header doesn't float-shrink like aidxn.com's.** This header stays a
constant `h-16 sm:h-20`, full width — AppSubheader's sticky offset
(`top-16 sm:top-20`) is a fixed Tailwind value, not JS-measured. Don't
reintroduce a scroll-shrink animation without fixing that offset to match
(see the header comment in VelocityHeader.astro, canonical copy).

**Shell never remounts** (project-wide house rule). Both bars carry
`transition:persist` under `<ViewTransitions />` in `Base.astro` — Astro
morphs them across navigation instead of remounting.

**Cross-subdomain SSO is NOT live.** A session on aidxn.com does not appear
here — Supabase JS persists to localStorage, which is origin-scoped. See the
header comment in `supabaseChrome.ts`.

## Adding a new app surface

Add a `pathname.startsWith(...)` check in `Base.astro`'s `isAppSurface`
constant, build `appCrumbs`/`sectionNav` from your new section, pass to
`<AppSubheader crumbs={appCrumbs} sectionNav={...} />`.
