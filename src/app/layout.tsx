import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Parambh Rehab Center | Jodhpur",
    template: "%s | Parambh Jodhpur",
  },
  description:
    "Expert physiotherapy, speech therapy, occupational therapy and behaviour therapy for children in Jodhpur. Book your child's assessment today.",
  keywords: [
    "child rehabilitation centre Jodhpur",
    "pediatric physiotherapy Jodhpur",
    "speech therapy for children Jodhpur",
    "autism therapy Jodhpur",
    "ADHD therapy Jodhpur",
    "occupational therapy children Jodhpur",
    "Parambh rehab center",
  ],
  authors: [{ name: "Parambh Rehab Center" }],
  creator: "Parambh Rehab Center",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Parambh Rehab Center | Jodhpur",
    description:
      "Expert physiotherapy, speech therapy, occupational therapy and behaviour therapy for children in Jodhpur.",
    siteName: "Parambh Rehab Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parambh Rehab Center | Jodhpur",
    description:
      "Expert physiotherapy, speech therapy, occupational therapy and behaviour therapy for children in Jodhpur.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
