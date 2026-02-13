"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Twitter, Facebook, Instagram } from "lucide-react";
import { useTheme } from "next-themes";

type FooterProps = {
  app?: "code-circulation" | "royal-joker" | "portal";
  lang?: "ar" | "en";
};

export default function Footer({
  app = "code-circulation",
  lang = "ar",
}: FooterProps) {
  const { theme } = useTheme();
  const isEnglish = lang === "en";

  const legalSuffix =
    app === "royal-joker"
      ? isEnglish
        ? "?app=royal-joker&lang=en"
        : "?app=royal-joker"
      : app === "portal"
        ? isEnglish
          ? "?app=royal-joker&lang=en"
          : "?app=code-circulation"
        : "?app=code-circulation";

  const deleteSuffix = isEnglish ? "?lang=en" : "";

  // Dynamically set classes based on theme
  const getBgClass = () => {
    if (theme === "root") return "bg-slate-800";
    if (theme === "blue") return "bg-blue-800";
    if (theme === "original") return "bg-indigo-800";
    return "bg-slate-800"; // default slate theme
  };

  const getTextClass = () => {
    if (theme === "root") return "text-gray-300";
    if (theme === "blue") return "text-blue-200";
    if (theme === "original") return "text-indigo-200";
    return "text-gray-300"; // default slate theme
  };

  const getBorderClass = () => {
    if (theme === "root") return "border-slate-700";
    if (theme === "blue") return "border-blue-700";
    if (theme === "original") return "border-indigo-700";
    return "border-slate-700"; // default slate theme
  };

  const getFooterTextClass = () => {
    if (theme === "root") return "text-gray-400";
    if (theme === "blue") return "text-blue-300";
    if (theme === "original") return "text-indigo-300";
    return "text-gray-400"; // default slate theme
  };

  return (
    <footer
      className={`container mx-auto py-12 px-4 ${getBgClass()} rounded-t-3xl mt-16`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image
            src="/images/logo.png"
            alt="Code Circulation Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-white">
            {app === "portal" ? "MobUs" : "Code Circulation"}
          </span>
        </div>
        <p
          className={`${getTextClass()} text-center ${isEnglish ? "md:text-left" : "md:text-right"} mb-4 md:mb-0`}>
          {app === "royal-joker"
            ? isEnglish
              ? "Official legal pages for Royal Joker."
              : "صفحات قانونية رسمية لتطبيق Royal Joker."
            : app === "portal"
              ? isEnglish
                ? "Official website for MobUs apps."
                : "الموقع الرسمي لتطبيقات MobUs."
              : "تطبيق شامل لتعليم القيادة وقواعد المرور وإشارات الطريق."}
        </p>
        {/* Government affiliation disclaimer */}
        <p
          className={`${getTextClass()} text-center ${isEnglish ? "md:text-left" : "md:text-right"} text-xs md:text-sm max-w-xl`}>
          {app === "royal-joker"
            ? isEnglish
              ? "Royal Joker is an independent game application."
              : "Royal Joker تطبيق لعبة مستقل."
            : app === "portal"
              ? isEnglish
                ? "MobUs company website and official links for all apps."
                : "موقع شركة MobUs والروابط الرسمية لجميع التطبيقات."
              : 'تنويه: هذا التطبيق تعليمي مستقل غير تابع لأي جهة حكومية. يتمُّ اعتماد المعلومات الواردة من "مجلة الطرقات التونسية" والمصادر الرسمية المتاحة للعموم.'}
        </p>
        <div className="flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-2">
            <Link
              href="mailto:rayen.fallag@gmail.com"
              aria-label="Email"
              className={`${getTextClass()} hover:text-white transition-colors`}>
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              aria-label="Twitter"
              className={`${getTextClass()} hover:text-white transition-colors`}>
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://facebook.com/"
              target="_blank"
              aria-label="Facebook"
              className={`${getTextClass()} hover:text-white transition-colors`}>
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/"
              target="_blank"
              aria-label="Instagram"
              className={`${getTextClass()} hover:text-white transition-colors`}>
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href={`/terms${legalSuffix}`}
              className={`${getTextClass()} hover:text-white transition-colors font-medium`}>
              {isEnglish ? "Terms" : "شروط الاستخدام"}
            </Link>
            <Link
              href={`/privacy-policy${legalSuffix}`}
              className={`${getTextClass()} hover:text-white transition-colors font-medium`}>
              {isEnglish ? "Privacy Policy" : "سياسة الخصوصية"}
            </Link>
            <Link
              href={`/delete-account${deleteSuffix}`}
              className={`${getTextClass()} hover:text-white transition-colors font-medium`}>
              {isEnglish ? "Delete Account" : "حذف الحساب"}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`border-t ${getBorderClass()} mt-8 pt-4 ${getFooterTextClass()} text-sm text-center`}>
        © {new Date().getFullYear()}{" "}
        {app === "royal-joker"
          ? "Royal Joker"
          : app === "portal"
            ? "MobUs Apps"
            : "Code Circulation"}
        . {isEnglish ? "All rights reserved." : "جميع الحقوق محفوظة."}
      </div>
    </footer>
  );
}
