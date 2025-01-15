// app/api/submit-contact/route.ts

import { supabase } from '../../../lib/supabaseClient'; // تأكد من المسار الصحيح
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, whatsapp, message } = await req.json();

    // التأكد من وجود البيانات
    if (!name || !whatsapp || !message) {
      return NextResponse.json(
        { error: 'جميع الحقول (الاسم، الواتساب، الرسالة) مطلوبة.' },
        { status: 400 }
      );
    }

    // إدخال البيانات في جدول 'contacts' مع التاريخ
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          whatsapp,
          message,
          created_at: new Date().toISOString(), // إضافة التاريخ الحالي
        },
      ]);

    // التحقق من وجود أخطاء أثناء الإدخال
    if (error) {
      console.error('Supabase error:', error.message);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    // إرسال استجابة بنجاح
    return NextResponse.json(
      { message: 'تم إرسال البيانات بنجاح!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error inserting data:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء إرسال البيانات.' },
      { status: 500 }
    );
  }
}
