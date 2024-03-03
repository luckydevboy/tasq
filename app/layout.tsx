import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Layout } from "@/app/components";

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={dana.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
