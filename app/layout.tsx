import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sophia's Portfolio",
  description: "Made by Sophia Don Tranho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}