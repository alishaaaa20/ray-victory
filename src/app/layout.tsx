import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar/Navbar";
import dynamic from "next/dynamic";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ProgressBar = dynamic(() => import("@/components/ProgressBar"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "R.A.Y Victory",
  description: "R.A.Y Victory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ProgressBar />
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
