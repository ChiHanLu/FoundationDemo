import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bright Future | Creating Hope",
  description: "Non-profit organization focused on community programs and social support.",
  keywords: "foundation, nonprofit, charity, community",
  openGraph: {
    title: "Bright Future | Creating Hope",
    description: "Non-profit organization focused on community programs and social support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={"antialiased"}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
