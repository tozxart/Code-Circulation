"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function TopBar() {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && show) {
        // If scrolling down AND it's currently shown, then hide it
        setShow(false);
      } else if (currentScroll < lastScroll.current && !show) {
        // If scrolling up AND it's currently hidden, then show it
        setShow(true);
      }
      lastScroll.current = currentScroll <= 0 ? 0 : currentScroll; // Ensure lastScroll isn't negative
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: "linear-gradient(to bottom, #2563eb, #3b82f6)",
        color: "white",
      }}>
      <div className="container mx-auto flex flex-row items-center justify-between py-1.5 sm:py-4 px-2 sm:px-4 gap-2 relative">
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu">
          <HiMenu className="w-7 h-7" />
        </button>
        {/* Centered logo */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex items-center gap-1 sm:gap-2">
            <Image
              src="/images/logo.png"
              alt="Code Circulation Logo"
              width={32}
              height={32}
              className="object-contain w-8 h-8 sm:w-[50px] sm:h-[50px]"
            />
            <span className="text-base sm:text-xl font-bold">
              Code Circulation
            </span>
          </div>
        </div>
        {/* Links: always visible on desktop, dropdown on mobile */}
        <div className="hidden sm:flex flex-row items-center gap-1 sm:gap-4">
          <Link
            href="/privacy-policy"
            className="bg-white text-blue-600 hover:bg-blue-50 px-2 py-1 sm:px-4 sm:py-2 rounded-md font-medium transition-colors shadow-sm border border-transparent hover:border-blue-200 text-xs sm:text-base">
            سياسة الخصوصية
          </Link>
          <Link
            href="/terms"
            className="bg-white text-blue-600 hover:bg-blue-50 px-2 py-1 sm:px-4 sm:py-2 rounded-md font-medium transition-colors shadow-sm border border-transparent hover:border-blue-200 text-xs sm:text-base">
            شروط الاستخدام
          </Link>
        </div>
        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-2 sm:hidden z-50">
            <Link
              href="/privacy-policy"
              className="text-blue-600 hover:bg-blue-50 w-full text-center px-4 py-2 rounded-md font-medium transition-colors">
              سياسة الخصوصية
            </Link>
            <Link
              href="/terms"
              className="text-blue-600 hover:bg-blue-50 w-full text-center px-4 py-2 rounded-md font-medium transition-colors">
              شروط الاستخدام
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
