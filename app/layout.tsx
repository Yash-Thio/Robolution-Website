"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navigation/Navbar";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="images/favicon.ico" /> 
      <title>Robolution</title>
      </head>
      <body>
        <RecoilRoot>
        <div className={inter.className}>
          <Navbar />
          {children}
        </div>
        </RecoilRoot>
      </body>
    </html>
  );
}
