import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import YogaHall from "../assets/images/YogaHall.png";
import PanchkarmaTheatre from "../assets/images/PanchkarmaTheatre.png";
import founder1 from "../assets/images/VdPriyankaHDodiya.png";
import founder2 from "../assets/images/VdAeshaBDesai.jpeg";

const About = () => {
  const brandGreen = '#67be57'; 

  // Mission & Vision Data
  const values = [
    { icon: 'bi-eye', title: 'Our Vision', desc: 'To make authentic Ayurveda accessible to the entire world as the first choice of treatment.' },
    { icon: 'bi-bullseye', title: 'Our Mission', desc: 'To heal patients through the purest form of Panchkarma, treating the root cause of disease.' },
    { icon: 'bi-heart', title: 'Our Values', desc: 'Compassion, Integrity, and strict adherence to the ancient Ayurvedic scriptures (Samhitas).' }
  ];

  // Timeline Data
  const history = [
    { year: '2013', title: 'The Beginning', desc: 'Founded by Dr. Priyanka H. Dodiya (Verma) with a vision to provide authentic Ayurvedic care.' },
    { year: '2018', title: 'Partnership', desc: 'Dr. Aesha Desai joined as co-founder, strengthening our Panchakarma expertise.' },
    { year: '2020', title: 'Expansion', desc: 'Established comprehensive facilities including state-of-the-art Panchakarma theatre.' },
    { year: '2026', title: 'Excellence', desc: 'Recognized for quality-controlled formulations and evidence-based Ayurveda practice.' }
  ];

  // Facilities Data
  const facilities = [
    { title: 'Herbal Pharmacy', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Quality-controlled Ayurvedic formulations.' },
    { title: 'Yoga Hall', img: YogaHall, desc: 'Spacious hall for therapeutic yoga and wellness.' },
    { title: 'Panchkarma Theatre', img: PanchkarmaTheatre, desc: 'Classical Panchakarma therapy rooms.' },
    { title: 'Consultation Rooms', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Private consultation spaces for personalized care.' }
  ];

  // Founders Data
  const founders = [
    { 
      name: 'Vd. Priyanka H. Dodiya (Verma)', 
      role: 'M.D. (Ayurveda), Founder & Chief Consultant', 
      img: founder1,
      experience: '12 years of clinical practice',
      specialties: 'Liver disorders, Lifestyle disorders, Digestive disorders, Gynaecological disorders, Cosmetic & Aesthetic conditions'
    },
    { 
      name: 'Dr. Aesha Desai', 
      role: 'B.A.M.S., Co-Founder & Panchakarma Specialist', 
      img: founder2,
      experience: 'Expert in classical Ayurvedic principles',
      specialties: 'Chronic lifestyle disorders, Joint & muscular conditions, Digestive problems, Stress disorders, Women\'s health'
    }
  ];

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <header className="position-relative d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px'
        }}>
        <div className="container text-center text-white animate-slide-up">
          <h5 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px', color: brandGreen }}>
            Our Legacy
          </h5>
          <h1 className="display-3 fw-bold mb-3">About Brahmi Ayurveda</h1>
          <p className="lead fs-4 mb-4">Reviving the Ancient Wisdom of Healing</p>
        </div>
      </header>

      {/* ================= FOUNDERS' SECTION ================= */}
      <section className="container my-5 py-5">
        <div className="text-center mb-5">
          <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Leadership</h5>
          <h2 className="fw-bold display-5">Meet Our Founders</h2>
          <p className="text-muted">Dedicated to restoring balance and promoting holistic wellness</p>
        </div>

        {/* Founder 1: Dr. Priyanka */}
        <div className="row align-items-center mb-5 pb-5">
          <div className="col-lg-5 mb-4 mb-lg-0 animate-slide-up">
            <div className="position-relative">
               <img 
                 src={founders[0].img}
                 alt={founders[0].name}
                 className="img-fluid rounded-4 shadow-lg"
               />
               <div className="bg-white p-3 shadow position-absolute bottom-0 start-0 m-4 rounded-3">
                  <h5 className="fw-bold mb-0" style={{color: brandGreen}}>{founders[0].name}</h5>
                  <small>{founders[0].role}</small>
               </div>
            </div>
          </div>
          <div className="col-lg-7 ps-lg-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             <h3 className="fw-bold mb-3" style={{ color: brandGreen }}>{founders[0].name}</h3>
             <h5 className="text-muted mb-4">{founders[0].role}</h5>
             <p className="text-secondary mb-3">
               We are proud to introduce <strong>Vd. Priyanka H. Dodiya (Verma), M.D. (Ayurveda)</strong> — Ayurveda Consultant and Founder of Brahmi Ayurveda & Panchakarma Hospital. She aims to restore balance of Doshas, strengthen Agni and promote long-term wellness with Shodhana (Panchakarma) and Shamana Chikitsa, lifestyle modification, and dietary counselling.
             </p>
             <p className="text-secondary mb-4">
               With her <strong>12 years of clinical practice</strong> and institutional leadership, she focuses on classical Panchakarma therapies, quality-controlled Ayurvedic formulations and evidence-based Ayurveda.
             </p>
             <div className="bg-light p-4 rounded-3 border-start border-4" style={{ borderColor: brandGreen }}>
               <h6 className="fw-bold mb-2" style={{ color: brandGreen }}>Areas of Expertise:</h6>
               <ul className="mb-0 text-secondary">
                 <li>Liver disorders</li>
                 <li>Lifestyle disorders</li>
                 <li>Digestive disorders</li>
                 <li>Gynaecological disorders</li>
                 <li>Cosmetic & Aesthetic conditions (Hair fall, dandruff, Acne, pimples, Hyperpigmentation, melasma)</li>
               </ul>
             </div>
          </div>
        </div>

        {/* Founder 2: Dr. Aesha */}
        <div className="row align-items-center flex-lg-row-reverse">
          <div className="col-lg-5 mb-4 mb-lg-0 animate-slide-up">
            <div className="position-relative">
               <img 
                 src={founders[1].img}
                 alt={founders[1].name}
                 className="img-fluid rounded-4 shadow-lg"
               />
               <div className="bg-white p-3 shadow position-absolute bottom-0 end-0 m-4 rounded-3">
                  <h5 className="fw-bold mb-0" style={{color: brandGreen}}>{founders[1].name}</h5>
                  <small>{founders[1].role}</small>
               </div>
            </div>
          </div>
          <div className="col-lg-7 pe-lg-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             <h3 className="fw-bold mb-3" style={{ color: brandGreen }}>{founders[1].name}</h3>
             <h5 className="text-muted mb-4">{founders[1].role}</h5>
             <p className="text-secondary mb-3">
               We are proud to introduce <strong>Dr. Aesha Desai (B.A.M.S.)</strong>, Ayurvedic Consultant, Panchakarma specialist and co-founder of Brahmi Ayurveda & Panchakarma Hospital, Vadodara, possessing excellent knowledge of Ayurvedic principles and its clinical application.
             </p>
             <p className="text-secondary mb-4">
               She emphasizes ethical practice, root-cause-based treatment for long-term health and wellness with individualized care and expertise in Panchakarma.
             </p>
             <div className="bg-light p-4 rounded-3 border-start border-4" style={{ borderColor: brandGreen }}>
               <h6 className="fw-bold mb-2" style={{ color: brandGreen }}>Areas of Expertise:</h6>
               <ul className="mb-0 text-secondary">
                 <li>Chronic lifestyle disorders</li>
                 <li>Joint and muscular painful conditions</li>
                 <li>Digestive problems</li>
                 <li>Stress related disorders</li>
                 <li>Women's health concerns</li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION, VISION, VALUES ================= */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
         <div className="container">
            <div className="row g-4">
               {values.map((item, index) => (
                  <div className="col-md-4" key={index}>
                     <div className="card border-0 shadow-sm h-100 p-4 text-center hover-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="mb-4 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto" 
                           style={{ width: '80px', height: '80px', backgroundColor: brandGreen, color: 'white' }}>
                           <i className={`bi ${item.icon} display-4`}></i>
                        </div>
                        <h4 className="fw-bold mb-3">{item.title}</h4>
                        <p className="text-muted">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-5">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 order-2 order-lg-1 animate-slide-up">
                  <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Why Brahmi?</h5>
                  <h2 className="fw-bold display-5 mb-4">The Brahmi Difference</h2>
                  <p className="text-muted mb-4">We don't just treat symptoms; we treat the person. Here is what makes us different.</p>
                  
                  <div className="d-flex mb-4">
                     <div className="me-3"><i className="bi bi-check-circle-fill fs-4" style={{ color: brandGreen }}></i></div>
                     <div>
                        <h5 className="fw-bold">Classical Panchakarma Therapies</h5>
                        <p className="text-muted small">Authentic Shodhana treatments following traditional Ayurvedic principles.</p>
                     </div>
                  </div>
                  <div className="d-flex mb-4">
                     <div className="me-3"><i className="bi bi-check-circle-fill fs-4" style={{ color: brandGreen }}></i></div>
                     <div>
                        <h5 className="fw-bold">Quality-Controlled Formulations</h5>
                        <p className="text-muted small">Evidence-based Ayurveda with carefully prepared medicines.</p>
                     </div>
                  </div>
                  <div className="d-flex mb-4">
                     <div className="me-3"><i className="bi bi-check-circle-fill fs-4" style={{ color: brandGreen }}></i></div>
                     <div>
                        <h5 className="fw-bold">Root-Cause Based Treatment</h5>
                        <p className="text-muted small">Individualized care focusing on long-term health and wellness.</p>
                     </div>
                  </div>
                  <div className="d-flex">
                     <div className="me-3"><i className="bi bi-check-circle-fill fs-4" style={{ color: brandGreen }}></i></div>
                     <div>
                        <h5 className="fw-bold">Experienced Leadership</h5>
                        <p className="text-muted small">Combined expertise of 12+ years in clinical practice and Panchakarma.</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ayurveda Herbs" className="img-fluid rounded-4 shadow-lg" />
               </div>
            </div>
         </div>
      </section>

      {/* ================= OUR JOURNEY (TIMELINE) ================= */}
      <section className="py-5 bg-light">
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Our History</h5>
               <h2 className="fw-bold display-5">A Journey of Healing</h2>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="row g-4">
                     {history.map((item, index) => (
                        <div className="col-md-6" key={index}>
                           <div className="d-flex animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                              <div className="me-4 text-end" style={{ minWidth: '80px' }}>
                                 <h2 className="fw-bold" style={{ color: brandGreen, opacity: 0.5 }}>{item.year}</h2>
                              </div>
                              <div className="border-start border-3 ps-4 pb-4" style={{ borderColor: brandGreen }}>
                                 <h4 className="fw-bold">{item.title}</h4>
                                 <p className="text-muted">{item.desc}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ================= OUR FACILITIES ================= */}
      <section className="py-5">
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Infrastructure</h5>
               <h2 className="fw-bold display-5">Our Facilities</h2>
            </div>
            <div className="row g-4">
               {facilities.map((fac, index) => (
                  <div className="col-md-6 col-lg-3" key={index}>
                     <div className="card border-0 shadow-sm h-100 overflow-hidden hover-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <img src={fac.img} alt={fac.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body text-center p-4">
                           <h5 className="fw-bold mb-2">{fac.title}</h5>
                           <p className="text-muted small mb-0">{fac.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= CERTIFICATIONS & AWARDS ================= */}
      <section className="py-5 bg-dark text-white text-center">
         <div className="container">
            <h2 className="fw-bold mb-5">Accreditations & Recognition</h2>
            <div className="row justify-content-center gap-5 align-items-center opacity-75">
               <div className="col-md-2 col-6"><h4 className="fw-bold border p-3 rounded">AYUSH</h4></div>
               <div className="col-md-2 col-6"><h4 className="fw-bold border p-3 rounded">M.D. Certified</h4></div>
               <div className="col-md-2 col-6"><h4 className="fw-bold border p-3 rounded">B.A.M.S.</h4></div>
               <div className="col-md-2 col-6"><h4 className="fw-bold border p-3 rounded">12+ Years</h4></div>
            </div>
         </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-5 text-center">
         <div className="container py-4">
            <h2 className="fw-bold mb-3">Ready to Experience Authentic Ayurveda?</h2>
            <p className="text-muted mb-4">Visit our center or book a consultation with our expert doctors.</p>
            <Link to="/contact" className="btn btn-brand btn-lg rounded-pill px-5 shadow">Get in Touch</Link>
         </div>
      </section>
    </div>
  );
};

export default About;