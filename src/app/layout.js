import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistOutfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alina Soomro Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistOutfit.variable} ${geistJakarta.variable} h-full antialiased`}
    >
        <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
        </body>
    </html>
  );
}
