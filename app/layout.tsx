import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { Topbar } from "../components/Topbar";
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
          <Topbar />
          <div className="pt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
