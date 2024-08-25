import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container, HeaderComponent } from "@/components";
import favicon from "./favicon.png";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReciMe",
  description: "Store delicious recipes",
  icons: [{ rel: "icon", url: favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent pageTitle="Recipes" />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
