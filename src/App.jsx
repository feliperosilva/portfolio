import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Technologies from "./components/pages/Technologies";
import Projects from "./components/pages/Projects";
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";
import './i18n'

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Get the section element using the current hash from the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
};

function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToSection /> 
        <Navbar />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/about" element= {<About />} />
          <Route path="/projects" element= {<Projects />} />
          <Route path="/technologies" element= {<Technologies />} />
          <Route path="/contact" element= {<Contact />} />
        </Routes>
      </Router>
        
    </div>    
  );
}

export default App;