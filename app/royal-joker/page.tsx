import Link from "next/link";
import Footer from "@/components/footer";

export default function RoyalJokerMainPage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Royal Joker</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Official main page for Royal Joker legal and account management links.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/privacy-policy?app=royal-joker" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors">
            سياسة الخصوصية
          </Link>
          <Link href="/terms?app=royal-joker" className="border border-border hover:bg-muted px-6 py-3 rounded-md font-medium transition-colors">
            شروط الاستخدام
          </Link>
          <Link href="/delete-account" className="border border-border hover:bg-muted px-6 py-3 rounded-md font-medium transition-colors">
            حذف الحساب
          </Link>
        </div>
      </section>

      <section className="container mx-auto py-8 px-4 max-w-3xl text-center">
        <p className="text-muted-foreground">
          This page is dedicated to Royal Joker. For English legal pages, use the language switch in the top bar.
        </p>
      </section>

      <Footer app="royal-joker" lang="ar" />
    </div>
  );
}
