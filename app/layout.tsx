import { Amiri } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_SHORT_NAME, SITE_DESCRIPTION, WHATSAPP_NUMBER } from "@/lib/site";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "كتابة رسائل ماجستير",
    "كتابة رسائل دكتوراه",
    "أبحاث علمية",
    "تحليل إحصائي",
    "SPSS",
    "رسائل جامعية",
    "بحث علمي",
    "إعداد رسالة ماجستير",
    "خدمات أكاديمية",
    "ترجمة أكاديمية",
    "إحصاء",
    "كتابة بحث علمي",
    "تنسيق رسائل علمية",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "خدمات أكاديمية متميزة: كتابة رسائل الماجستير والدكتوراه، إعداد الأبحاث العلمية، التحليل الإحصائي، خدمات الترجمة. جودة عالية وأسعار منافسة.",
    images: [{ url: "/og-image.jpg", width: 1376, height: 768, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "خدمات أكاديمية متميزة: كتابة رسائل الماجستير والدكتوراه، إعداد الأبحاث العلمية، التحليل الإحصائي. تواصل معنا على واتساب.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "msHd4AwcWHg75vSVWEzVXpu5-0NPFWOquLSa75_6_F8",
  },
};

// Structured data: tells Google the site's real name (instead of "Vercel") and what the business offers
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: [SITE_SHORT_NAME, "خدمات أكاديمية متميزة"],
    url: SITE_URL,
    inLanguage: "ar",
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    alternateName: SITE_SHORT_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/og-image.jpg`,
    description: SITE_DESCRIPTION,
    telephone: `+${WHATSAPP_NUMBER}`,
    areaServed: "الوطن العربي",
    availableLanguage: ["ar", "en"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "الخدمات الأكاديمية",
      itemListElement: [
        "كتابة رسائل الماجستير",
        "كتابة رسائل الدكتوراه",
        "إعداد الأبحاث العلمية للنشر",
        "التحليل الإحصائي SPSS وAMOS",
        "الترجمة الأكاديمية",
        "التدقيق اللغوي والتنسيق",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${amiri.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
