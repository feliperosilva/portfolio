import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";
import { useEffect } from "react";

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

  return null;
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
          <Route path="/contact" element= {<Contact />} />
          <Route path="/courses" element= {<Courses />} />
          <Route path="/products" element= {<Products />} />
        </Routes>
      </Router>
        
    </div>    
  );
}

export default App;