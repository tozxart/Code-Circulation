import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Footer from "@/components/footer"

export default function Terms() {
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

      {/* Decorative elements */}
      <div className="container mx-auto relative">
        <div className="absolute -top-10 left-10 w-16 h-16 text-primary opacity-50 text-4xl">✦</div>
        <div className="absolute -bottom-10 right-10 w-16 h-16 text-primary opacity-50 text-4xl">✦</div>
      </div>

      <Footer />
    </div>
  )
}
