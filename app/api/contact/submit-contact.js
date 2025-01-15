import { supabase } from '../../lib/supabaseClient'; // تأكد من مسار ملف supabaseClient.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // استخراج البيانات من جسم الطلب
      const { name, whatsapp, message } = req.body; // تم تغيير email إلى whatsapp

      // إدخال البيانات في جدول 'contacts' مع التاريخ
      const { data, error } = await supabase
        .from('contacts')
        .insert([{ name, whatsapp, message, created_at: new Date().toISOString() }]); // تأكد من أن الأعمدة صحيحة

      // التحقق من وجود أخطاء أثناء الإدخال
      if (error) {
        console.error('Supabase error:', error.message);
        return res.status(500).json({ error: error.message });
      }

      // إرسال استجابة بنجاح
      return res.status(200).json({ message: 'تم إرسال البيانات بنجاح!', data });
    } catch (error) {
      console.error('Error inserting data:', error);
      return res.status(500).json({ error: 'حدث خطأ أثناء إرسال البيانات.' });
    }
  } else {
    return res.status(405).json({ error: 'الطريقة غير مدعومة' });
  }
}
