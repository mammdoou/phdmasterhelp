import type { Metadata } from "next"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { WhatsappFloat } from "../components/whatsapp-float"
import { BlogArticles } from "./components/blog-articles"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "مقالات أكاديمية للباحثين",
  description:
    "مقالات ونصائح أكاديمية مفيدة للباحثين وطلاب الماجستير والدكتوراه: كيفية كتابة رسالة الماجستير، خطوات إعداد البحث العلمي، التحليل الإحصائي، الصدق والثبات، ومناهج البحث.",
  keywords: [
    "مقالات أكاديمية",
    "نصائح للباحثين",
    "كتابة رسالة ماجستير",
    "خطوات البحث العلمي",
    "تحليل إحصائي SPSS",
    "مناهج البحث العلمي",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              مقالات أكاديمية للباحثين
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              نقدم لكم مجموعة من المقالات والنصائح الأكاديمية التي تساعد الباحثين وطلاب الدراسات العليا
              في رحلتهم البحثية
            </p>
          </div>
        </section>

        <BlogArticles />
        <Footer />
      </div>
      <WhatsappFloat />
    </main>
  )
}
