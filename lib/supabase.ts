import { createClient, SupabaseClient } from '@supabase/supabase-js';

export type Contact = {
  name: string;
  whatsapp: string;
  message: string;
};

// التحقق من المتغيرات البيئية عند الاستخدام فقط، حتى لا يتعطل بناء الموقع إذا لم تكن مضبوطة
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

/** يعيد عميل Supabase، أو null إذا كانت المتغيرات البيئية غير موجودة */
export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  if (!client) client = createClient(supabaseUrl, supabaseAnonKey);
  return client;
}
