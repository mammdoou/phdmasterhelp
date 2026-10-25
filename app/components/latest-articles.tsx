import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { articles } from "@/lib/articles"

export function LatestArticles() {
  const latest = articles.slice(0, 3)

  return (
    <section id="articles" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
            مكتبة الباحث
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">مقالات تفيدك في رحلتك البحثية</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            أدلة عملية مكتوبة بخبرة أكاديمية تساعدك في كل مرحلة من مراحل رسالتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              id={`home-article-${article.slug}`}
              className="group flex flex-col rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`relative bg-gradient-to-l ${article.color} p-6 overflow-hidden`}>
                <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-700" />
                <article.icon className="relative h-9 w-9 text-white mb-2" />
                <span className="relative flex items-center gap-1.5 text-white/80 text-sm">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime} قراءة
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-bold text-lg text-gray-900 leading-relaxed group-hover:text-indigo-600 transition-colors mb-3">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{article.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-indigo-600 font-medium text-sm group-hover:gap-2.5 transition-all">
                  اقرأ المقال
                  <ArrowLeft className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            id="home-all-articles"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            تصفح كل المقالات ({articles.length})
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
