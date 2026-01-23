import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Supabase env vars missing", {
    supabaseUrl,
    supabaseAnonKey,
  });
}

export const getSupabaseClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey);
};
