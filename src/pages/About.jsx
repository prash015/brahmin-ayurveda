import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

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
    { year: '2010', title: 'The Beginning', desc: 'Founded by Vaidya Sharma with a small 2-bed clinic in Pune.' },
    { year: '2015', title: 'Expansion', desc: 'Expanded to a 20-bed hospital with full Panchkarma facilities.' },
    { year: '2020', title: 'Excellence Award', desc: 'Recognized as the "Best Ayurvedic Center" in Maharashtra.' },
    { year: '2025', title: 'Global Reach', desc: 'Launched online consultations and shipping of herbal medicines.' }
  ];

  // Facilities Data
  const facilities = [
    { title: 'Herbal Pharmacy', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'In-house manufacturing of fresh medicines.' },
    { title: 'Yoga Hall', img: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Spacious hall for daily therapeutic yoga.' },
    { title: 'Panchkarma Theatre', img: 'https://images.unsplash.com/photo-1519823551278-64ac927accc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Hygienic, traditional therapy rooms.' },
    { title: 'Organic Canteen', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Sattvic food cooked as per dietary norms.' }
  ];

  // Team Data
  const team = [
    { name: 'Dr. Rajesh Sharma', role: 'Medical Director', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Dr. Anjali Verma', role: 'Senior Consultant', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Mr. Amit Deshmukh', role: 'Hospital Administrator', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
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

      {/* ================= FOUNDER'S MESSAGE ================= */}
      <section className="container my-5 py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0 animate-slide-up">
            <div className="position-relative">
               <img 
                 src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Founder" 
                 className="img-fluid rounded-4 shadow-lg"
               />
               <div className="bg-white p-3 shadow position-absolute bottom-0 start-0 m-4 rounded-3 d-none d-md-block">
                  <h5 className="fw-bold mb-0" style={{color: brandGreen}}>Dr. Rajesh Sharma</h5>
                  <small>Founder & Chief Physician</small>
               </div>
            </div>
          </div>
          <div className="col-lg-7 ps-lg-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Founder's Message</h5>
             <h2 className="fw-bold display-5 mb-4">Healing comes from Nature</h2>
             <figure>
               <blockquote className="blockquote">
                 <p className="fs-5 text-muted fst-italic">
                   "Our goal was never just to build a hospital. It was to build a sanctuary where people could find hope when modern medicine gave up. Ayurveda is not just a treatment; it is a way of life."
                 </p>
               </blockquote>
               <figcaption className="blockquote-footer mt-2">
                 Vaidya Rajesh Sharma, <cite title="Source Title">B.A.M.S, MD (Ayurveda)</cite>
               </figcaption>
             </figure>
             <p className="text-secondary mt-4">
                Established in 2010, Brahmi Ayurveda has grown from a humble clinic to a multi-specialty center, 
                blending traditional knowledge with modern diagnostic tools.
             </p>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" style={{height: '50px', opacity: 0.6}} />
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
                        <div className="mb-4 rounded-circle d-inline-flex align-items-center justify-content-center" 
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

      {/* ================= NEW: WHY CHOOSE US ================= */}
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
                        <h5 className="fw-bold">Authentic Kerala Therapy</h5>
                        <p className="text-muted small">Our therapists are trained in the traditional Keraliya Panchkarma methods.</p>
                     </div>
                  </div>
                  <div className="d-flex mb-4">
                     <div className="me-3"><i className="bi bi-check-circle-fill fs-4" style={{ color: brandGreen }}></i></div>
                     <div>
                        <h5 className="fw-bold">Freshly Prepared Medicines</h5>
                        <p className="text-muted small">We manufacture our own Kashayams and Oils to ensure 100% purity.</p>
                     </div>
                  </div>
                  <div className="d-flex">
                     <div className="me-3"><i className="bi bi-check-circle-fill fs-4" style={{ color: brandGreen }}></i></div>
                     <div>
                        <h5 className="fw-bold">24/7 Residential Care</h5>
                        <p className="text-muted small">Round-the-clock observation by doctors for In-Patient (IPD) cases.</p>
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

      {/* ================= NEW: OUR FACILITIES ================= */}
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

      {/* ================= NEW: LEADERSHIP TEAM ================= */}
      <section className="py-5 bg-light">
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Leadership</h5>
               <h2 className="fw-bold display-5">Meet Our Directors</h2>
            </div>
            <div className="row justify-content-center g-4">
               {team.map((member, index) => (
                  <div className="col-md-4 col-lg-3" key={index}>
                     <div className="card border-0 shadow-sm h-100 text-center p-4 hover-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <img src={member.img} alt={member.name} className="rounded-circle mb-3 mx-auto shadow-sm" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                        <h5 className="fw-bold mb-1" style={{ color: brandGreen }}>{member.name}</h5>
                        <p className="text-muted small fw-bold mb-0 text-uppercase">{member.role}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= CERTIFICATIONS & AWARDS ================= */}
      <section className="py-5 bg-dark text-white text-center">
         <div className="container">
            <h2 className="fw-bold mb-5">Accreditations & Awards</h2>
            <div className="row justify-content-center gap-5 align-items-center opacity-75">
               <div className="col-md-2 col-6"><h4 className="fw-bold border p-3 rounded">ISO 9001</h4></div>
               <div className="col-md-2 col-6"><h4 className="fw-bold border p-3 rounded">NABH</h4></div>
               <div className="col-md-2 col-6"><h4 className="fw-bold border p-3 rounded">AYUSH</h4></div>
               <div className="col-md-2 col-6"><h4 className="fw-bold border p-3 rounded">GMP</h4></div>
            </div>
         </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-5 text-center">
         <div className="container py-4">
            <h2 className="fw-bold mb-3">Ready to Experience Authentic Ayurveda?</h2>
            <p className="text-muted mb-4">Visit our center or book a consultation online.</p>
            <Link to="/contact" className="btn btn-brand btn-lg rounded-pill px-5 shadow">Get in Touch</Link>
         </div>
      </section>
    </div>
  );
};

export default About;