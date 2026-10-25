import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import type { Contact } from '@/lib/supabase'

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data: Contact = {
      name: clean(body?.name, 100),
      whatsapp: clean(body?.whatsapp, 30),
      message: clean(body?.message, 2000),
    }

    if (!data.name || !data.whatsapp || !data.message) {
      return NextResponse.json(
        { success: false, message: 'جميع الحقول مطلوبة' },
        { status: 400 }
      )
    }

    const supabase = getSupabase()
    if (!supabase) {
      return NextResponse.json(
        { success: false, message: 'قاعدة البيانات غير مهيأة' },
        { status: 503 }
      )
    }

    const { error } = await supabase.from('contacts').insert([data])
    if (error) throw error

    return NextResponse.json({ success: true, message: 'تم إرسال رسالتك بنجاح' })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, message: 'حدث خطأ أثناء إرسال الرسالة' },
      { status: 500 }
    )
  }
}
