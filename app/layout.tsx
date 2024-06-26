import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "@/components/ui/mobile_menu";
import SiteHeader from "@/components/ui/site_header";
import DesktopMenuUI from "@/components/ui/desktop_menu_ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 bg-inherit pt-6 mb-12">
          <DesktopMenuUI />
          <MobileMenu />
          <SiteHeader />
        </div>

        {children}
      </body>
    </html>
  );
}
