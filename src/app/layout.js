import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suraj Pandit",
  description:
    "Full-Stack Developer - Creating innovative digital solutions with modern web technologies",
  keywords:
    "Suraj Pandit, Full Stack Developer, Software Engineer, React, Next.js, Node.js, JavaScript, Web Development",
  authors: [{ name: "Suraj Pandit" }],
  creator: "Suraj Pandit",
  openGraph: {
    title: "Suraj Pandit - Full-Stack Developer",
    description:
      "Full-Stack Developer - Creating innovative digital solutions with modern web technologies",
    url: "https://your-domain.com", // Replace with your domain
    siteName: "Suraj Pandit Portfolio",
    images: [
      {
        url: "/public/profile-icon.jpg",
        width: 1200,
        height: 630,
        alt: "Suraj Pandit - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Pandit - Full-Stack Developer",
    description:
      "Full-Stack Developer - Creating innovative digital solutions with modern web technologies",
    images: ["/profile-icon.png"],
  },
  icons: {
    icon: "/profile-icon.png",
    shortcut: "/profile-icon.png",
    apple: "/profile-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Suraj Pandit" />
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}