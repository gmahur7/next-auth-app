import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/components/Header";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth App",
  description: "A basic next.js authentication project by Gaurav Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
        {children}
        </Suspense>
      </body>
    </html>
  );
}
