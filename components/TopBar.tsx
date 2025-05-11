"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function TopBar() {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

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
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 sm:py-4 px-2 sm:px-4 gap-2 sm:gap-0">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <Image
            src="/images/logo.png"
            alt="Code Circulation Logo"
            width={40}
            height={40}
            className="object-contain w-10 h-10 sm:w-[50px] sm:h-[50px]"
          />
          <span className="text-lg sm:text-xl font-bold">Code Circulation</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/privacy-policy"
            className="bg-white text-blue-600 hover:bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md font-medium transition-colors shadow-sm border border-transparent hover:border-blue-200 w-full sm:w-auto text-center">
            سياسة الخصوصية
          </Link>
          <Link
            href="/terms"
            className="bg-white text-blue-600 hover:bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md font-medium transition-colors shadow-sm border border-transparent hover:border-blue-200 w-full sm:w-auto text-center">
            شروط الاستخدام
          </Link>
        </div>
      </div>
    </header>
  );
}
