import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Chatbot } from "@/components/ui";
import { Header, Footer } from "@/components/layout";
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weband",
  description: "IT Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable}  antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
