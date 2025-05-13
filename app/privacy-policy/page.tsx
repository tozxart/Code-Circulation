import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Back to Home Button */}
      <div className="container mx-auto flex justify-center mt-4">
        <Link
          href="/"
          className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors shadow flex items-center gap-2"
        >
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
              تصف سياسة الخصوصية هذه كيفية تعامل تطبيق Code Circulation ("نحن" أو "لنا") مع خصوصية المستخدم. تم تصميم
              هذا التطبيق للعمل دون جمع أي معلومات شخصية من مستخدميه.
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
              قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية
              الجديدة على هذه الصفحة.
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

      {/* Decorative elements */}
      <div className="container mx-auto relative">
        <div className="absolute -top-10 left-10 w-16 h-16 text-primary opacity-50 text-4xl">✦</div>
        <div className="absolute -bottom-10 right-10 w-16 h-16 text-primary opacity-50 text-4xl">✦</div>
      </div>

      <Footer />
    </div>
  )
}
