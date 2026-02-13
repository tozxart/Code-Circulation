import type React from "react";
import { Suspense } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Topbar } from "@/app/Topbar";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import { LanguageDocument } from "@/components/language-document";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Code Circulation - تطبيق تعليم القيادة",
  description:
    'تعلم قواعد المرور وإشارات الطريق مع تطبيقنا الشامل لتعليم القيادة. تنويه: هذا التطبيق تعليمي مستقل وغير تابع لأي جهة حكومية، وتستند المعلومات إلى "مجلة الطرقات التونسية" والمصادر الرسمية.',
  generator: "v0.dev",
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const stagewiseConfig = {
    plugins: [],
  };
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>
        <ThemeProvider>
          <Suspense fallback={null}>
            <LanguageDocument />
          </Suspense>
          {process.env.NODE_ENV === "development" && (
            <StagewiseToolbar config={stagewiseConfig} />
          )}
          <Suspense fallback={null}>
            <Topbar />
          </Suspense>
          <div className="pt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
