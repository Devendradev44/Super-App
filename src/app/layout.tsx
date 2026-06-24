import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Super App",
  description: "Entertainment Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}