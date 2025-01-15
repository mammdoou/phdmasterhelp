'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import type { Contact } from '@/lib/supabase'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data: Contact = {
      name: formData.get('name') as string,
      whatsapp: formData.get('whatsapp') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) throw new Error(result.message)

      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سنتواصل معك في أقرب وقت ممكن"
      })
      
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-10" 
        style={{backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/376253290-qlWoDQ9yXAJtODG1IS0KZMhMFwq9j4.jpeg')"}}
      ></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">تواصل معنا</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="الاسم"
                    required
                    className="text-right"
                  />
                </div>
                <div>
                  <Input
                    name="whatsapp"
                    type="tel"
                    placeholder="رقم الواتساب"
                    required
                    className="text-right"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="رسالتك"
                    required
                    className="text-right"
                    rows={5}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

