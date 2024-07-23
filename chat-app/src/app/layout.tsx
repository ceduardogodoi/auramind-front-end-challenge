import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Providers } from "@/providers";
import { fonts } from "@/theme/fonts";
import { Navbar } from "@/components/molecules/Navbar";
import "@/globals.scss";

export const metadata: Metadata = {
  title: "Auramind AI (Beta) - IA Generativa para Negócios",
};

export default function RootLayout({
  children
}: Readonly<PropsWithChildren>) {
  return (
    <html className={fonts.inter.variable}>
      <body>
        <Providers>
          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  );
}
