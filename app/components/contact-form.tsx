'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Send, Phone, MessageCircle } from 'lucide-react'
import { WhatsappIcon } from './icons'

const WHATSAPP_NUMBER = '201062577690'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim().slice(0, 100)
    const whatsapp = String(formData.get('whatsapp') ?? '').trim().slice(0, 30)
    const message = String(formData.get('message') ?? '').trim().slice(0, 2000)

    // Best-effort copy to the database (does not block the visitor if it fails)
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, whatsapp, message }),
      keepalive: true,
    }).catch(() => {})

    // Main channel: open WhatsApp with the request prefilled
    const text = `مرحباً، أنا ${name}\nرقم الواتساب: ${whatsapp}\n\nتفاصيل الطلب:\n${message}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')

    toast({
      title: "تم إرسال طلبك بنجاح",
      description: "سنتواصل معك في أقرب وقت ممكن",
    })
    form.reset()
    setIsSubmitting(false)
  }


  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-blue-300 bg-blue-900/50 px-4 py-1.5 rounded-full mb-4">تواصل معنا</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            ابدأ مشروعك البحثي الآن
          </h2>
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
            أرسل لنا تفاصيل مشروعك وسنتواصل معك خلال ساعات قليلة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-center text-gray-900">أرسل لنا رسالتك</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="الاسم الكامل"
                    required
                    className="text-right h-12 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <Input
                    name="whatsapp"
                    type="tel"
                    placeholder="رقم الواتساب (مع كود الدولة)"
                    required
                    className="text-right h-12 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="اقتراحات فقط"
                    required
                    className="text-right rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 min-h-[140px]"
                    rows={5}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-l from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl text-lg font-bold shadow-lg shadow-indigo-300/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-300/40"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      جاري الإرسال...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      إرسال الطلب
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <WhatsappIcon className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">واتساب</h3>
                  <p className="text-blue-200/70 text-sm">الطريقة الأسرع للتواصل</p>
                </div>
              </div>
              <a
                href="https://wa.me/201062577690"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg"
              >
                تواصل عبر واتساب: 201062577690+
              </a>
            </div>

            <div className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">متاحون على مدار الساعة</h3>
                  <p className="text-blue-200/70 text-sm">نرد على رسائلكم بأسرع وقت ممكن</p>
                </div>
              </div>
              <p className="text-blue-100/60 text-sm leading-relaxed">
                فريقنا متاح يومياً للرد على استفساراتكم وتقديم الاستشارات المجانية الأولية لتقييم مشاريعكم البحثية.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">استشارة مجانية</h3>
                  <p className="text-blue-200/70 text-sm">نقيّم مشروعك مجاناً</p>
                </div>
              </div>
              <p className="text-blue-100/60 text-sm leading-relaxed">
                نقدم استشارة مجانية أولية لتقييم مشروعك وتحديد احتياجاتك ومتطلباتك قبل البدء في العمل، مع عرض سعر تفصيلي وجدول زمني واضح.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
