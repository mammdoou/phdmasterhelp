import Link from "next/link"
import { Clock, ArrowLeft } from "lucide-react"
import { articles } from "@/lib/articles"
import { WhatsappIcon } from "../../components/icons"

export function BlogArticles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              id={`article-card-${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`relative bg-gradient-to-l ${article.color} p-6 overflow-hidden`}>
                <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-700" />
                <article.icon className="relative h-10 w-10 text-white/90 mb-3" />
                <div className="relative flex items-center gap-1.5 text-white/80 text-sm">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime} قراءة
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-bold leading-relaxed text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{article.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm group-hover:gap-2.5 transition-all">
                  اقرأ المقال
                  <ArrowLeft className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-l from-blue-600 to-indigo-700 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">هل تحتاج مساعدة متخصصة؟</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            فريقنا من الأكاديميين المتخصصين جاهز لمساعدتك في كتابة رسالتك العلمية وتحليل بياناتك الإحصائية
          </p>
          <a
            href="https://wa.me/201062577690"
            target="_blank"
            rel="noopener noreferrer"
            id="blog-cta-whatsapp"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-0.5"
          >
            <WhatsappIcon className="h-6 w-6" />
            تواصل معنا الآن على واتساب
          </a>
        </div>
      </div>
    </section>
  )
}
