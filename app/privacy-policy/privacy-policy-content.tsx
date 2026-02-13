"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/footer";

export default function PrivacyPolicyContent() {
  const searchParams = useSearchParams();
  const app = searchParams.get("app") === "royal-joker" ? "royal-joker" : "code-circulation";
  const isEnglish = app === "royal-joker" && searchParams.get("lang") === "en";
  const languageSwitchHref = isEnglish
    ? "/privacy-policy?app=royal-joker"
    : "/privacy-policy?app=royal-joker&lang=en";

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
                <h1 className="text-3xl font-bold mb-6">Privacy Policy — Royal Joker</h1>
                <p className="text-muted-foreground mb-8">
                  <strong>Last updated:</strong> February 13, 2026
                </p>
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="mb-4 text-muted-foreground">
                    This Privacy Policy describes how Royal Joker handles account and game-related data.
                  </p>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Data Use</h2>
                  <p className="mb-4 text-muted-foreground">
                    We use account data to provide gameplay features such as profile, progression, friends, and matchmaking.
                  </p>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Account Deletion</h2>
                  <p className="mb-4 text-muted-foreground">
                    You can request account deletion any time from inside the app. For full steps and retention details, visit:
                  </p>
                  <Link href="/delete-account?lang=en" className="text-primary hover:underline">
                    Delete your account — Royal Joker
                  </Link>
                </section>
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Contact</h2>
                  <p className="mb-4 text-muted-foreground">
                    For privacy questions, contact us at:
                    <br />
                    <a href="mailto:rayen.fallag@gmail.com" className="text-primary hover:underline">
                      rayen.fallag@gmail.com
                    </a>
                  </p>
                </section>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-6 text-right">سياسة الخصوصية — Royal Joker</h1>
                <p className="text-muted-foreground mb-8 text-right">
                  <strong>آخر تحديث:</strong> 13 فبراير 2026
                </p>
                <section className="mb-8 text-right">
                  <h2 className="text-2xl font-bold mb-4">مقدمة</h2>
                  <p className="mb-4 text-muted-foreground">
                    توضح سياسة الخصوصية هذه كيفية تعامل Royal Joker مع بيانات الحساب واللعبة.
                  </p>
                </section>
                <section className="mb-8 text-right">
                  <h2 className="text-2xl font-bold mb-4">استخدام البيانات</h2>
                  <p className="mb-4 text-muted-foreground">
                    نستخدم بيانات الحساب لتقديم ميزات اللعب مثل الملف الشخصي، التقدم، الأصدقاء، والمطابقة.
                  </p>
                </section>
                <section className="mb-8 text-right">
                  <h2 className="text-2xl font-bold mb-4">حذف الحساب</h2>
                  <p className="mb-4 text-muted-foreground">
                    يمكنك طلب حذف الحساب في أي وقت من داخل التطبيق. للاطلاع على الخطوات الكاملة وفترة الاحتفاظ، زر الصفحة التالية:
                  </p>
                  <Link href="/delete-account" className="text-primary hover:underline">
                    حذف الحساب — Royal Joker
                  </Link>
                </section>
                <section className="mb-8 text-right">
                  <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
                  <p className="mb-4 text-muted-foreground">
                    لأي استفسارات تتعلق بالخصوصية تواصل معنا على:
                    <br />
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
          <h1 className="text-3xl font-bold mb-6">سياسة الخصوصية لتطبيق Code Circulation</h1>
          <p className="text-muted-foreground mb-8 text-right">
            <strong>آخر تحديث:</strong> 18 أبريل 2024
          </p>

          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">مقدمة</h2>
            <p className="mb-4 text-muted-foreground">
              تصف سياسة الخصوصية هذه كيفية تعامل تطبيق Code Circulation ("نحن" أو "لنا") مع خصوصية المستخدم. تم تصميم هذا التطبيق للعمل دون جمع أي معلومات شخصية من مستخدميه.
            </p>
          </section>

          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">تنويه عدم الانتماء الحكومي</h2>
            <p className="mb-4 text-muted-foreground">
              هذا التطبيق غير تابع لأي جهة حكومية. تم تطويره كمبادرة تعليمية مستقلة، وجميع المعلومات الواردة مستمدة من "مجلة الطرقات التونسية" والمصادر الرسمية المتاحة للجمهور.
            </p>
          </section>

          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">جمع المعلومات</h2>
            <p className="mb-4 text-muted-foreground">
              <strong>تطبيق Code Circulation لا يجمع أي بيانات شخصية.</strong> نحن لا نقوم بـ:
            </p>
            <ul className="list-disc pr-6 mb-4 space-y-2 text-muted-foreground text-right">
              <li>طلب أو تخزين المعلومات الشخصية</li>
              <li>تتبع موقعك</li>
              <li>الوصول إلى جهات الاتصال أو الوسائط الخاصة بك</li>
              <li>جمع إحصائيات الاستخدام</li>
              <li>استخدام ملفات تعريف الارتباط أو تقنيات التتبع المماثلة</li>
              <li>مشاركة أي معلومات مع أطراف ثالثة</li>
            </ul>
          </section>

          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">خدمات الطرف الثالث</h2>
            <p className="mb-4 text-muted-foreground">
              تطبيقنا لا يتكامل مع أي خدمات طرف ثالث من شأنها جمع معلومات منك.
            </p>
          </section>

          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">خصوصية الأطفال</h2>
            <p className="mb-4 text-muted-foreground">
              تطبيقنا لا يجمع معلومات شخصية من أي شخص، بما في ذلك الأطفال دون سن 13 عامًا.
            </p>
          </section>

          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">التغييرات على سياسة الخصوصية هذه</h2>
            <p className="mb-4 text-muted-foreground">
              قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة.
            </p>
          </section>

          <section className="mb-8 text-right">
            <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
            <p className="mb-4 text-muted-foreground">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:
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
