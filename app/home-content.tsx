"use client";

import Link from "next/link";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function HomeContent() {
  const searchParams = useSearchParams();
  const isEnglish = searchParams.get("lang") === "en";

  const portalLangSuffix = isEnglish ? "?lang=en" : "";
  const royalJokerLangSuffix = isEnglish ? "&lang=en" : "";

  return (
    <div className="min-h-screen">
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {isEnglish ? "MobUs" : "MobUs"}
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          {isEnglish
            ? "MobUs is the company behind Code Circulation TN, Code de la Route TN - B, and Royal Joker."
            : "MobUs هي الشركة المطورة لتطبيقات Code Circulation TN و Code de la Route TN - B و Royal Joker."}
        </p>
      </section>

      <section className="container mx-auto py-8 px-4 text-center">
        <Alert
          variant="default"
          className="max-w-3xl mx-auto bg-background/80 border-border/50 backdrop-blur-sm">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle
            className={`font-bold text-lg ${isEnglish ? "text-left" : "text-right"}`}>
            {isEnglish ? "About MobUs" : "حول MobUs"}
          </AlertTitle>
          <AlertDescription className={isEnglish ? "text-left" : "text-right"}>
            {isEnglish
              ? "MobUs develops educational and game apps."
              : "تقوم MobUs بتطوير تطبيقات تعليمية وألعاب."}
          </AlertDescription>
        </Alert>
      </section>

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          {isEnglish ? "Our Applications" : "تطبيقاتنا"}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {isEnglish
            ? "Choose an app to open its main page and legal links."
            : "اختر تطبيقًا لفتح صفحته الرئيسية وروابطه القانونية."}
        </p>
      </section>

      <section className="container mx-auto py-8 px-4 grid md:grid-cols-3 gap-6">
        <div
          className={`bg-card rounded-lg p-6 border border-border ${isEnglish ? "text-left" : "text-right"}`}>
          <h2 className="text-2xl font-bold mb-2">Code Circulation TN</h2>
          <p className="text-muted-foreground mb-6">
            {isEnglish
              ? "Driving education app. This app remains Arabic-only."
              : "تطبيق تعليم القيادة. هذا التطبيق يبقى باللغة العربية فقط."}
          </p>
          <div
            className={`flex flex-wrap gap-3 ${isEnglish ? "justify-start" : "justify-end"}`}>
            <Link
              href={`/code-circulation${portalLangSuffix}`}
              className="border border-border hover:bg-muted px-4 py-2 rounded-md font-medium transition-colors">
              {isEnglish
                ? "Open App Main Page"
                : "افتح الصفحة الرئيسية للتطبيق"}
            </Link>
            <Link
              href="/privacy-policy?app=code-circulation"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium transition-colors">
              {isEnglish ? "Privacy Policy" : "سياسة الخصوصية"}
            </Link>
            <Link
              href="/terms?app=code-circulation"
              className="border border-border hover:bg-muted px-4 py-2 rounded-md font-medium transition-colors">
              {isEnglish ? "Terms" : "شروط الاستخدام"}
            </Link>
          </div>
        </div>

        <div
          className={`bg-card rounded-lg p-6 border border-border ${isEnglish ? "text-left" : "text-right"}`}>
          <h2 className="text-2xl font-bold mb-2">Code de la Route TN - B</h2>
          <p className="text-muted-foreground mb-6">
            {isEnglish
              ? "Traffic code learning app (Category B). This app remains Arabic-only."
              : "تطبيق تعلم قانون الطرقات (الصنف ب). هذا التطبيق يبقى باللغة العربية فقط."}
          </p>
          <div
            className={`flex flex-wrap gap-3 ${isEnglish ? "justify-start" : "justify-end"}`}>
            <Link
              href={`/code-route-tn-b${portalLangSuffix}`}
              className="border border-border hover:bg-muted px-4 py-2 rounded-md font-medium transition-colors">
              {isEnglish
                ? "Open App Main Page"
                : "افتح الصفحة الرئيسية للتطبيق"}
            </Link>
            <Link
              href="/privacy-policy?app=code-circulation"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium transition-colors">
              {isEnglish ? "Privacy Policy" : "سياسة الخصوصية"}
            </Link>
            <Link
              href="/terms?app=code-circulation"
              className="border border-border hover:bg-muted px-4 py-2 rounded-md font-medium transition-colors">
              {isEnglish ? "Terms" : "شروط الاستخدام"}
            </Link>
          </div>
        </div>

        <div
          className={`bg-card rounded-lg p-6 border border-border ${isEnglish ? "text-left" : "text-right"}`}>
          <h2 className="text-2xl font-bold mb-2">Royal Joker</h2>
          <p className="text-muted-foreground mb-6">
            {isEnglish
              ? "Multi-language legal pages for Google Play listing requirements."
              : "صفحات قانونية متعددة اللغات لتلبية متطلبات Google Play."}
          </p>
          <div
            className={`flex flex-wrap gap-3 ${isEnglish ? "justify-start" : "justify-end"}`}>
            <Link
              href={`/royal-joker${portalLangSuffix}`}
              className="border border-border hover:bg-muted px-4 py-2 rounded-md font-medium transition-colors">
              {isEnglish
                ? "Open App Main Page"
                : "افتح الصفحة الرئيسية للتطبيق"}
            </Link>
            <Link
              href={`/privacy-policy?app=royal-joker${royalJokerLangSuffix}`}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium transition-colors">
              {isEnglish ? "Privacy Policy" : "سياسة الخصوصية"}
            </Link>
            <Link
              href={`/terms?app=royal-joker${royalJokerLangSuffix}`}
              className="border border-border hover:bg-muted px-4 py-2 rounded-md font-medium transition-colors">
              {isEnglish ? "Terms" : "شروط الاستخدام"}
            </Link>
            <Link
              href={isEnglish ? "/delete-account?lang=en" : "/delete-account"}
              className="border border-border hover:bg-muted px-4 py-2 rounded-md font-medium transition-colors inline-flex items-center gap-2">
              {isEnglish ? "Delete Account URL" : "رابط حذف الحساب"}
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer app="portal" lang={isEnglish ? "en" : "ar"} />
    </div>
  );
}
