import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Niky Farm Eco-Brutalist Platform",
  description:
    "Expert botanical integration and physiological optimization through living structure. Keystone plantings for the modern environment.",
  keywords: [
    "eco-brutalist",
    "botanical integration",
    "keystone plantings",
    "air purifiers",
    "edible container kits",
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
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;900&family=Public+Sans:wght@300;400;600&family=MuseoModerno:wght@700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
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
