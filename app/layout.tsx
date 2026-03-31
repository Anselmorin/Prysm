import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prysm — Pick a book. Learn a language.",
  description: "Prysm refracts learning into a spectrum of possibilities. A subsidiary of OnlineMars LLC.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
