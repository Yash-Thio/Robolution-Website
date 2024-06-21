import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./Components/Navigation/Navigation";
import RecoilProvider from "./Store/RecoilProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Robolution',
}

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
      </head>
      <body>
          <RecoilProvider>
        <div className={inter.className}>
          <Navigation />
          {children}
        </div>
        </RecoilProvider>
      </body>
    </html>
  );
}
