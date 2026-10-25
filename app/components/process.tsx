import { MessageCircle, FileSearch, PenLine, CheckCircle2, Send } from 'lucide-react'

const steps = [
  {
    number: "٠١",
    icon: MessageCircle,
    title: "التواصل والاستشارة",
    description: "تواصل معنا عبر واتساب وأخبرنا بتفاصيل مشروعك البحثي: نوع الخدمة المطلوبة، التخصص، الموعد النهائي، وأي متطلبات خاصة من جامعتك.",
    color: "bg-blue-500"
  },
  {
    number: "٠٢",
    icon: FileSearch,
    title: "دراسة الطلب والتسعير",
    description: "يقوم فريقنا بدراسة طلبك بعناية وتحديد المتخصص المناسب، ثم نرسل لك عرض سعر تفصيلي يشمل الخدمات والمواعيد المتفق عليها.",
    color: "bg-indigo-500"
  },
  {
    number: "٠٣",
    icon: PenLine,
    title: "بدء العمل والمتابعة",
    description: "نبدأ العمل فوراً بعد الاتفاق. نرسل لك تحديثات دورية عن سير العمل ونستقبل ملاحظاتك أولاً بأول لضمان رضاك الكامل.",
    color: "bg-purple-500"
  },
  {
    number: "٠٤",
    icon: CheckCircle2,
    title: "المراجعة والتعديل",
    description: "بعد إتمام العمل نقوم بمراجعة شاملة للجودة والأصالة، ثم نرسل لك العمل للمراجعة مع إمكانية إجراء تعديلات حتى القبول النهائي.",
    color: "bg-emerald-500"
  },
  {
    number: "٠٥",
    icon: Send,
    title: "التسليم والدعم",
    description: "نسلمك العمل النهائي بالصيغة المطلوبة مع جميع الملفات المرفقة، ونوفر دعماً مستمراً بعد التسليم لأي استفسارات أو تعديلات.",
    color: "bg-cyan-500"
  },
]

export function Process() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(99,102,241,0.08) 0%, transparent 50%)'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">كيف نعمل</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            خطوات بسيطة للحصول على خدمتك
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نجعل العملية سهلة وواضحة من البداية حتى النهاية
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="premium-card flex items-start gap-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl group">
              {/* Step number */}
              <div className={`flex-shrink-0 w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="h-7 w-7 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-indigo-400">{step.number}</span>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
              </div>

              {/* Connector line (hidden for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-[2.2rem] mt-16 w-0.5 h-6 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
