import { Users, Target, ShieldCheck, Clock } from 'lucide-react'

export function About() {
  const features = [
    {
      icon: Users,
      title: "فريق أكاديمي متخصص",
      description: "نخبة من حملة الدكتوراه والماجستير في مختلف التخصصات العلمية والأدبية، بخبرة تتجاوز ١٠ سنوات في مجال البحث العلمي."
    },
    {
      icon: Target,
      title: "دقة والتزام",
      description: "نلتزم بالمواعيد المحددة ونحرص على أعلى مستويات الدقة العلمية والمنهجية في كل عمل نقدمه لعملائنا."
    },
    {
      icon: ShieldCheck,
      title: "سرية تامة",
      description: "نضمن السرية الكاملة لجميع بيانات ومعلومات عملائنا، مع الالتزام بأخلاقيات البحث العلمي والنزاهة الأكاديمية."
    },
    {
      icon: Clock,
      title: "دعم متواصل",
      description: "نوفر دعماً مستمراً على مدار الساعة عبر واتساب، مع متابعة دورية ومراجعات وتعديلات حتى القبول النهائي."
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">من نحن</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            شريكك الأكاديمي الموثوق
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن فريق من الخبراء الأكاديميين المتخصصين في تقديم خدمات بحثية عالية الجودة للطلاب والباحثين 
            في جميع أنحاء الوطن العربي. نسعى لمساعدتك في تحقيق أهدافك الأكاديمية من خلال الدعم والتوجيه 
            المتخصص في مجالات البحث العلمي وكتابة الرسائل الجامعية والتحليل الإحصائي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="premium-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl text-center group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-200">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
