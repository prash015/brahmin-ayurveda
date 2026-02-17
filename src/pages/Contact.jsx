import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Contact = () => {
  const brandGreen = '#67be57'; 

  // Contact Info Cards
  const contactInfo = [
    { icon: 'bi-geo-alt', title: 'Our Location', desc: '314, Samanvay Business Square, Waghodia Road, Vadodara – 390019', action: 'Get Directions' },
    { icon: 'bi-telephone', title: 'Phone Number', desc: '+91 97123 11557', action: 'Call Now' },
    { icon: 'bi-envelope', title: 'Email Address', desc: 'info@brahmiayu.com', action: 'Send Email' }
  ];

  // Department Contacts
  const departments = [
    { name: 'General Enquiry', email: 'info@brahmiayu.com', phone: '+91 97123 11557' },
    { name: 'Appointments', email: 'booking@brahmiayu.com', phone: '+91 97123 11557' },
    { name: 'Consultation Hours', email: '10:00 AM – 2:00 PM, 4:30 PM – 8:00 PM', phone: 'Daily' }
  ];

  // Social Media Links
  const socialLinks = [
    { icon: 'bi-youtube', name: 'YouTube', url: 'https://www.youtube.com/@brahmiayu', color: '#FF0000' },
    { icon: 'bi-whatsapp', name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029VbARMpxISTkROSyxY22X', color: '#25D366' },
    { icon: 'bi-facebook', name: 'Facebook', url: 'https://www.facebook.com/share/1APJqFuzZb/', color: '#1877F2' }
  ];

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <header className="position-relative d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px'
        }}>
        <div className="container text-center text-white animate-slide-up">
          <h5 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px', color: brandGreen }}>
            We're Here to Help
          </h5>
          <h1 className="display-3 fw-bold mb-3">Get in Touch</h1>
          <p className="lead fs-4 mb-4">Connect with Brahmi Ayurveda for holistic wellness solutions</p>
        </div>
      </header>

      {/* ================= FLOATING INFO CARDS ================= */}
      <section className="container" style={{ marginTop: '-80px', position: 'relative', zIndex: '10' }}>
         <div className="row g-4">
            {contactInfo.map((item, index) => (
               <div className="col-md-4" key={index}>
                  <div className="card border-0 shadow-sm p-4 text-center h-100 hover-card animate-slide-up" 
                       style={{ animationDelay: `${index * 0.2}s` }}>
                     <div className="mb-3 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto" 
                          style={{ width: '70px', height: '70px', backgroundColor: '#eafbe7', color: brandGreen }}>
                        <i className={`bi ${item.icon} fs-2`}></i>
                     </div>
                     <h4 className="fw-bold">{item.title}</h4>
                     <p className="text-muted">{item.desc}</p>
                     <button className="btn btn-outline-success btn-sm rounded-pill px-4">{item.action}</button>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* ================= MAIN FORM SECTION ================= */}
      <section className="container my-5 py-5">
         <div className="row align-items-center">
            {/* Left Side: Text & Depts */}
            <div className="col-lg-5 mb-5 mb-lg-0 animate-slide-up">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Message Us</h5>
               <h2 className="fw-bold display-5 mb-4">Have Questions?</h2>
               <p className="text-secondary mb-5">
                  Whether you want to book a consultation, ask about our Ayurvedic treatments, or just say hello, 
                  we are always ready to listen.
               </p>

               <h5 className="fw-bold mb-3">Contact Information</h5>
               <div className="list-group shadow-sm rounded-4 overflow-hidden mb-4">
                  {departments.map((dept, i) => (
                     <div className="list-group-item border-0 p-3 d-flex justify-content-between align-items-center" key={i}>
                        <div>
                           <h6 className="fw-bold mb-0">{dept.name}</h6>
                           <small className="text-muted">{dept.email}</small>
                        </div>
                        <div className="text-end">
                           <small className="d-block fw-bold" style={{ color: brandGreen }}>{dept.phone}</small>
                        </div>
                     </div>
                  ))}
               </div>

               <h5 className="fw-bold mb-3">Stay Connected</h5>
               <div className="d-flex gap-3">
                  {socialLinks.map((social, i) => (
                     <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        key={i}
                        className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '50px', height: '50px' }}
                        title={social.name}
                     >
                        <i className={`bi ${social.icon} fs-5`} style={{ color: social.color }}></i>
                     </a>
                  ))}
               </div>
            </div>

            {/* Right Side: Form */}
            <div className="col-lg-7 ps-lg-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
               <div className="bg-light p-5 rounded-4 shadow-sm border border-1">
                  <h3 className="fw-bold mb-4">Send a Message</h3>
                  <div>
                     <div className="row g-3">
                        <div className="col-md-6">
                           <label className="form-label fw-bold small text-muted">Your Name</label>
                           <input type="text" className="form-control p-3 border-0 shadow-sm" placeholder="John Doe" />
                        </div>
                        <div className="col-md-6">
                           <label className="form-label fw-bold small text-muted">Phone Number</label>
                           <input type="tel" className="form-control p-3 border-0 shadow-sm" placeholder="+91 XXXXX XXXXX" />
                        </div>
                        <div className="col-12">
                           <label className="form-label fw-bold small text-muted">Email Address</label>
                           <input type="email" className="form-control p-3 border-0 shadow-sm" placeholder="name@example.com" />
                        </div>
                        <div className="col-12">
                           <label className="form-label fw-bold small text-muted">Subject</label>
                           <select className="form-select p-3 border-0 shadow-sm">
                              <option>General Inquiry</option>
                              <option>Book Consultation</option>
                              <option>Treatment Information</option>
                              <option>Feedback</option>
                           </select>
                        </div>
                        <div className="col-12">
                           <label className="form-label fw-bold small text-muted">Message</label>
                           <textarea className="form-control p-3 border-0 shadow-sm" rows="4" placeholder="How can we help you?"></textarea>
                        </div>
                        <div className="col-12 mt-4">
                           <button className="btn btn-brand w-100 py-3 fw-bold rounded-pill shadow">Submit Message</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ================= CONSULTATION HOURS STRIP ================= */}
      <section className="py-5 text-white" style={{ background: `linear-gradient(45deg, ${brandGreen}, #4a9d3e)` }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-8 mb-3 mb-lg-0 text-center text-lg-start">
                  <h2 className="fw-bold mb-1">Visit Us for Consultation</h2>
                  <p className="mb-0 opacity-75">Open Daily: 10:00 AM – 2:00 PM & 4:30 PM – 8:00 PM</p>
               </div>
               <div className="col-lg-4 text-center text-lg-end">
                  <a href="tel:+919712311557" className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold shadow">
                     <i className="bi bi-telephone-fill me-2"></i> Call Now
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* ================= FULL WIDTH MAP ================= */}
      <section className="container-fluid p-0">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6047623456!2d73.1567!3d22.3024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f3b3b3b3b3%3A0x1234567890abcdef!2sWaghodia%20Road%2C%20Vadodara%2C%20Gujarat%20390019!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Brahmi Ayurveda Location - Vadodara">
         </iframe>
      </section>
    </div>
  );
};

export default Contact;