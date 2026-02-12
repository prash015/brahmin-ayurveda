import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const brandGreen = '#67be57'; 

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row g-4">
          
          {/* Column 1: Brand */}
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: brandGreen }}>Brahmi Ayurveda</h3>
            <p className="text-white-50">
              Reviving the ancient wisdom of Ayurveda for the modern world. 
              We provide authentic treatments to heal your body, mind, and soul.
            </p>
            <div className="d-flex gap-3 mt-3">
               <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
               <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
               <a href="#" className="text-white fs-5"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3 text-uppercase" style={{ color: brandGreen }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none hover-white">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none hover-white">About Us</Link></li>
              <li className="mb-2"><Link to="/doctors" className="text-white-50 text-decoration-none hover-white">Our Doctors</Link></li>
              <li className="mb-2"><Link to="/hospitals" className="text-white-50 text-decoration-none hover-white">Hospitals</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white-50 text-decoration-none hover-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 text-uppercase" style={{ color: brandGreen }}>Our Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/panchkarma" className="text-white-50 text-decoration-none hover-white">Panchkarma</Link></li>
              <li className="mb-2"><Link to="/swasth-ayurveda" className="text-white-50 text-decoration-none hover-white">Swasth Vritta</Link></li>
              <li className="mb-2"><Link to="/appointment" className="text-white-50 text-decoration-none hover-white">Nadi Pariksha</Link></li>
              <li className="mb-2"><Link to="/swasth-ayurveda" className="text-white-50 text-decoration-none hover-white">Garba Sanskar</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 text-uppercase" style={{ color: brandGreen }}>Get in Touch</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-3 d-flex"><i className="bi bi-geo-alt me-2" style={{color: brandGreen}}></i> 123 Ayurveda Marg, Pune</li>
              <li className="mb-3 d-flex"><i className="bi bi-telephone me-2" style={{color: brandGreen}}></i> +91 98765 43210</li>
              <li className="mb-3 d-flex"><i className="bi bi-envelope me-2" style={{color: brandGreen}}></i> info@brahmiayurveda.com</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-white-50">
           <small>&copy; 2026 Brahmi Ayurveda Hospital. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;