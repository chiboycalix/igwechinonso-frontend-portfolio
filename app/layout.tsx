import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import { Providers } from '@/app/providers';
import NavbarComponent from "@/components/Navbar";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
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
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
