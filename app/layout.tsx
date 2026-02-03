import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { CursorGlow } from "@/components/cursor-glow";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL('https://yourwebsite.com'), // Update with your actual domain
  title: {
    default: "Abhijeet Jadhav - AI Engineer | ML Engineer | Data Scientist",
    template: "%s | Abhijeet Jadhav"
  },
  description: "Building Intelligent Systems That Solve Real-World Problems. Portfolio of Abhijeet Jadhav, an AI Engineer specializing in Machine Learning, Deep Learning, and Data Science.",
  keywords: ["AI Engineer", "Machine Learning", "Data Science", "Deep Learning", "Python", "FastAPI", "AWS", "TensorFlow", "Keras", "Neural Networks", "Computer Vision", "NLP"],
  authors: [{ name: "Abhijeet Jadhav", url: "https://github.com/AbhijeetJadhav72" }],
  creator: "Abhijeet Jadhav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Abhijeet Jadhav - AI Engineer | ML Engineer | Data Scientist",
    description: "Building Intelligent Systems That Solve Real-World Problems",
    siteName: "Abhijeet Jadhav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijeet Jadhav - AI Engineer | ML Engineer | Data Scientist",
    description: "Building Intelligent Systems That Solve Real-World Problems",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorGlow />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
