"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/footer";

export default function DeleteAccountContent() {
  const searchParams = useSearchParams();
  const isEnglish = searchParams.get("lang") === "en";
  const languageSwitchHref = isEnglish ? "/delete-account" : "/delete-account?lang=en";

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
        <div className="max-w-4xl mx-auto bg-card rounded-lg p-8 shadow-lg text-left">
          {isEnglish ? (
            <>
              <h1 className="text-3xl font-bold mb-6">Delete your account — Royal Joker</h1>

              <p className="mb-6 text-muted-foreground">
                You can delete your <strong>Royal Joker</strong> account and associated data at any time.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">How to delete your account (in the app)</h2>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Open Royal Joker.</li>
                  <li>Go to Settings (gear icon or from the main menu).</li>
                  <li>Open the Account tab.</li>
                  <li>Tap Delete account at the bottom.</li>
                  <li>Read the confirmation and tap Delete my account to confirm.</li>
                </ol>
                <p className="mt-4 text-muted-foreground">
                  Your account and data are deleted immediately. You will be returned to the sign-in screen.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">What we delete</h2>
                <p className="mb-3 text-muted-foreground">When you delete your account, we permanently remove:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Your profile (display name, avatar, background, coins, gems, level, loadout).</li>
                  <li>Your settings (sound, gameplay preferences).</li>
                  <li>Your friends list and friend requests.</li>
                  <li>Your presence and matchmaking queue entries.</li>
                  <li>Your tournament entries and any tournaments you created (tournament data may be anonymized where you were a participant).</li>
                  <li>Your match and rank history linked to your account.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data retention</h2>
                <p className="text-muted-foreground">
                  We do not retain your account or the above data after deletion. Backups may hold data for a short retention period (up to 30 days) before it is purged; we do not use that data for any purpose after your deletion request.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Need help?</h2>
                <p className="text-muted-foreground">
                  If you cannot delete your account from the app (for example, you no longer have access to the device), contact us with your app/developer name and we will process your request.
                </p>
              </section>

              <p className="text-muted-foreground italic">Royal Joker</p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-6 text-right">حذف الحساب — Royal Joker</h1>

              <p className="mb-6 text-muted-foreground text-right">
                يمكنك حذف حساب <strong>Royal Joker</strong> والبيانات المرتبطة به في أي وقت.
              </p>

              <section className="mb-8 text-right">
                <h2 className="text-2xl font-bold mb-4">طريقة حذف الحساب من داخل التطبيق</h2>
                <ol className="list-decimal pr-6 space-y-2 text-muted-foreground text-right">
                  <li>افتح تطبيق Royal Joker.</li>
                  <li>ادخل إلى الإعدادات (رمز الترس أو من القائمة الرئيسية).</li>
                  <li>افتح تبويب الحساب.</li>
                  <li>اضغط على حذف الحساب في الأسفل.</li>
                  <li>اقرأ التأكيد ثم اضغط حذف حسابي للتأكيد.</li>
                </ol>
                <p className="mt-4 text-muted-foreground">
                  يتم حذف الحساب والبيانات مباشرة، ثم يتم إعادتك إلى شاشة تسجيل الدخول.
                </p>
              </section>

              <section className="mb-8 text-right">
                <h2 className="text-2xl font-bold mb-4">ما الذي يتم حذفه</h2>
                <p className="mb-3 text-muted-foreground">عند حذف حسابك، نقوم بحذف ما يلي بشكل دائم:</p>
                <ul className="list-disc pr-6 space-y-2 text-muted-foreground text-right">
                  <li>الملف الشخصي (الاسم، الصورة، الخلفية، العملات، الجواهر، المستوى، التجهيزات).</li>
                  <li>الإعدادات (الصوت وتفضيلات اللعب).</li>
                  <li>قائمة الأصدقاء وطلبات الصداقة.</li>
                  <li>حالة الظهور وطوابير المطابقة.</li>
                  <li>مشاركات البطولات والبطولات التي أنشأتها (قد تُحوَّل بعض بيانات البطولات إلى صيغة مجهولة إذا كنت مشاركًا).</li>
                  <li>سجل المباريات والتصنيف المرتبط بحسابك.</li>
                </ul>
              </section>

              <section className="mb-8 text-right">
                <h2 className="text-2xl font-bold mb-4">مدة الاحتفاظ بالنسخ الاحتياطية</h2>
                <p className="text-muted-foreground">
                  لا نحتفظ بالحساب أو البيانات المذكورة بعد الحذف. قد تبقى البيانات في النسخ الاحتياطية لفترة قصيرة (حتى 30 يومًا) قبل الإزالة النهائية، ولا يتم استخدامها بعد طلب الحذف.
                </p>
              </section>

              <section className="mb-8 text-right">
                <h2 className="text-2xl font-bold mb-4">تحتاج مساعدة؟</h2>
                <p className="text-muted-foreground">
                  إذا لم تتمكن من حذف الحساب من داخل التطبيق (مثل فقدان الوصول إلى الجهاز)، تواصل معنا مع اسم التطبيق/المطور وسنقوم بمعالجة طلبك.
                </p>
              </section>

              <p className="text-muted-foreground italic text-right">Royal Joker</p>
            </>
          )}
        </div>
      </main>

      <Footer app="royal-joker" lang={isEnglish ? "en" : "ar"} />
    </div>
  );
}
