import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Greeting from "./pages/Greeting";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()} */}
      <NavTabs />
      <Greeting />
      <Skills />
      <Portfolio />
      <Resume />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
