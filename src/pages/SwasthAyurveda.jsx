import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const SwasthAyurveda = () => {
  const brandGreen = '#67be57'; 

  // Pillars Data
  const pillars = [
    { 
      title: 'Dinacharya', 
      subtitle: 'Daily Regimen',
      icon: 'bi-sun', 
      img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
      desc: 'Personalized daily routines: Waking up at Brahma Muhurta, tongue scraping, and self-massage.' 
    },
    { 
      title: 'Ritucharya', 
      subtitle: 'Seasonal Regimen',
      icon: 'bi-cloud-sun', 
      img: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
      desc: 'Adapting your diet and lifestyle according to the six seasons to maintain Dosha balance.' 
    },
    { 
      title: 'Ahaar Vihar', 
      subtitle: 'Diet & Lifestyle',
      icon: 'bi-basket', 
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
      desc: 'Guidance on Sattvic diet and mindful eating habits tailored to your unique body constitution.' 
    }
  ];

  // Benefits Data
  const benefits = [
    { icon: 'bi-shield-check', title: 'Boosts Immunity', desc: 'Natural resistance to diseases.' },
    { icon: 'bi-emoji-smile', title: 'Mental Peace', desc: 'Reduces stress and anxiety.' },
    { icon: 'bi-lightning', title: 'Higher Energy', desc: 'Feel active throughout the day.' },
    { icon: 'bi-hourglass-split', title: 'Longevity', desc: 'Promotes a long, healthy life.' }
  ];

  // Daily Routine Data
  const routineSteps = [
    { time: '05:00 AM', title: 'Brahma Muhurta', desc: 'Wake up before sunrise for mental clarity.' },
    { time: '06:00 AM', title: 'Usha Paana', desc: 'Drink warm water from a copper vessel.' },
    { time: '06:30 AM', title: 'Yoga & Pranayama', desc: 'Light stretching and breathing exercises.' },
    { time: '07:30 AM', title: 'Abhyanga', desc: 'Self-massage with warm herbal oil.' }
  ];
const [openFaq, setOpenFaq] = useState(0); // Default open the first one (index 0)

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null); // Close if already open
    } else {
      setOpenFaq(index); // Open the clicked one
    }
  };

  // FAQ Data
  const faqs = [
    {
      question: "Can I follow Swasth Ayurveda while working a 9-5 job?",
      answer: "Absolutely. We design practical routines that fit modern lifestyles, focusing on small changes like wake-up time, diet, and posture that yield big results."
    },
    {
      question: "Is this only for sick people?",
      answer: "No. Swasth Ayurveda is primarily for healthy people to *stay* healthy, boost immunity, and prevent future illnesses. It is the science of preventive care."
    },
    {
      question: "Do I need to be vegetarian?",
      answer: "While Ayurveda recommends a Sattvic (mostly vegetarian) diet for mental clarity, we customize plans based on your body type (Prakriti) and nutritional needs."
    }
  ];
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <header className="position-relative d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '550px'
        }}>
        <div className="container text-center text-white animate-slide-up">
          <h5 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px', color: brandGreen }}>
            Preventive Healthcare
          </h5>
          <h1 className="display-3 fw-bold mb-3">Swasth Ayurveda</h1>
          <p className="lead fs-4 mb-4">The Science of Daily Living & Natural Balance</p>
          <Link to="/appointment" className="btn btn-brand btn-lg rounded-pill px-5 py-3 shadow">
            Book a Consultation
          </Link>
        </div>
      </header>

      {/* ================= INTRO SECTION ================= */}
      <section className="container my-5 py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 animate-slide-up">
            <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>What is Swasth Vritta?</h5>
            <h2 className="fw-bold display-5 mb-4">Preserving the Health of the Healthy</h2>
            <p className="lead text-secondary">
              "Swasthya" means Health and "Vritta" means Regimen.
            </p>
            <p className="text-muted mb-4">
              Unlike modern medicine which often focuses on curing disease, Swasth Ayurveda focuses on 
              <strong> prevention</strong>. It involves a holistic approach combining diet, hygiene, yoga, 
              and mental discipline to prevent diseases before they manifest.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{color: brandGreen}}></i> <strong>Dinacharya:</strong> Daily health routines</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{color: brandGreen}}></i> <strong>Ritucharya:</strong> Seasonal lifestyle adaptations</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{color: brandGreen}}></i> <strong>Sadvritta:</strong> Code of righteous conduct</li>
            </ul>
          </div>
          <div className="col-lg-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             <img 
                src="https://images.unsplash.com/photo-1544367563-12123d8965cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Healthy Lifestyle" 
                className="img-fluid rounded-4 shadow-lg" 
              />
          </div>
        </div>
      </section>

      {/* ================= NEW: BENEFITS GRID ================= */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
             <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Why Choose It?</h5>
             <h2 className="fw-bold">Benefits of Swasth Ayurveda</h2>
          </div>
          <div className="row g-4">
            {benefits.map((item, index) => (
               <div className="col-lg-3 col-md-6" key={index}>
                  <div className="card border-0 shadow-sm h-100 p-4 text-center hover-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                     <div className="mb-3 rounded-circle d-inline-flex align-items-center justify-content-center" 
                        style={{ width: '70px', height: '70px', backgroundColor: '#eafbe7', color: brandGreen }}>
                        <i className={`bi ${item.icon} fs-2`}></i>
                     </div>
                     <h5 className="fw-bold">{item.title}</h5>
                     <p className="text-muted small">{item.desc}</p>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PILLARS (VIDEO STYLE CARDS) ================= */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Our Approach</h5>
            <h2 className="fw-bold display-5">Core Pillars of Health</h2>
          </div>
          
          <div className="row g-4">
            {pillars.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-box h-100 animate-slide-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
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
                    <h3 className="fw-bold mb-1">{item.title}</h3>
                    <p className="text-muted small fw-bold mb-3 text-uppercase">{item.subtitle}</p>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEW: DAILY ROUTINE TIMELINE ================= */}
      <section className="py-5 bg-light">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-5 mb-4 mb-lg-0">
                  <h2 className="fw-bold display-5 mb-3">Ideal Daily Routine</h2>
                  <p className="text-secondary mb-4">A sample Dinacharya plan to kickstart your day with energy and balance.</p>
                  <Link to="/appointment" className="btn btn-brand rounded-pill px-4">Get Your Personal Plan</Link>
               </div>
               <div className="col-lg-7">
                  <div className="row g-3">
                     {routineSteps.map((step, index) => (
                        <div className="col-md-6" key={index}>
                           <div className="bg-white p-3 rounded-3 shadow-sm d-flex align-items-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                              <div className="fw-bold fs-4 me-3" style={{ color: brandGreen }}>{step.time}</div>
                              <div>
                                 <h6 className="fw-bold mb-0">{step.title}</h6>
                                 <small className="text-muted">{step.desc}</small>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

<section className="py-5">
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Common Queries</h5>
               <h2 className="fw-bold">Frequently Asked Questions</h2>
            </div>
            
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="accordion shadow-sm" id="faqAccordion">
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
                           <div 
                              className={`accordion-collapse collapse ${openFaq === index ? 'show' : ''}`}
                           >
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
      {/* ================= CTA SECTION ================= */}
      <section className="py-5 text-white text-center" 
        style={{ 
          backgroundColor: brandGreen, 
          background: `linear-gradient(${brandGreen}, #4da040)` 
        }}>
        <div className="container py-4 animate-slide-up">
          <h2 className="fw-bold display-5 mb-3">Start Your Journey to Perfect Health</h2>
          <p className="lead mb-4 opacity-75">Consult our experts to design your personalized Swasthya plan.</p>
          <Link to="/appointment" className="btn btn-dark btn-lg rounded-pill px-5 py-3 shadow">
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SwasthAyurveda;