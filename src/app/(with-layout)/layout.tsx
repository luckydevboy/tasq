import { ReactNode } from "react";

import { Layout } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
