import Footer from "./Footer"
import Contact from "../Contact"
import { ToastContainer } from "react-toastify"
import Services from "./Services"
import Brand from "./Brand"
import Clients from "./Clients"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gas Piping, Commercial Kitchen Setup & Extractor Hood Installation in Abuja,FCT | Sanity Prime Technologies",
  description: "Professional kitchen equipment repair, gas piping, extractor hood installation, and complete commercial kitchen setup services for restaurants and homes.",
  keywords: [
    "kitchen equipment repair",
    "commercial kitchen gas installation",
    "gas piping services",
    "extractor hood installation",
    "commercial kitchen setup",
    "restaurant kitchen installation",
    "kitchen ventilation systems",
    "gas cooker installation",
    "industrial kitchen maintenance",
  ],

  authors: [{ name: "Tobi.Dev for Sanity Prime Tech." }],

  openGraph: {
    title: "Commercial Kitchen Equipment Installation & Gas Installation",
    description:
      "Experts in kitchen setup services, gas piping installation, and extractor hood systems.",
    url: "https://sanityprime.com",
    siteName: "Sanity Prime Tech",
    images: [{ url: "https://sanityprime.com/og.png" }],
    type: "website",
  },

};

export default function About() {
    
    return <div className="w-full overflow-hidden">
        <ToastContainer />
        <Services />
        <Brand />
        <Clients />
        <Contact />
        <Footer />
    </div>
}