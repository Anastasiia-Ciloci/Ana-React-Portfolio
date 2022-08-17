import React from "react";
import NavTabs from "./NavTabs";
import Greeting from "./pages/Greeting";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function PortfolioContainer() {
  return (
    <div>
      <NavTabs />
      <Greeting />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
