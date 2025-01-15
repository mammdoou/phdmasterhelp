'use client'
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "./icons"
import { Image } from "./image"
import { useCallback } from 'react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-right mb-10 md:mb-0">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            خدمات أكاديمية متميزة
          </h1>
          <p className="mb-8 text-xl text-gray-700">
            نقدم خدمات كتابة رسائل الماجستير والدكتوراه والأبحاث العلمية والتحليل الإحصائي بجودة عالية وأسعار منافسة
          </p>
          <Button 
            className="gap-2 text-lg bg-green-600 hover:bg-green-700"
            size="lg"
            onClick={useCallback(() => window.open('https://wa.me/201062577690', '_blank'), [])}
          >
            <WhatsappIcon className="h-5 w-5" />
            تواصل معنا على واتساب
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%A8%D8%AF%D9%88%D9%86-%D8%B9%D9%86%D9%88%D8%A7%D9%86-49-1024x576-LjmP7SnSYovqGwj4iFvZ4dG2bZnXYu.png"
            alt="كتب أكاديمية"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

