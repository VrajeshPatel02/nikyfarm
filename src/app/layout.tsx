import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Niky Farm & Nursery — Premium Plants & Landscaping | Valsad, Gujarat",
  description:
    "Niky Farm & Nursery offers 500+ varieties of indoor, outdoor, and exotic plants along with professional landscaping services in Valsad, Gujarat. Visit us for quality plants and expert gardening advice.",
  keywords: [
    "plant nursery valsad",
    "niky farm nursery",
    "indoor plants gujarat",
    "outdoor plants",
    "garden landscaping",
    "buy plants online",
    "garden design valsad",
    "nursery near me",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=chillax@600,700&f[]=synonym@400,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
