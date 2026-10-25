import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, PenTool, BarChart3, Languages, FileCheck, Microscope } from 'lucide-react'

const services = [
  {
    title: "رسائل الماجستير والدكتوراه",
    description: "نقدم المساعدة الشاملة في كتابة وتنسيق رسائل الماجستير والدكتوراه بأعلى جودة أكاديمية، مع الالتزام بالمعايير البحثية المعتمدة والمتابعة حتى المناقشة.",
    icon: BookOpen,
    gradient: "from-blue-500 to-indigo-600",
    features: ["إعداد خطة البحث", "كتابة الإطار النظري", "تصميم المنهجية", "التنسيق والتوثيق"]
  },
  {
    title: "الأبحاث العلمية",
    description: "نساعد في إعداد الأبحاث العلمية القابلة للنشر في المجلات المحكمة العربية والدولية، مع التركيز على المنهجية السليمة وأصالة المحتوى.",
    icon: PenTool,
    gradient: "from-purple-500 to-violet-600",
    features: ["أبحاث الترقية", "أبحاث النشر الدولي", "أوراق المؤتمرات", "المراجعات المنهجية"]
  },
  {
    title: "التحليل الإحصائي",
    description: "نقدم خدمات التحليل الإحصائي المتقدمة باستخدام SPSS وAMOS وEViews وR، مع إعداد تقارير إحصائية مفصلة وتفسير النتائج.",
    icon: BarChart3,
    gradient: "from-emerald-500 to-teal-600",
    features: ["تحليل SPSS", "نمذجة المعادلات البنائية", "التحليل العاملي", "تقارير إحصائية"]
  },
  {
    title: "خدمات الترجمة الأكاديمية",
    description: "نوفر ترجمة احترافية متخصصة في المجالات الأكاديمية والعلمية من وإلى اللغة الإنجليزية، مع مراعاة المصطلحات التخصصية الدقيقة.",
    icon: Languages,
    gradient: "from-orange-500 to-amber-600",
    features: ["ترجمة الأبحاث", "ترجمة الملخصات", "ترجمة المراجع", "التدقيق اللغوي"]
  },
  {
    title: "تنسيق الرسائل العلمية",
    description: "خدمة تنسيق احترافية وفقاً لدليل الجامعة المعتمد، شاملة تنسيق الجداول والأشكال والمراجع وقائمة المحتويات والملاحق.",
    icon: FileCheck,
    gradient: "from-cyan-500 to-blue-600",
    features: ["تنسيق APA / Harvard", "تنسيق الجداول", "قائمة المراجع", "فهرس المحتويات"]
  },
  {
    title: "إعداد أدوات الدراسة",
    description: "نساعد في تصميم وتطوير أدوات جمع البيانات كالاستبانات والمقابلات والاختبارات، مع التحقق من صدقها وثباتها.",
    icon: Microscope,
    gradient: "from-rose-500 to-pink-600",
    features: ["تصميم الاستبانات", "بناء المقاييس", "صدق وثبات الأدوات", "التحكيم"]
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(99,102,241,0.05) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(168,85,247,0.05) 0%, transparent 50%)'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">خدماتنا</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            خدمات أكاديمية شاملة ومتكاملة
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الأكاديمية التي تغطي جميع احتياجات الباحثين وطلاب الدراسات العليا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="premium-card border-0 shadow-md overflow-hidden bg-white rounded-2xl group">
              {/* Colored header bar */}
              <div className={`h-2 bg-gradient-to-l ${service.gradient}`} />
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
