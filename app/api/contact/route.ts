import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import type { Contact } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const data: Contact = await request.json()
    
    const { error } = await supabase
      .from('contacts')
      .insert([data])

    if (error) throw error

    return NextResponse.json({ 
      success: true, 
      message: 'تم إرسال رسالتك بنجاح' 
    })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'حدث خطأ أثناء إرسال الرسالة' 
      },
      { status: 500 }
    )
  }
}

