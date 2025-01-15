import { Facebook } from 'lucide-react'
import { WhatsappIcon } from "./icons"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">خدماتنا الأكاديمية</h3>
            <ul className="space-y-2">
              <li>رسائل الماجستير والدكتوراه</li>
              <li>الأبحاث العلمية</li>
              <li>التحليل الإحصائي</li>
              <li>خدمات الترجمة</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-lg font-semibold mb-4">
              تواصل معنا من جميع انحاء العالم عبر واتساب: <span className="text-xl font-bold text-green-400">+ 201062577690</span>
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://wa.me/201062577690"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                <WhatsappIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/writer1995"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              جميع الحقوق محفوظة © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
