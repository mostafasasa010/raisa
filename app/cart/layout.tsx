import Footer from "@/components/Footer";
import HeaderClient from "@/components/HeaderClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raisa | Cart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <HeaderClient />
        <div className="min-h-[calc(100vh-64px)]">{children}</div>
        <Footer />
      </main>
    </>
  );
}
