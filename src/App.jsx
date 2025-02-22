import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar"
import About from "./component/About"
import Contact from "./component/Contact";
import Home from "./component/Home";
import Projects from "./component/Projects"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
