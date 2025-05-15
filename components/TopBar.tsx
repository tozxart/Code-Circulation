"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

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
      if (theme === "original")
        return "bg-indigo-800/90 backdrop-blur-md shadow-md";
      return "bg-slate-800/90 backdrop-blur-md shadow-md"; // default slate theme
    }
    return "bg-transparent";
  };

  const getMobileMenuBgClass = () => {
    if (theme === "root") return "bg-slate-800";
    if (theme === "blue") return "bg-blue-800";
    if (theme === "original") return "bg-indigo-800";
    return "bg-slate-800"; // default slate theme
  };

  const getBorderClass = () => {
    if (theme === "root") return "border-slate-700";
    if (theme === "blue") return "border-blue-700";
    if (theme === "original") return "border-indigo-700";
    return "border-slate-700"; // default slate theme
  };

  const getHoverClass = () => {
    if (theme === "root") return "hover:text-emerald-300";
    if (theme === "blue") return "hover:text-blue-300";
    if (theme === "original") return "hover:text-indigo-300";
    return "hover:text-emerald-300"; // default slate theme
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBgClass()} ${
        isScrolled ? "py-2" : "py-4"
      }`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder-logo.png"
            alt="Code Circulation Logo"
            width={isScrolled ? 40 : 50}
            height={isScrolled ? 40 : 50}
            className="object-contain transition-all duration-300"
          />
          <span
            className={`font-bold transition-all duration-300 ${
              isScrolled ? "text-lg" : "text-xl"
            }`}>
            Code Circulation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {pathname !== "/" && (
            <Link
              href="/"
              className={`text-white ${getHoverClass()} transition-colors flex items-center gap-1`}>
              <ChevronRight className="w-4 h-4" />
              <span>الرئيسية</span>
            </Link>
          )}
          {pathname !== "/terms" && (
            <Link
              href="/terms"
              className={`text-white ${getHoverClass()} transition-colors`}>
              شروط الاستخدام
            </Link>
          )}
          {pathname !== "/privacy-policy" && (
            <Link
              href="/privacy-policy"
              className={`text-white ${getHoverClass()} transition-colors`}>
              سياسة الخصوصية
            </Link>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 ${getMobileMenuBgClass()} shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-64" : "max-h-0"
        }`}>
        <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
          {pathname !== "/" && (
            <Link
              href="/"
              className={`text-white ${getHoverClass()} transition-colors py-2 border-b ${getBorderClass()} flex items-center gap-1`}
              onClick={() => setIsMenuOpen(false)}>
              <ChevronRight className="w-4 h-4" />
              <span>الرئيسية</span>
            </Link>
          )}
          {pathname !== "/terms" && (
            <Link
              href="/terms"
              className={`text-white ${getHoverClass()} transition-colors py-2 border-b ${getBorderClass()}`}
              onClick={() => setIsMenuOpen(false)}>
              شروط الاستخدام
            </Link>
          )}
          {pathname !== "/privacy-policy" && (
            <Link
              href="/privacy-policy"
              className={`text-white ${getHoverClass()} transition-colors py-2 border-b ${getBorderClass()}`}
              onClick={() => setIsMenuOpen(false)}>
              سياسة الخصوصية
            </Link>
          )}
          <div className="py-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
