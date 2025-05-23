import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header-page";
import Footer from "@/components/footer-page";
import Container from "@/components/container-component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evento - find events around you",
  description: "Browse more than 10,000 events around you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 text-white overflow-y-scroll`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
