import { Amiri } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const amiri = Amiri({ 
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${amiri.variable} font-amiri`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

