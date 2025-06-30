import { createClient, type SupabaseClient } from "@supabase/supabase-js"

type StubResponse = { data: null; error: Error }

/**
 * Very small stub that mimics the Supabase client we rely on in the
 * contact-form action and the admin page. It prevents runtime crashes
 * in environments (like the v0 preview) where the real credentials are
 * not available.
 */
function createStubClient(): SupabaseClient {
  const err = new Error("Supabase is not configured in this environment.")

  // Minimal query-builder that lets us chain .select().order() etc.
  const buildResult = () => Promise.resolve({ data: null, error: err } as StubResponse)

  const builder = {
    insert: () => buildResult(),
    select: () => builder, // allow chaining
    order: () => buildResult(), // terminal
  }

  // @ts-expect-error – we’re intentionally returning a minimal mock, only what our code touches
  return {
    from() {
      return builder
    },
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export const supabaseAdmin =
  supabaseUrl && serviceRoleKey
    ? createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } })
    : createStubClient()
