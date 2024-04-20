import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HomeContextProvider from "./context/HomeContext";

const poppins = Poppins(
  {
    weight: ["100", "200", "500", "700", "800", "900"],
    subsets: ["latin"],
    variable: '--font-poppins'
  });

export const metadata: Metadata = {
  title: "Multimidia - Joalyson",
  description: "Projeto - Unidade 03",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <HomeContextProvider>
      <body className={poppins.variable}>{children}</body>
      </HomeContextProvider>
    </html>
  );
}
