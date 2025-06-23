import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Resuable/Header'
import Home from "./Home/Home";
import About from "./Home/About";
import Services from "./Home/Services";
import ProjectsComponent from "./Home/ProjectsComponent";
import Contact from "./Home/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>  <Home /></div>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Projects" element={<ProjectsComponent/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
