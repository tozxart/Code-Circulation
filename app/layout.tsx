import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { StagewiseToolbar } from "@stagewise/toolbar-next";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Code Circulation - تطبيق تعليم القيادة",
  description:
    "تعلم قواعد المرور وإشارات الطريق مع تطبيقنا الشامل لتعليم القيادة",
  generator: "v0.dev",
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
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <ThemeProvider>
          {process.env.NODE_ENV === "development" && (
            <StagewiseToolbar config={stagewiseConfig} />
          )}
          <header className="fixed top-0 left-0 right-0 z-50 py-2 bg-slate-800/90 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <a href="/" className="font-bold text-lg">
                Code Circulation
              </a>
              <div></div>
            </div>
          </header>
          <div className="pt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
