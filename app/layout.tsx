// layout.tsx
import "../global.css";
import { Space_Grotesk, Outfit } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: "Raiyan's Portfolio",
  description: "Software Engineer & Developer",
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[outfit.variable, spaceGrotesk.variable, calSans.variable].join(" ")}>
      <body className="bg-black text-white">
        <Analytics />
        {children}
      </body>
    </html>
  );
}

