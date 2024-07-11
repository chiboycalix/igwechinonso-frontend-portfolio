import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import { Providers } from '@/app/providers';
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Copyright from "@/components/Copyright";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
      <body className={`${inter.variable} ${lexend.variable}`}>
        <Providers>
          <NavbarComponent />
          <div className="min-h-screen">{children}</div>
          <Footer />
          <Copyright />
        </Providers>
      </body>
    </html>
  );
}
