import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "intellzilla.com Waitlist";
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "intellzilla Waitlist and feedback page for EMS website.";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-[#0f0f0f]  to-[#000000]`}>
        <main className="flex justify-center items-center min-h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
