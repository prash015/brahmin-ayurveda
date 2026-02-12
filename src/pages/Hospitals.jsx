import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Hospitals = () => {
  const brandGreen = '#67be57'; 

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // 1. FACILITIES DATA (Video Style Cards)
  const facilities = [
    { title: 'Panchkarma Theatre', icon: 'bi-droplet-half', img: 'https://images.unsplash.com/photo-1519823551278-64ac927accc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Hygienic, traditional therapy rooms with steam baths.' },
    { title: 'Organic Canteen', icon: 'bi-cup-hot', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Fresh, Sattvic vegetarian food cooked daily.' },
    { title: 'Yoga & Meditation Hall', icon: 'bi-sun', img: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Peaceful space for morning Yoga and Pranayama.' },
    { title: 'Herbal Garden', icon: 'bi-flower1', img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'A lush garden with over 100 medicinal plants.' }
  ];

  // 2. ACCOMMODATION DATA
  const rooms = [
    { type: 'General Ward', price: 'Affordable', desc: 'Clean, spacious 4-bed shared wards with curtain partitions.', icon: 'bi-people' },
    { type: 'Semi-Private', price: 'Standard', desc: 'Twin-sharing room with attached washroom and TV.', icon: 'bi-person-check' },
    { type: 'Private Suite', price: 'Premium', desc: 'Luxury individual room with AC, WiFi, and attendant bed.', icon: 'bi-star-fill' }
  ];

  // 3. FAQ DATA
  const faqs = [
    { question: "Do you accept health insurance?", answer: "Yes, we offer cashless facilities for all major TPA and insurance providers for IPD admissions." },
    { question: "Are attendants allowed to stay?", answer: "Yes, one attendant is allowed to stay with the patient. We provide bedding and meals for them." },
    { question: "What are the visiting hours?", answer: "Visiting hours are strictly from 5:00 PM to 7:00 PM to ensure patient rest and privacy." }
  ];

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <header className="position-relative d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px'
        }}>
        <div className="container text-center text-white animate-slide-up">
          <h5 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px', color: brandGreen }}>
            Our Centers
          </h5>
          <h1 className="display-3 fw-bold mb-3">World-Class Infrastructure</h1>
          <p className="lead fs-4 mb-4">Healing environments designed by nature.</p>
        </div>
      </header>

      {/* ================= LOCATIONS (MAIN & CITY) ================= */}
      <section className="container my-5 py-5">
        <div className="text-center mb-5">
           <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Our Reach</h5>
           <h2 className="fw-bold display-5">Two Locations, One Vision</h2>
        </div>

        {/* Location 1: Main Campus */}
        <div className="card mb-5 border-0 shadow overflow-hidden animate-slide-up">
          <div className="row g-0">
            <div className="col-md-6">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                className="img-fluid h-100 w-100" 
                style={{ objectFit: 'cover', minHeight: '350px' }}
                alt="Main Campus" 
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="card-body p-5">
                <div className="badge bg-success mb-2">IPD & Residential</div>
                <h2 className="fw-bold mb-3" style={{ color: brandGreen }}>Brahmi Main Campus</h2>
                <p className="card-text text-secondary mb-4">
                  Located in the serene outskirts of Pune, our 10-acre campus is a pollution-free zone perfect for deep healing. 
                  Features residential Panchkarma, Yoga halls, and organic gardens.
                </p>
                <ul className="list-unstyled text-muted mb-4">
                  <li className="mb-2"><i className="bi bi-geo-alt-fill me-2" style={{color: brandGreen}}></i> 123 Ayurveda Marg, Pune</li>
                  <li className="mb-2"><i className="bi bi-telephone-fill me-2" style={{color: brandGreen}}></i> +91 98765 43210</li>
                  <li className="mb-2"><i className="bi bi-clock-fill me-2" style={{color: brandGreen}}></i> 24/7 Emergency Care</li>
                </ul>
                <div className="d-flex gap-3">
                   <Link to="/appointment" className="btn btn-brand rounded-pill px-4">Book Admission</Link>
                   <button className="btn btn-outline-dark rounded-pill px-4">Get Directions</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location 2: City Clinic */}
        <div className="card mb-5 border-0 shadow overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="row g-0 flex-md-row-reverse">
            <div className="col-md-6">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                className="img-fluid h-100 w-100" 
                style={{ objectFit: 'cover', minHeight: '350px' }}
                alt="City Clinic" 
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="card-body p-5">
                <div className="badge bg-warning text-dark mb-2">OPD & Pharmacy</div>
                <h2 className="fw-bold mb-3" style={{ color: brandGreen }}>City Clinic</h2>
                <p className="card-text text-secondary mb-4">
                  Conveniently located in the city center for daily consultations, Nadi Pariksha, and medicine collection. 
                  Ideal for follow-up visits and busy professionals.
                </p>
                <ul className="list-unstyled text-muted mb-4">
                  <li className="mb-2"><i className="bi bi-geo-alt-fill me-2" style={{color: brandGreen}}></i> Shop 4, City Center, Pune</li>
                  <li className="mb-2"><i className="bi bi-telephone-fill me-2" style={{color: brandGreen}}></i> +91 11223 34455</li>
                  <li className="mb-2"><i className="bi bi-clock-fill me-2" style={{color: brandGreen}}></i> 9:00 AM - 9:00 PM</li>
                </ul>
                <div className="d-flex gap-3">
                   <Link to="/appointment" className="btn btn-brand rounded-pill px-4">Book Consult</Link>
                   <button className="btn btn-outline-dark rounded-pill px-4">Get Directions</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW: FACILITIES (VIDEO STYLE GRID) ================= */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Infrastructure</h5>
               <h2 className="fw-bold display-5">Our Facilities</h2>
            </div>
            <div className="row g-4">
               {facilities.map((item, index) => (
                  <div className="col-lg-3 col-md-6" key={index}>
                     <div className="service-box h-100 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="service-img-container">
                           <img src={item.img} alt={item.title} className="service-img" />
                           <div className="service-overlay">
                              <i className={`bi ${item.icon}`}></i>
                           </div>
                        </div>
                        <div className="service-content">
                           <div className="service-icon-static">
                              <i className={`bi ${item.icon}`}></i>
                           </div>
                           <h5 className="fw-bold mb-2">{item.title}</h5>
                           <p className="text-muted small">{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= NEW: ACCOMMODATION ================= */}
      <section className="py-5 bg-light">
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Stay With Us</h5>
               <h2 className="fw-bold display-5">Patient Accommodation</h2>
               <p className="text-muted">Choose a room that suits your comfort and budget.</p>
            </div>
            <div className="row g-4">
               {rooms.map((room, index) => (
                  <div className="col-md-4" key={index}>
                     <div className="card h-100 border-0 shadow-sm text-center p-4 hover-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="mb-3">
                           <i className={`bi ${room.icon} display-4`} style={{ color: brandGreen }}></i>
                        </div>
                        <h4 className="fw-bold">{room.type}</h4>
                        <span className="badge bg-dark mb-3">{room.price}</span>
                        <p className="text-muted">{room.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= NEW: SERVICES & AMENITIES ================= */}
      <section className="py-5 bg-dark text-white">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-5 mb-4 mb-lg-0">
                  <h2 className="fw-bold display-5 mb-4">Patient Services</h2>
                  <p className="lead text-white-50 mb-4">
                     We go beyond medical treatment to ensure your experience is seamless and stress-free.
                  </p>
                  <Link to="/contact" className="btn btn-brand rounded-pill px-5 py-3">Contact Support</Link>
               </div>
               <div className="col-lg-7">
                  <div className="row g-4">
                     <div className="col-md-6 animate-slide-up">
                        <div className="d-flex align-items-start">
                           <i className="bi bi-truck-front fs-2 me-3" style={{ color: brandGreen }}></i>
                           <div>
                              <h5 className="fw-bold">24/7 Ambulance</h5>
                              <p className="text-white-50 small">Emergency pickup and drop service.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="d-flex align-items-start">
                           <i className="bi bi-file-medical fs-2 me-3" style={{ color: brandGreen }}></i>
                           <div>
                              <h5 className="fw-bold">Insurance Support</h5>
                              <p className="text-white-50 small">TPA assistance for cashless claims.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="d-flex align-items-start">
                           <i className="bi bi-wifi fs-2 me-3" style={{ color: brandGreen }}></i>
                           <div>
                              <h5 className="fw-bold">Free Wi-Fi</h5>
                              <p className="text-white-50 small">High-speed internet in all rooms.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="d-flex align-items-start">
                           <i className="bi bi-credit-card fs-2 me-3" style={{ color: brandGreen }}></i>
                           <div>
                              <h5 className="fw-bold">ATM & Banking</h5>
                              <p className="text-white-50 small">ATM facility available within campus.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ================= MAPS SECTION ================= */}
      <section className="py-5">
         <div className="container">
            <div className="text-center mb-5">
               <h2 className="fw-bold">Find Us on Google Maps</h2>
            </div>
            <div className="row g-4">
               <div className="col-md-6 animate-slide-up">
                  <h5 className="fw-bold text-center mb-3">Main Campus</h5>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.856743!3d18.520430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjUiTiA3M8KwNTEnMjQuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" height="300" style={{ border: 0, borderRadius: '15px' }} allowFullScreen="" loading="lazy" title="Main Campus">
                  </iframe>
               </div>
               <div className="col-md-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <h5 className="fw-bold text-center mb-3">City Clinic</h5>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.856743!3d18.520430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjUiTiA3M8KwNTEnMjQuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" height="300" style={{ border: 0, borderRadius: '15px' }} allowFullScreen="" loading="lazy" title="City Clinic">
                  </iframe>
               </div>
            </div>
         </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-5 bg-light">
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Information</h5>
               <h2 className="fw-bold">Hospital Guidelines</h2>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="accordion shadow-sm" id="hospitalFaq">
                     {faqs.map((faq, index) => (
                        <div className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm" key={index}>
                           <h2 className="accordion-header">
                              <button 
                                 className={`accordion-button fw-bold ${openFaq === index ? '' : 'collapsed'}`} 
                                 type="button" 
                                 onClick={() => toggleFaq(index)}
                                 style={{ 
                                    backgroundColor: openFaq === index ? '#eafbe7' : 'white',
                                    color: openFaq === index ? brandGreen : 'black',
                                    boxShadow: 'none'
                                 }}
                              >
                                 {faq.question}
                              </button>
                           </h2>
                           <div className={`accordion-collapse collapse ${openFaq === index ? 'show' : ''}`}>
                              <div className="accordion-body text-muted bg-white">
                                 {faq.answer}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Hospitals;