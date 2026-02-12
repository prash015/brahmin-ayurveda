import React from 'react';
import { Link } from 'react-router-dom';

const Pharmacy = () => {
  const brandGreen = '#348E38'; 

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh', backgroundColor: '#f8f9fa' }}>
      <div className="text-center container">
        
        {/* Icon or Image */}
        <div className="mb-4 display-1">
          💊
        </div>

        <h1 className="fw-bold mb-3" style={{ color: brandGreen }}>Pharmacy Coming Soon</h1>
        
        <p className="lead text-muted mb-4 fs-4">
          We are working hard to bring you authentic Ayurvedic medicines online.<br />
          Stay tuned for our grand launch!
        </p>

        {/* Fake Notify Me Form */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 col-lg-5">
            <div className="input-group input-group-lg shadow-sm">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn text-white fw-bold" type="button" style={{ backgroundColor: brandGreen }}>
                Notify Me
              </button>
            </div>
            <small className="text-muted mt-2 d-block">We promise not to spam you.</small>
          </div>
        </div>

        <Link to="/" className="btn btn-outline-dark rounded-pill px-4">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Pharmacy;