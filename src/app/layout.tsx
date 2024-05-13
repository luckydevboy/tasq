import type { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import resolveConfig from "tailwindcss/resolveConfig";

import "./globals.css";
import tailwindConfig from "../../tailwind.config";
import { NextAuthSessionProvider, ReactQueryProvider } from "@/providers";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

const APP_NAME = "تسکیو";
const APP_DEFAULT_TITLE = "تسکیو";
const APP_TITLE_TEMPLATE = "%s - تسکیو";
const APP_DESCRIPTION = "مدیریت تسکهای روزانه";

const fullConfig = resolveConfig(tailwindConfig);

const dana = localFont({
  src: "./dana.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
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
