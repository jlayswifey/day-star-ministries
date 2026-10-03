import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://day-star-ministries.vercel.app"),
  title: {
    default: "Day Star Ministries | Bassett, Virginia",
    template: "%s | Day Star Ministries"
  },
  description: "Day Star Ministries in Bassett, Virginia — a Christ-centered church community focused on worship, prayer, connection, service, and outreach.",
  keywords: ["Day Star Ministries", "Bassett Virginia church", "Christian church Bassett VA", "C3 Coffee Conversation Christ", "community outreach Bassett VA"],
  openGraph: {
    title: "Day Star Ministries",
    description: "Connect. Grow. Serve. A Christ-centered church community in Bassett, Virginia.",
    url: "https://day-star-ministries.vercel.app",
    siteName: "Day Star Ministries",
    locale: "en_US",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Header/>{children}<Footer/></body></html>
}