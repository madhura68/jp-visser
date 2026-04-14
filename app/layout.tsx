import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Janpeter Visser — Software Engineer",
  description:
    "Persoonlijke website van Janpeter Visser. Allround software engineer met 30 jaar ervaring in full-stack development, van C++ tot Angular en .NET.",
  metadataBase: new URL("https://jp-visser.nl"),
  openGraph: {
    title: "Janpeter Visser — Software Engineer",
    description:
      "Allround software engineer met 30 jaar ervaring in full-stack development.",
    url: "https://jp-visser.nl",
    siteName: "Janpeter Visser",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
