import React, { useState } from 'react';
import '../App.css'; 

const Appointment = () => {
  const brandGreen = '#67be57'; 

  // Form State (To make it interactive)
  const [formData, setFormData] = useState({
    name: '', phone: '', date: '', dept: '', doctor: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your request has been sent. We will call you at ${formData.phone} to confirm.`);
  };

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <header className="position-relative d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px'
        }}>
        <div className="container text-center text-white animate-slide-up">
          <h5 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px', color: brandGreen }}>
            Book Your Visit
          </h5>
          <h1 className="display-3 fw-bold mb-3">Appointment Request</h1>
          <p className="lead fs-4 mb-4">Skip the waiting line. Book online.</p>
        </div>
      </header>

      {/* ================= BOOKING SECTION ================= */}
      <section className="container my-5 py-5">
        <div className="row g-5">
          
          {/* LEFT: THE FORM */}
          <div className="col-lg-7 animate-slide-up">
            <div className="bg-light p-5 rounded-4 shadow-sm border">
               <h3 className="fw-bold mb-4" style={{ color: brandGreen }}>Patient Details</h3>
               <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                     <div className="col-md-6">
                        <label className="form-label fw-bold small text-muted">Full Name</label>
                        <input type="text" name="name" className="form-control p-3 border-0 shadow-sm" required onChange={handleChange} />
                     </div>
                     <div className="col-md-6">
                        <label className="form-label fw-bold small text-muted">Phone Number</label>
                        <input type="tel" name="phone" className="form-control p-3 border-0 shadow-sm" required onChange={handleChange} />
                     </div>
                     <div className="col-md-6">
                        <label className="form-label fw-bold small text-muted">Preferred Date</label>
                        <input type="date" name="date" className="form-control p-3 border-0 shadow-sm" required onChange={handleChange} />
                     </div>
                     <div className="col-md-6">
                        <label className="form-label fw-bold small text-muted">Department</label>
                        <select name="dept" className="form-select p-3 border-0 shadow-sm" onChange={handleChange}>
                           <option>General Consultation</option>
                           <option>Panchkarma</option>
                           <option>Swasth Vritta</option>
                           <option>Pediatrics</option>
                        </select>
                     </div>
                     <div className="col-12">
                        <label className="form-label fw-bold small text-muted">Choose Doctor (Optional)</label>
                        <select name="doctor" className="form-select p-3 border-0 shadow-sm" onChange={handleChange}>
                           <option>Any Available Doctor</option>
                           <option>Dr. Rajesh Sharma</option>
                           <option>Dr. Anjali Verma</option>
                        </select>
                     </div>
                     <div className="col-12">
                        <label className="form-label fw-bold small text-muted">Describe Problem</label>
                        <textarea name="message" className="form-control p-3 border-0 shadow-sm" rows="3" onChange={handleChange}></textarea>
                     </div>
                     <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-brand w-100 py-3 fw-bold rounded-pill shadow">Confirm Booking</button>
                     </div>
                  </div>
               </form>
            </div>
          </div>

          {/* RIGHT: INFO SIDEBAR */}
          <div className="col-lg-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             
             {/* Info Box 1 */}
             <div className="p-4 rounded-4 text-white mb-4 shadow" style={{ backgroundColor: brandGreen }}>
                <h4 className="fw-bold mb-3"><i className="bi bi-info-circle-fill me-2"></i> Before You Visit</h4>
                <ul className="list-unstyled opacity-75">
                   <li className="mb-2">✔ Bring old medical reports if any.</li>
                   <li className="mb-2">✔ Come empty stomach for Nadi Pariksha (Pulse Diagnosis).</li>
                   <li className="mb-2">✔ Wear loose, comfortable clothing.</li>
                   <li className="mb-2">✔ Arrive 15 mins early for registration.</li>
                </ul>
             </div>

             {/* Info Box 2 */}
             <div className="p-4 rounded-4 bg-dark text-white shadow">
                <h4 className="fw-bold mb-3"><i className="bi bi-clock-history me-2"></i> Opd Hours</h4>
                <div className="d-flex justify-content-between border-bottom border-secondary pb-2 mb-2">
                   <span>Monday - Friday</span>
                   <span className="fw-bold" style={{ color: brandGreen }}>08:00 AM - 09:00 PM</span>
                </div>
                <div className="d-flex justify-content-between border-bottom border-secondary pb-2 mb-2">
                   <span>Saturday</span>
                   <span className="fw-bold" style={{ color: brandGreen }}>09:00 AM - 07:00 PM</span>
                </div>
                <div className="d-flex justify-content-between">
                   <span>Sunday</span>
                   <span className="text-muted">Closed (Emergency Only)</span>
                </div>
             </div>

             {/* Contact Mini */}
             <div className="mt-4 text-center">
                <p className="text-muted">Need help booking?</p>
                <h3 className="fw-bold" style={{ color: brandGreen }}>+91 98765 43210</h3>
             </div>

          </div>
        </div>
      </section>

      {/* ================= 3-STEP PROCESS ================= */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
         <div className="container text-center">
            <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>How it Works</h5>
            <h2 className="fw-bold mb-5">Simple Booking Process</h2>
            
            <div className="row g-4 justify-content-center">
               {[
                  { icon: 'bi-calendar-check', title: '1. Book Online', desc: 'Fill the form and choose your preferred date.' },
                  { icon: 'bi-telephone-inbound', title: '2. We Call You', desc: 'Our reception confirms the slot via phone call.' },
                  { icon: 'bi-hospital', title: '3. Visit Clinic', desc: 'Meet the doctor without waiting in long queues.' }
               ].map((step, i) => (
                  <div className="col-md-4" key={i}>
                     <div className="bg-white p-4 rounded-4 shadow-sm h-100 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                        <div className="display-4 mb-3" style={{ color: brandGreen }}>
                           <i className={step.icon}></i>
                        </div>
                        <h4 className="fw-bold">{step.title}</h4>
                        <p className="text-muted">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Appointment;