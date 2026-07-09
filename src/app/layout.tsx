import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jungle Safari Experts | India's Trusted Wildlife Safari Tour Specialists",
  description:
    "Book handcrafted jungle safari experiences in India — Jhalana Leopard Safari, Ranthambore Tiger Safari, Sariska & Amargarh. Government-approved bookings with expert guides.",
  keywords: [
    "jungle safari",
    "tiger safari",
    "leopard safari",
    "Ranthambore",
    "Jhalana",
    "Sariska",
    "wildlife tours India",
  ],
  openGraph: {
    title: "Jungle Safari Experts",
    description:
      "Experience India's wild like never before with Jungle Safari Experts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17986578873"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17986578873');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
