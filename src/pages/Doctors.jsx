import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Doctors = () => {
  const brandGreen = '#67be57'; 

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (index) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  // 1. DOCTORS DATA
  const doctorsList = [
    {
      name: "Dr. Rajesh Sharma",
      degree: "B.A.M.S, M.D. (Panchkarma)",
      specialty: "Chief Physician",
      exp: "20+ Years Exp",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      desc: "Specialist in chronic disorders and Nadi Pariksha (Pulse Diagnosis)."
    },
    {
      name: "Dr. Anjali Verma",
      degree: "B.A.M.S, Ph.D. (Ayurveda)",
      specialty: "Women's Health",
      exp: "15+ Years Exp",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      desc: "Expert in Garba Sanskar, PCOD, and infertility treatments."
    },
    {
      name: "Dr. Vikram Singh",
      degree: "B.A.M.S, Yoga Specialist",
      specialty: "Lifestyle & Diet",
      exp: "12+ Years Exp",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      desc: "Focuses on therapeutic yoga and personalized diet plans."
    },
    {
      name: "Dr. Meera Iyer",
      degree: "B.A.M.S, Child Care",
      specialty: "Pediatric Ayurveda",
      exp: "10+ Years Exp",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      desc: "Gentle holistic care for immunity and growth in children."
    }
  ];

  // 2. PROCESS STEPS
  const process = [
    { step: '01', title: 'Nadi Pariksha', desc: 'Pulse diagnosis to detect root cause.' },
    { step: '02', title: 'Prakriti Analysis', desc: 'Understanding your unique body type.' },
    { step: '03', title: 'Custom Plan', desc: 'Personalized medicines & therapy.' },
    { step: '04', title: 'Follow Up', desc: 'Regular tracking of health progress.' }
  ];

  // 3. FAQ DATA
  const faqs = [
    { question: "How can I book a specific doctor?", answer: "You can select your preferred doctor while booking an appointment online or request them at the reception." },
    { question: "Do you offer online video consultations?", answer: "Yes, our senior doctors are available for video consultations for patients who cannot visit the center." },
    { question: "What should I bring for my first visit?", answer: "Please bring your previous medical reports, a list of current medications, and a valid ID proof." }
  ];

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <header className="position-relative d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px'
        }}>
        <div className="container text-center text-white animate-slide-up">
          <h5 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px', color: brandGreen }}>
            Expert Care
          </h5>
          <h1 className="display-3 fw-bold mb-3">Meet Our Vaidyas</h1>
          <p className="lead fs-4 mb-4">Dedicated to restoring your natural balance.</p>
        </div>
      </header>

      {/* ================= INTRO & STATS ================= */}
      <section className="container my-5 py-5">
         <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 animate-slide-up">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Our Expertise</h5>
               <h2 className="fw-bold display-5 mb-4">Experience Matters</h2>
               <p className="lead text-secondary">
                  Our team consists of highly qualified doctors (Vaidyas) who have dedicated their lives to the study and practice of Ayurveda.
               </p>
               <p className="text-muted mb-4">
                  We combine traditional knowledge from the Samhitas with modern diagnostic tools to provide a comprehensive treatment plan.
               </p>
               <div className="d-flex gap-4">
                  <div className="text-center px-3 py-2 border rounded-3 bg-light">
                     <h3 className="fw-bold mb-0" style={{ color: brandGreen }}>20+</h3>
                     <small className="text-muted fw-bold">Specialists</small>
                  </div>
                  <div className="text-center px-3 py-2 border rounded-3 bg-light">
                     <h3 className="fw-bold mb-0" style={{ color: brandGreen }}>50k+</h3>
                     <small className="text-muted fw-bold">Consultations</small>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
               <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Doctors Team" className="img-fluid rounded-4 shadow-lg" />
            </div>
         </div>
      </section>

      {/* ================= DOCTORS GRID ================= */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>The Team</h5>
            <h2 className="fw-bold display-5">Our Specialists</h2>
          </div>

          <div className="row g-4">
            {doctorsList.map((doc, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-sm text-center hover-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="card-body p-4 d-flex flex-column align-items-center">
                    <img 
                      src={doc.img} 
                      alt={doc.name} 
                      className="rounded-circle mb-3 shadow-sm border border-3 border-white"
                      style={{ width: '130px', height: '130px', objectFit: 'cover' }} 
                    />
                    <h5 className="fw-bold mb-1" style={{ color: brandGreen }}>{doc.name}</h5>
                    <span className="badge bg-dark mb-2">{doc.specialty}</span>
                    <p className="text-dark small fw-bold mb-1">{doc.degree}</p>
                    <p className="text-muted small mb-3">{doc.desc}</p>
                    <div className="mt-auto w-100">
                       <Link to="/appointment" className="btn btn-outline-success rounded-pill w-100 btn-sm">Book Appointment</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEW: OUR PROCESS ================= */}
      <section className="py-5 bg-dark text-white">
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>How We Treat</h5>
               <h2 className="fw-bold display-5">The Diagnosis Process</h2>
            </div>
            <div className="row g-4">
               {process.map((item, index) => (
                  <div className="col-md-3" key={index}>
                     <div className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="mb-3 rounded-circle d-inline-flex align-items-center justify-content-center border border-2 border-white" 
                             style={{ width: '80px', height: '80px', color: brandGreen, backgroundColor: 'rgba(255,255,255,0.1)' }}>
                           <h2 className="mb-0 fw-bold">{item.step}</h2>
                        </div>
                        <h4 className="fw-bold mt-2">{item.title}</h4>
                        <p className="text-white-50">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-5 bg-light">
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Information</h5>
               <h2 className="fw-bold">Consultation FAQs</h2>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="accordion shadow-sm" id="docFaq">
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

      {/* ================= NEW: CAREERS / JOIN US ================= */}
      <section className="py-5">
         <div className="container">
            <div className="p-5 rounded-4 text-center text-white shadow-lg animate-slide-up"
               style={{ 
                  background: `linear-gradient(${brandGreen}, #4da040)` 
               }}>
               <h2 className="fw-bold display-5 mb-3">Join Our Medical Team</h2>
               <p className="lead mb-4 opacity-75">Are you an Ayurveda practitioner passionate about holistic healing? We are hiring.</p>
               <div className="d-flex justify-content-center gap-3">
                  <Link to="/contact" className="btn btn-light rounded-pill px-5 py-3 fw-bold text-success">Apply Now</Link>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Doctors;