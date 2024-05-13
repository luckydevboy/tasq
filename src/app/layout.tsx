import type { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import resolveConfig from "tailwindcss/resolveConfig";

import "./globals.css";
import tailwindConfig from "../../tailwind.config";
import { NextAuthSessionProvider, ReactQueryProvider } from "@/providers";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

const fullConfig = resolveConfig(tailwindConfig);

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
        <NextTopLoader
          shadow={false}
          color={fullConfig.theme.colors.blue["700"]}
          showSpinner={false}
        />
        <NextAuthSessionProvider>
          <ReactQueryProvider>
            {children}
            <Toaster />
          </ReactQueryProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
