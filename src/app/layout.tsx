import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ApolloProviderWrapper from "@/providers/ApolloProviderWrapper";
import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Installers NY",
  description: "Smart Installers NY",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} antialiased `}>
        <ApolloProviderWrapper>
          <div className="w-full">
            <TopBar />
            <Navbar />
            {children}
            <Footer />
          </div>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
