import type { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";

import "./globals.css";
import { NextAuthSessionProvider, ReactQueryProvider } from "@/providers";

const dana = localFont({
  src: "./dana.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "تسکیو",
  description: "مدیریت تسکهای روزانه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={dana.className}>
        <NextAuthSessionProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
