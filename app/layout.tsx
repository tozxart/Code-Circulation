import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import TopBar from "@/components/TopBar";
import Footer from "@/components/ui/Footer";

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
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {process.env.NODE_ENV === "development" && (
          <StagewiseToolbar config={{ plugins: [] }} />
        )}
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
