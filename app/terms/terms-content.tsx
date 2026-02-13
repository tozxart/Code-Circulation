"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/footer";

export default function TermsContent() {
  const searchParams = useSearchParams();
  const app = searchParams.get("app") === "royal-joker" ? "royal-joker" : "code-circulation";
  const isEnglish = app === "royal-joker" && searchParams.get("lang") === "en";
  const languageSwitchHref = isEnglish
    ? "/terms?app=royal-joker"
    : "/terms?app=royal-joker&lang=en";

  if (app === "royal-joker") {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto flex justify-center gap-3 mt-4 px-4">
          <Link
            href="/"
            className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors shadow flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {isEnglish ? "Back to Home" : "العودة للرئيسية"}
          </Link>
          <Link
            href={languageSwitchHref}
            className="border border-border hover:bg-muted px-6 py-2 rounded-md font-medium transition-colors">
            {isEnglish ? "العربية" : "English"}
          </Link>
        </div>

        <main className="container mx-auto py-8 px-4 text-center">
          <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 shadow-lg text-left">
            {isEnglish ? (
              <>
                <h1 className="text-3xl font-bold mb-6">Terms of Use — Royal Joker</h1>
                <p className="text-muted-foreground mb-8">
                  <strong>Last updated:</strong> February 13, 2026
                </p>
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="mb-4 text-muted-foreground">
                    By using Royal Joker, you agree to these terms and conditions.
                  </p>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground text-left">
                    <li>Use the app lawfully and respectfully.</li>
                    <li>Do not exploit bugs or misuse services.</li>
                    <li>Follow platform and community rules.</li>
                  </ul>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Account Deletion</h2>
                  <p className="mb-4 text-muted-foreground">Account deletion instructions are available at:</p>
                  <Link href="/delete-account?lang=en" className="text-primary hover:underline">
                    Delete your account — Royal Joker
                  </Link>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Contact</h2>
                  <p className="mb-4 text-muted-foreground">
                    <a href="mailto:rayen.fallag@gmail.com" className="text-primary hover:underline">
                      rayen.fallag@gmail.com
                    </a>
                  </p>
                </section>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-6 text-right">شروط الاستخدام — Royal Joker</h1>
                <p className="text-muted-foreground mb-8 text-right">
                  <strong>آخر تحديث:</strong> 13 فبراير 2026
                </p>
                <section className="mb-8 text-right">
                  <h2 className="text-2xl font-bold mb-4">مقدمة</h2>
                  <p className="mb-4 text-muted-foreground">
                    باستخدامك لتطبيق Royal Joker فإنك توافق على هذه الشروط والأحكام.
                  </p>
                </section>
                <section className="mb-8 text-right">
                  <h2 className="text-2xl font-bold mb-4">مسؤوليات المستخدم</h2>
                  <ul className="list-disc pr-6 mb-4 space-y-2 text-muted-foreground text-right">
                    <li>استخدام التطبيق بشكل قانوني ومحترم.</li>
                    <li>عدم استغلال الأخطاء أو إساءة استخدام الخدمات.</li>
                    <li>الالتزام بقواعد المنصة والمجتمع.</li>
                  </ul>
                </section>
                <section className="mb-8 text-right">
                  <h2 className="text-2xl font-bold mb-4">حذف الحساب</h2>
                  <p className="mb-4 text-muted-foreground">تعليمات حذف الحساب متاحة على الرابط:</p>
                  <Link href="/delete-account" className="text-primary hover:underline">
                    حذف الحساب — Royal Joker
                  </Link>
                </section>
                <section className="mb-8 text-right">
                  <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
                  <p className="mb-4 text-muted-foreground">
                    <a href="mailto:rayen.fallag@gmail.com" className="text-primary hover:underline">
                      rayen.fallag@gmail.com
                    </a>
                  </p>
                </section>
              </>
            )}
          </div>
        </main>

        <Footer app="royal-joker" lang={isEnglish ? "en" : "ar"} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex justify-center mt-4">
        <Link
          href="/"
          className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors shadow flex items-center gap-2">
          <ChevronRight className="w-4 h-4" />
          عودة للرئيسية
        </Link>
      </div>

      <main className="container mx-auto py-8 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-6">شروط الاستخدام</h1>
          <p className="text-muted-foreground mb-8 text-right">
            <strong>آخر تحديث:</strong> 18 أبريل 2024
          </p>
          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">مقدمة</h2>
            <p className="mb-4 text-muted-foreground">
              مرحبًا بك في Code Circulation. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية:
            </p>
          </section>
          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">تنويه عدم الانتماء الحكومي</h2>
            <p className="mb-4 text-muted-foreground">
              هذا التطبيق تعليمي مستقل وغير تابع لأي جهة حكومية. تعتمد المعلومات على "مجلة الطرقات التونسية" والمصادر الرسمية المتاحة.
            </p>
          </section>
          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">الشروط</h2>
            <ul className="list-disc pr-6 mb-4 space-y-2 text-muted-foreground text-right">
              <li>يجب استخدام الموقع للأغراض القانونية فقط.</li>
              <li>لا يجوز نسخ أو إعادة توزيع أي جزء من المحتوى بدون إذن.</li>
              <li>قد نقوم بتحديث الشروط في أي وقت دون إشعار مسبق.</li>
            </ul>
          </section>
          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">الأسئلة والتواصل</h2>
            <p className="mb-4 text-muted-foreground">
              إذا كان لديك أي أسئلة حول الشروط، يرجى التواصل معنا على:
              <br />
              <a href="mailto:rayen.fallag@gmail.com" className="text-primary hover:underline">
                rayen.fallag@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer app="code-circulation" lang="ar" />
    </div>
  );
}
