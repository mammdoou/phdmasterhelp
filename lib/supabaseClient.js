// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// استيراد البيانات من ملف البيئة
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// إنشاء عميل Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
