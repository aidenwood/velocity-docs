/**
 * Shared Aidxn auth client for the Velocity product sub-sites
 * (components.aidxn.com, docs.aidxn.com). Points at the SAME Supabase
 * project aidxn.com (velocity-x-stock) uses — see
 * ~/.claude/projects/-Users-aidenwood/memory/project_aidxn_supabase_shared.md.
 * This is a NEW client for a NEW origin, not a copy of velocity-x-stock's
 * src/lib/supabase.ts — that file is read-only (velocity-x-stock is live,
 * never edited). Same stub-on-missing-env + disabled-navigator-lock pattern,
 * ported deliberately so both products behave identically.
 *
 * CANONICAL HOME: this file lives here, in velocity-x-components. velocity-docs
 * receives a synced copy via `npm run sync:brand-chrome` — don't hand-edit it
 * there.
 *
 * ⚠️ Cross-subdomain session sharing is NOT live yet. Supabase JS persists
 * sessions to localStorage by default, which is origin-scoped — a session on
 * aidxn.com does not appear on components.aidxn.com or docs.aidxn.com even
 * though they're the same registrable domain. True SSO needs a cookie-based
 * storage adapter with a Domain=.aidxn.com cookie on ALL THREE sites, including
 * velocity-x-stock (read-only here — can't be changed from this repo). Until
 * that lands, "signed in" on aidxn.com does not carry over to these two
 * sub-sites; each manages its own session via the SAME login flow
 * (`${SITE}/dashboard/login`) but a user must land back at aidxn.com's
 * dashboard to see dashboard content. Flagged in the handover ticket.
 */
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

// Minimal no-op client for builds with no Supabase env (e.g. this repo before
// PUBLIC_SUPABASE_URL/ANON_KEY are set in Netlify). Marketing chrome (header,
// nav) must render regardless — never throw on hydration just because auth
// env is missing.
function makeStubClient(): SupabaseClient {
  const noSession = async () => ({ data: { session: null }, error: null });
  const authStub = {
    getSession: noSession,
    getUser: async () => ({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
    signOut: async () => ({ error: null }),
  };
  return { auth: authStub } as unknown as SupabaseClient;
}

function getSupabase(): SupabaseClient {
  if (_supabase) return _supabase;

  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof console !== 'undefined') {
      console.warn(
        '[supabaseChrome] PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_ANON_KEY not set — auth corner renders signed-out only.'
      );
    }
    _supabase = makeStubClient();
    return _supabase;
  }

  // Disable navigator.locks-based session locking — same fix as
  // velocity-x-stock's src/lib/supabase.ts. Two islands awaiting
  // getSession() in parallel during hydration can otherwise deadlock with no
  // error. See feedback_supabase_navigator_lock_deadlock.md.
  _supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      lock: async (_name: string, _acquireTimeout: number, fn: () => Promise<any>) => fn(),
    },
  });
  return _supabase;
}

export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop, receiver) {
    return Reflect.get(getSupabase(), prop, receiver);
  },
});
