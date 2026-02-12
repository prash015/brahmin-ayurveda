import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const brandGreen = '#67be57'; 
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isActive = (path) => location.pathname === path ? 'active fw-bold' : '';

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white shadow-sm py-2">
      <div className="container">
        {/* ================= UPDATED LOGO SECTION ================= */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
           {/* Your New Logo Image */}
           <img 
             src="/brahmi_logo.jpeg" 
             alt="Brahmi Ayurveda" 
             height="65" // Good height for a square logo
             style={{ objectFit: 'contain' }} 
           />
           {/* Optional: Keep text next to logo, or remove this h4 if you want image only */}
           <h4 className="fw-bold mb-0 ms-3 d-none d-sm-block" style={{ color: brandGreen, letterSpacing: '1px' }}>
             BRAHMI AYURVEDA
           </h4>
        </Link>
        {/* ======================================================== */}

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/')}`} to="/">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/about')}`} to="/about">About Us</Link>
            </li>

            {/* FIXED DROPDOWN */}
            <li 
              className="nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a 
                className={`nav-link dropdown-toggle ${isActive('/swasth-ayurveda') || isActive('/panchkarma') ? 'active fw-bold' : ''}`} 
                href="#" 
                role="button"
                onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}
                aria-expanded={dropdownOpen}
              >
                Treatments
              </a>
              <ul className={`dropdown-menu border-0 shadow ${dropdownOpen ? 'show' : ''}`} style={{ marginTop: 0 }}>
                <li>
                  <Link className="dropdown-item" to="/swasth-ayurveda" onClick={() => setDropdownOpen(false)}>Swasth Ayurveda</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/panchkarma" onClick={() => setDropdownOpen(false)}>Panchkarma Therapy</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive('/hospitals')}`} to="/hospitals">Hospitals</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive('/doctors')}`} to="/doctors">Doctors</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact')}`} to="/contact">Contact</Link>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link to="/appointment" className="btn text-white rounded-pill px-4 fw-bold shadow-sm" style={{ backgroundColor: brandGreen }}>
                Book Appointment
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;