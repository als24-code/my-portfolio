import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { AppProvider } from "@/components/providers/AppProvider";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Product designer turning complex problems into clear, considered digital products. Selected work, approach and contact.";

export const metadata = {
  title: "AlinaSoomro — Software Engineer",
  description,
  openGraph: {
    title: "AlinaSoomro — Software Engineer",
    description,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};
export const viewport = { themeColor: "#0F1115" };

export default function RootLayout({ children, session }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
