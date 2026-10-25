'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "ما هي الخدمات التي تقدمونها؟",
    answer: "نقدم مجموعة شاملة من الخدمات الأكاديمية تشمل: كتابة رسائل الماجستير والدكتوراه، إعداد الأبحاث العلمية القابلة للنشر، التحليل الإحصائي باستخدام SPSS وAMOS وEViews، تصميم أدوات الدراسة (استبانات ومقاييس)، تنسيق الرسائل العلمية، الترجمة الأكاديمية المتخصصة، وكتابة خطط البحث (البروبوزال)."
  },
  {
    question: "كم تستغرق مدة إعداد رسالة الماجستير؟",
    answer: "تختلف المدة حسب حجم الرسالة وتعقيدها والتخصص المطلوب. بشكل عام، تستغرق رسالة الماجستير من ٣ إلى ٦ أشهر. يمكننا العمل على جدول زمني مخصص يتناسب مع مواعيدك النهائية. نوفر أيضاً خدمة التسليم العاجل للحالات الطارئة بتكلفة إضافية."
  },
  {
    question: "هل تضمنون سرية المعلومات؟",
    answer: "نعم، نلتزم بسرية تامة لجميع بيانات ومعلومات عملائنا. لا نشارك أي تفاصيل عن المشاريع مع أي طرف ثالث. جميع الملفات والمراسلات محمية ومشفرة، ونحذف جميع البيانات بعد انتهاء المشروع حسب رغبة العميل."
  },
  {
    question: "ما البرامج الإحصائية التي تستخدمونها؟",
    answer: "نستخدم مجموعة متنوعة من البرامج الإحصائية المتقدمة حسب طبيعة البحث ومتطلباته: SPSS للتحليلات الأساسية والمتقدمة، AMOS لنمذجة المعادلات البنائية (SEM)، EViews للتحليل الاقتصادي والسلاسل الزمنية، R للتحليلات المتقدمة والرسوم البيانية، وExcel للجداول والرسوم التوضيحية."
  },
  {
    question: "كيف يمكنني التواصل معكم؟",
    answer: "يمكنك التواصل معنا بسهولة عبر واتساب على الرقم 201062577690+ في أي وقت على مدار الساعة. فريقنا جاهز للرد على استفساراتك وتقديم استشارة مجانية أولية لتقييم مشروعك وتحديد احتياجاتك."
  },
  {
    question: "هل تقدمون تعديلات بعد التسليم؟",
    answer: "نعم، نقدم تعديلات مجانية بعد التسليم لضمان رضاك الكامل. نستقبل ملاحظاتك وملاحظات المشرف الأكاديمي ونعمل على تنفيذها بدقة. هدفنا هو الوصول للقبول النهائي للعمل من جانب جامعتك أو المجلة العلمية."
  },
  {
    question: "هل يمكنكم المساعدة في النشر في مجلات علمية محكمة؟",
    answer: "نعم، نساعد في إعداد الأبحاث وفقاً لمعايير المجلات العلمية المحكمة (Scopus, ISI, ARCIF). نساعدك في اختيار المجلة المناسبة لتخصصك، وتنسيق البحث وفق شروط المجلة، والرد على ملاحظات المحكمين حتى القبول النهائي."
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نوفر طرق دفع مرنة تناسب عملاءنا في جميع أنحاء الوطن العربي: التحويل البنكي، فودافون كاش، الدفع الإلكتروني. يتم الاتفاق على خطة الدفع مع بداية المشروع، وعادةً ما يكون الدفع على مراحل مرتبطة بمراحل التسليم."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">أسئلة شائعة</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            الأسئلة الأكثر شيوعاً
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            إجابات على أهم الأسئلة التي يطرحها عملاؤنا
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-right"
              >
                <span className="font-bold text-gray-900 text-base">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 flex-shrink-0 mr-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="px-5 text-gray-500 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
