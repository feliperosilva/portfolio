import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";

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
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="App">
      <Router>
        <ScrollToSection /> 
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element= {<Home darkMode={darkMode} />} />
          <Route path="/about" element= {<About darkMode={darkMode} />} />
          <Route path="/contact" element= {<Contact darkMode={darkMode} />} />
          <Route path="/courses" element= {<Courses darkMode={darkMode} />} />
          <Route path="/products" element= {<Products darkMode={darkMode} />} />
        </Routes>
      </Router>
        
    </div>    
  );
}

export default App;