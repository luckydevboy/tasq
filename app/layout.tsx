import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Layout } from "@/app/components";
import { TasksProvider } from "./contexts";

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
        <TasksProvider>
          <Layout>{children}</Layout>
        </TasksProvider>
      </body>
    </html>
  );
}
