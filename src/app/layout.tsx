import type { Metadata } from "next";
import "./globals.css";
import AppThemeProvider from "../providers/AppThemeProvider";
import Navbar from "../components/layout/Navbar";
import AppBackground from "../components/layout/AppBackground";

export const metadata: Metadata = {
  title: "Cosmic Library v2",
  description: "A modern digital library for curated software development resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>
          <AppBackground />
          <Navbar />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}