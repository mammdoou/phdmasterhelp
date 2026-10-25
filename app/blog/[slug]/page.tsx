import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, ArrowRight, ArrowLeft } from "lucide-react"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { WhatsappFloat } from "../../components/whatsapp-float"
import { WhatsappIcon } from "../../components/icons"
import { ArticleContent } from "../components/article-content"
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/articles"
import { SITE_URL, SITE_NAME } from "@/lib/site"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  const url = `${SITE_URL}/blog/${article.slug}`
  return {
    title: article.title,
    description: article.summary,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "ar_AR",
      url,
      siteName: SITE_NAME,
      title: article.title,
      description: article.summary,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = getRelatedArticles(article.slug)
  const url = `${SITE_URL}/blog/${article.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    keywords: article.keywords.join(", "),
    inLanguage: "ar",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "مقالات أكاديمية", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      {/* Article header */}
      <header className={`relative bg-gradient-to-br ${article.color} pt-28 pb-16 overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-black/30 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <nav aria-label="مسار التنقل" className="flex flex-wrap items-center gap-2 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              مقالات أكاديمية
            </Link>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
              <article.icon className="h-7 w-7 text-white" />
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-white/90 text-sm backdrop-blur-sm">
              <Clock className="h-4 w-4" />
              {article.readTime} قراءة
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug md:leading-snug mb-5">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl">{article.summary}</p>
        </div>
      </header>

      {/* Article body */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-12">
          <ArticleContent content={article.content} />

          {/* CTA */}
          <div className="mt-12 p-6 md:p-8 bg-gradient-to-l from-green-50 to-emerald-50 rounded-2xl border border-green-200">
            <p className="text-xl font-bold text-gray-800 mb-3">هل تحتاج مساعدة في بحثك أو رسالتك العلمية؟</p>
            <p className="text-gray-600 mb-5 leading-relaxed">
              فريقنا من الخبراء الأكاديميين جاهز لمساعدتك في جميع مراحل البحث العلمي: من خطة البحث وحتى التحليل
              الإحصائي والتنسيق النهائي. تواصل معنا الآن!
            </p>
            <a
              href="https://wa.me/201062577690"
              target="_blank"
              rel="noopener noreferrer"
              id="article-cta-whatsapp"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <WhatsappIcon className="h-5 w-5" />
              تواصل معنا على واتساب
            </a>
          </div>
        </article>
      </section>

      {/* Related articles */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">مقالات ذات صلة</h2>
            <Link
              href="/blog"
              id="back-to-blog"
              className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
              كل المقالات
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group flex flex-col rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-l ${r.color}`} />
                <div className="flex flex-1 flex-col p-6">
                  <r.icon className="h-8 w-8 text-gray-400 group-hover:text-blue-600 transition-colors mb-3" />
                  <h3 className="font-bold text-gray-900 leading-relaxed group-hover:text-blue-600 transition-colors mb-3 flex-1">
                    {r.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-medium group-hover:gap-2.5 transition-all">
                    اقرأ المقال
                    <ArrowLeft className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappFloat />
    </main>
  )
}
