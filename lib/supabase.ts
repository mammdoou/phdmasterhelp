import { createClient, SupabaseClient } from '@supabase/supabase-js';

// التحقق من أن المتغيرات البيئية موجودة
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// إذا كانت المتغيرات البيئية مفقودة، إطلاق خطأ مع رسالة واضحة
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Environment variables NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required.');
}

// إنشاء عميل Supabase
let supabase: SupabaseClient;
try {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} catch (error) {
  console.error('Failed to initialize Supabase client:', error);
  throw new Error('Supabase client initialization failed.');
}

// تصدير العميل للاستخدام في باقي المشروع
export { supabase };
