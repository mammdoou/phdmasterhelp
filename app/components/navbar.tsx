'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, BookOpen, Home, Phone } from 'lucide-react'
import { WhatsappIcon } from './icons'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className={`font-bold text-lg transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-800'}`}>
              PhD Master Help
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`flex items-center gap-1.5 font-medium transition-colors hover:text-blue-600 ${
                scrolled ? 'text-gray-700' : 'text-gray-700'
              }`}
            >
              <Home className="h-4 w-4" />
              الرئيسية
            </Link>
            <Link
              href="/blog"
              className={`flex items-center gap-1.5 font-medium transition-colors hover:text-blue-600 ${
                scrolled ? 'text-gray-700' : 'text-gray-700'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              مقالات أكاديمية
            </Link>
            <a
              href="https://wa.me/201062577690"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all hover:shadow-lg"
            >
              <WhatsappIcon className="h-4 w-4" />
              تواصل معنا
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="القائمة"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 bg-white rounded-xl shadow-lg p-4 mt-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 font-medium transition-colors"
            >
              <Home className="h-5 w-5" />
              الرئيسية
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 font-medium transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              مقالات أكاديمية
            </Link>
            <a
              href="https://wa.me/201062577690"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
            >
              <WhatsappIcon className="h-5 w-5" />
              تواصل معنا على واتساب
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
