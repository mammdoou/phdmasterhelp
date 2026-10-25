'use client'
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "./icons"
import { useCallback } from 'react'
import { GraduationCap, BookOpen, BarChart3, Award } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 animate-gradient" />
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse-glow" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        
        {/* Floating icons */}
        <div className="absolute top-32 right-[15%] animate-float opacity-20">
          <GraduationCap className="h-16 w-16 text-blue-300" />
        </div>
        <div className="absolute bottom-40 right-[25%] animate-float-slow opacity-15">
          <BookOpen className="h-12 w-12 text-purple-300" />
        </div>
        <div className="absolute top-48 left-[20%] animate-float opacity-10">
          <BarChart3 className="h-14 w-14 text-cyan-300" />
        </div>
        <div className="absolute bottom-32 left-[10%] animate-float-slow opacity-15">
          <Award className="h-10 w-10 text-amber-300" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-blue-200 text-sm font-medium">أكثر من ١٠٠٠ باحث يثقون بنا</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-slide-up delay-100">
            خدمات أكاديمية متميزة في
            <span className="block mt-2 bg-gradient-to-l from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              كتابة الرسائل العلمية والأبحاث
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-200">
            نساعدك في كتابة رسائل الماجستير والدكتوراه والأبحاث العلمية والتحليل الإحصائي 
            بأعلى جودة أكاديمية وأسعار منافسة
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <Button 
              className="gap-2 text-lg bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5"
              size="lg"
              onClick={useCallback(() => window.open('https://wa.me/201062577690', '_blank'), [])}
            >
              <WhatsappIcon className="h-5 w-5" />
              تواصل معنا على واتساب
            </Button>
            <Button 
              className="gap-2 text-lg bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              size="lg"
              onClick={useCallback(() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }, [])}
            >
              <BookOpen className="h-5 w-5 text-blue-600" />
              تعرف على خدماتنا
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up delay-500">
            {[
              { number: '+١٠٠٠', label: 'بحث منجز', icon: BookOpen },
              { number: '+٥٠٠', label: 'رسالة ماجستير', icon: GraduationCap },
              { number: '+٢٠٠', label: 'تحليل إحصائي', icon: BarChart3 },
              { number: '١٠٠%', label: 'رضا العملاء', icon: Award },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-4 hover:bg-white/10 transition-all duration-300">
                <stat.icon className="h-6 w-6 text-blue-300 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-black text-white">{stat.number}</div>
                <div className="text-blue-200/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  )
}
