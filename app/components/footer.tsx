import { Facebook, BookOpen } from 'lucide-react'
import { WhatsappIcon } from "./icons"
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">PhD Master Help</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              خدمات أكاديمية متميزة في كتابة رسائل الماجستير والدكتوراه والأبحاث العلمية والتحليل الإحصائي. نخدم الباحثين في جميع أنحاء الوطن العربي.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/201062577690"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="واتساب"
              >
                <WhatsappIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/writer1995"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="فيسبوك"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">خدماتنا</h3>
            <ul className="space-y-3">
              {[
                "رسائل الماجستير والدكتوراه",
                "الأبحاث العلمية",
                "التحليل الإحصائي",
                "خدمات الترجمة",
                "تنسيق الرسائل",
                "إعداد أدوات الدراسة",
              ].map((service, i) => (
                <li key={i}>
                  <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">روابط مفيدة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
                  مقالات أكاديمية
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/201062577690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-2">واتساب (متاحون ٢٤/٧)</p>
                <a
                  href="https://wa.me/201062577690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 font-bold text-lg hover:text-green-300 transition-colors"
                >
                  201062577690+
                </a>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                نخدم الباحثين والطلاب في مصر والسعودية والإمارات والكويت والأردن والعراق وجميع الدول العربية.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            جميع الحقوق محفوظة © {new Date().getFullYear()} PhD Master Help
          </p>
          <p className="text-sm text-gray-500">
            كتابة رسائل الماجستير والدكتوراه والأبحاث العلمية والإحصاء
          </p>
        </div>
      </div>
    </footer>
  )
}
