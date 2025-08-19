import { Amiri } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta
          name="google-site-verification"
          content="msHd4AwcWHg75vSVWEzVXpu5-0NPFWOquLSa75_6_F8"
        />
      </head>
      <body className={`${amiri.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
