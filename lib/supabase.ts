import { createClient, type SupabaseClient } from "@supabase/supabase-js"

function createStubClient(): SupabaseClient {
  const err = new Error("Supabase is not configured in this environment.")
  const buildResult = () => Promise.resolve({ data: null, error: err })

  const builder = {
    insert: () => buildResult(),
    select: () => builder, // keep chaining possible
    order: () => buildResult(),
  }

  // @ts-expect-error – minimal mock
  return {
    from() {
      return builder
    },
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : createStubClient()
