import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BrainRot Memecoin — Bold landing with chaotic brain-rot visuals",
  description: "BrainRot Memecoin is a bold, community-driven landing that embraces chaotic brain-rot aesthetics while clearly presenting how to buy, tokenomics, and the vibe.",
  keywords: ["brainrot", "memecoin", "cryptocurrency", "tokenomics", "how to buy", "crypto landing", "community-driven", "memecoin brain rot"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BrainRot Memecoin — Bold landing with chaotic brain-rot visuals",
    description: "BrainRot Memecoin is a bold, community-driven landing that embraces chaotic brain-rot aesthetics while clearly presenting how to buy, tokenomics, and the vibe.",
    type: "website",
    url: "/",
    siteName: "BrainRot",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-b-1759143530426-188d0504.jpg",
      width: 1200,
      height: 630,
      alt: "A neon-brain collage with glitch art and meme typography, high-contrast for social sharing"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainRot Memecoin — Bold landing with chaotic brain-rot visuals",
    description: "BrainRot Memecoin is a bold, community-driven landing that embraces chaotic brain-rot aesthetics while clearly presenting how to buy, tokenomics, and the vibe.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-b-1759143530426-188d0504.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
