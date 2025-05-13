"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Twitter, Facebook, Instagram } from "lucide-react"
import { useTheme } from "next-themes"

export default function Footer() {
  const { theme } = useTheme()

  // Dynamically set classes based on theme
  const getBgClass = () => {
    if (theme === "blue") return "bg-blue-800"
    if (theme === "original") return "bg-indigo-800"
    return "bg-slate-800" // default slate theme
  }

  const getTextClass = () => {
    if (theme === "blue") return "text-blue-200"
    if (theme === "original") return "text-indigo-200"
    return "text-gray-300" // default slate theme
  }

  const getBorderClass = () => {
    if (theme === "blue") return "border-blue-700"
    if (theme === "original") return "border-indigo-700"
    return "border-slate-700" // default slate theme
  }

  const getFooterTextClass = () => {
    if (theme === "blue") return "text-blue-300"
    if (theme === "original") return "text-indigo-300"
    return "text-gray-400" // default slate theme
  }

  return (
    <footer className={`container mx-auto py-12 px-4 ${getBgClass()} rounded-t-3xl mt-16`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image src="/images/logo.png" alt="Code Circulation Logo" width={40} height={40} className="object-contain" />
          <span className="text-xl font-bold text-white">Code Circulation</span>
        </div>
        <p className={`${getTextClass()} text-center md:text-right mb-4 md:mb-0`}>
          تطبيق شامل لتعليم القيادة وقواعد المرور وإشارات الطريق.
        </p>
        <div className="flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-2">
            <Link
              href="mailto:rayen.fallag@gmail.com"
              aria-label="Email"
              className={`${getTextClass()} hover:text-white transition-colors`}
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              aria-label="Twitter"
              className={`${getTextClass()} hover:text-white transition-colors`}
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://facebook.com/"
              target="_blank"
              aria-label="Facebook"
              className={`${getTextClass()} hover:text-white transition-colors`}
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/"
              target="_blank"
              aria-label="Instagram"
              className={`${getTextClass()} hover:text-white transition-colors`}
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/terms" className={`${getTextClass()} hover:text-white transition-colors font-medium`}>
              شروط الاستخدام
            </Link>
            <Link href="/privacy-policy" className={`${getTextClass()} hover:text-white transition-colors font-medium`}>
              سياسة الخصوصية
            </Link>
          </div>
        </div>
      </div>
      <div className={`border-t ${getBorderClass()} mt-8 pt-4 ${getFooterTextClass()} text-sm text-center`}>
        © {new Date().getFullYear()} Code Circulation. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}
