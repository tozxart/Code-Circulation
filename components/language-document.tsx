"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function LanguageDocument() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const lang = searchParams.get("lang");

    const isEnglish = lang === "en";

    document.documentElement.lang = isEnglish ? "en" : "ar";
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
  }, [searchParams]);

  return null;
}
