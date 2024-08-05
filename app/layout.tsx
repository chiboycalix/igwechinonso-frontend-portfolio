import type { Metadata } from "next";
import { Inter, Lexend, Sora } from "next/font/google";
import { Providers } from '@/app/providers';
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
export const metadata: Metadata = {
  title: "Igwe Chinonso",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lexend.variable} ${sora.variable}`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <NavbarComponent />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
