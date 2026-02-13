"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "../components/theme-toggle";
import { usePathname, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";

export function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const showAppLogo = pathname.startsWith("/code-circulation");
  const activeApp = pathname.startsWith("/royal-joker")
    ? "royal-joker"
    : pathname.startsWith("/code-circulation") || pathname.startsWith("/code-route-tn-b")
      ? "code-circulation"
      : searchParams.get("app") === "royal-joker"
        ? "royal-joker"
        : "code-circulation";

  const lang = searchParams.get("lang") === "en" ? "en" : "ar";
  const nextLang = lang === "en" ? "ar" : "en";

  const buildHref = (path: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (path === "/") {
      params.delete("lang");
      params.delete("app");
    } else {
      if (lang === "en") {
        params.set("lang", "en");
      } else {
        params.delete("lang");
      }

      if (path === "/privacy-policy" || path === "/terms" || path === "/delete-account") {
        params.set("app", activeApp);
      }
    }

    const query = params.toString();
    return query ? `${path}?${query}` : path;
  };

  const languageHref = (() => {
    const params = new URLSearchParams(searchParams.toString());

    if (nextLang === "en") {
      params.set("lang", "en");
      params.set("app", activeApp);
    } else {
      params.delete("lang");
    }

    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  })();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHeaderBgClass = () => {
    if (isScrolled) {
      if (theme === "root") return "bg-slate-800/90 backdrop-blur-md shadow-md";
      if (theme === "blue") return "bg-blue-800/90 backdrop-blur-md shadow-md";
      if (theme === "original") return "bg-indigo-800/90 backdrop-blur-md shadow-md";
      return "bg-slate-800/90 backdrop-blur-md shadow-md";
    }
    return "bg-transparent";
  };

  const getMobileMenuBgClass = () => {
    if (theme === "root") return "bg-slate-800";
    if (theme === "blue") return "bg-blue-800";
    if (theme === "original") return "bg-indigo-800";
    return "bg-slate-800";
  };

  const getBorderClass = () => {
    if (theme === "root") return "border-slate-700";
    if (theme === "blue") return "border-blue-700";
    if (theme === "original") return "border-indigo-700";
    return "border-slate-700";
  };

  const getHoverClass = () => {
    if (theme === "root") return "hover:text-emerald-300";
    if (theme === "blue") return "hover:text-blue-300";
    if (theme === "original") return "hover:text-indigo-300";
    return "hover:text-emerald-300";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBgClass()} ${
        isScrolled ? "py-2" : "py-4"
      }`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          {showAppLogo && (
            <Image
              src="/images/logo.png"
              alt="Code Circulation Logo"
              width={isScrolled ? 40 : 50}
              height={isScrolled ? 40 : 50}
              className="object-contain transition-all duration-300"
            />
          )}
          <span
            className={`font-bold transition-all duration-300 ${
              isScrolled ? "text-lg" : "text-xl"
            }`}>
            MobUs
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {pathname !== "/" && (
            <Link
              href={buildHref("/")}
              className={`text-white ${getHoverClass()} transition-colors flex items-center gap-1`}>
              <ChevronRight className="w-4 h-4" />
              <span>{lang === "en" ? "Home" : "الرئيسية"}</span>
            </Link>
          )}
          {pathname !== "/terms" && (
            <Link href={buildHref("/terms")} className={`text-white ${getHoverClass()} transition-colors`}>
              {lang === "en" ? "Terms" : "شروط الاستخدام"}
            </Link>
          )}
          {pathname !== "/privacy-policy" && (
            <Link href={buildHref("/privacy-policy")} className={`text-white ${getHoverClass()} transition-colors`}>
              {lang === "en" ? "Privacy" : "سياسة الخصوصية"}
            </Link>
          )}
          {pathname !== "/delete-account" && (
            <Link href={buildHref("/delete-account")} className={`text-white ${getHoverClass()} transition-colors`}>
              {lang === "en" ? "Delete Account" : "حذف الحساب"}
            </Link>
          )}
          <Link
            href={languageHref}
            className={`text-white ${getHoverClass()} transition-colors border border-white/30 px-3 py-1 rounded-md`}>
            {lang === "en" ? "AR" : "EN"}
          </Link>
          <ThemeToggle />
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 ${getMobileMenuBgClass()} shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}>
        <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
          {pathname !== "/" && (
            <Link
              href={buildHref("/")}
              className={`text-white ${getHoverClass()} transition-colors py-2 border-b ${getBorderClass()} flex items-center gap-1`}
              onClick={() => setIsMenuOpen(false)}>
              <ChevronRight className="w-4 h-4" />
              <span>{lang === "en" ? "Home" : "الرئيسية"}</span>
            </Link>
          )}
          {pathname !== "/terms" && (
            <Link
              href={buildHref("/terms")}
              className={`text-white ${getHoverClass()} transition-colors py-2 border-b ${getBorderClass()}`}
              onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "Terms" : "شروط الاستخدام"}
            </Link>
          )}
          {pathname !== "/privacy-policy" && (
            <Link
              href={buildHref("/privacy-policy")}
              className={`text-white ${getHoverClass()} transition-colors py-2 border-b ${getBorderClass()}`}
              onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "Privacy" : "سياسة الخصوصية"}
            </Link>
          )}
          {pathname !== "/delete-account" && (
            <Link
              href={buildHref("/delete-account")}
              className={`text-white ${getHoverClass()} transition-colors py-2 border-b ${getBorderClass()}`}
              onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "Delete Account" : "حذف الحساب"}
            </Link>
          )}
          <Link
            href={languageHref}
            className={`text-white ${getHoverClass()} transition-colors py-2 border-b ${getBorderClass()}`}
            onClick={() => setIsMenuOpen(false)}>
            {lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
          </Link>
          <div className="py-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
