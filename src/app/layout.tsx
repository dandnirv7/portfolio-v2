import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { domainPath, personalInfo } from "@/data";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basicInfo = {
  title: `${personalInfo.name} | Portfolio`,
  description: `${personalInfo.summary}`,
};

export const metadata: Metadata = {
  ...basicInfo,
  metadataBase: new URL(domainPath),
  keywords: [
    "portfolio",
    "resume",
    "projects",
    "Frontend Engineer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: personalInfo.name, url: domainPath }],
  creator: personalInfo.name,
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    ...basicInfo,
    url: domainPath,
    siteName: `${personalInfo.name}'s Portfolio`,
    images: [
      {
        url: "/images/projects/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    ...basicInfo,
    images: ["/images/projects/portfolio.png"],
    card: "summary_large_image",
    creator: personalInfo.name,
  },
  alternates: {
    canonical: domainPath,
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: personalInfo.name,
      url: domainPath,
      sameAs: [personalInfo.contact.linkedin, personalInfo.contact.github],
      jobTitle: personalInfo.title,
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            {children}
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
