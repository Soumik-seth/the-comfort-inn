import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "The Comfort Inn",
  description: "Welcome to The Comfort Inn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}