'use client'

import Link from 'next/link'
import { WhatsappIcon } from './icons'

export function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/201062577690"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <WhatsappIcon className="h-7 w-7 text-white" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      
      {/* Tooltip */}
      <span className="absolute left-full mr-3 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        تواصل معنا
      </span>
    </a>
  )
}
