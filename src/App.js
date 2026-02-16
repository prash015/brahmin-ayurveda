import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Needed for Header Dropdown
import './App.css';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Optional: Makes page scroll to top on click

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import SwasthAyurveda from './pages/SwasthAyurveda';
import Panchkarma from './pages/Panchkarma';
import Hospitals from './pages/Hospitals';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

function App() {
  return (
    <Router>
      {/* ScrollToTop ensures new pages start at the top */}
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/swasth-ayurveda" element={<SwasthAyurveda />} />
        <Route path="/panchkarma" element={<Panchkarma />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;