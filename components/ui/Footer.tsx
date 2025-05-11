import Link from "next/link";
import Image from "next/image";
import { Mail, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container mx-auto py-12 px-4 bg-blue-800 rounded-t-3xl mt-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image
            src="/images/logo.png"
            alt="Code Circulation Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-white">Code Circulation</span>
        </div>
        <p className="text-blue-200 text-center md:text-right mb-4 md:mb-0">
          تطبيق شامل لتعليم القيادة وقواعد المرور وإشارات الطريق.
        </p>
        <div className="flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-2">
            <Link
              href="mailto:rayen.fallag@gmail.com"
              aria-label="Email"
              className="text-blue-200 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              aria-label="Twitter"
              className="text-blue-200 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://facebook.com/"
              target="_blank"
              aria-label="Facebook"
              className="text-blue-200 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/"
              target="_blank"
              aria-label="Instagram"
              className="text-blue-200 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="/terms"
              className="text-blue-200 hover:text-white transition-colors font-medium">
              شروط الاستخدام
            </Link>
            <Link
              href="/privacy-policy"
              className="text-blue-200 hover:text-white transition-colors font-medium">
              سياسة الخصوصية
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-700 mt-8 pt-4 text-blue-300 text-sm text-center">
        © {new Date().getFullYear()} Code Circulation. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
