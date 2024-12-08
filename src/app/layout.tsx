import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furniche | Home Furnishing",
  icons: {
    icon: "favicon.ico",
  },
  description: "Get the best deals on home furnishing products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${GeistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
