"use client"

import Head from "./head";
import AboutCard from "./aboutCard";
import Projects from "./projects";
import Testimonials from "./Testimonials";
import HoverNav from "./HoverNav";
import FrequentAsked from "./FrequentAsked";
import Contact from "./Contact";
import Footer from "./services/Footer";

const HomePage = () => {
  return (
    <div>
    <Head />
    <AboutCard />
    <Projects />
    <Testimonials />
    <HoverNav />
    <FrequentAsked />
    <Contact />
    <Footer />
    </div>
  )
}

export default HomePage;
