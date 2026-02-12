import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Home = () => {
  const brandGreen = '#67be57'; 

 // 1. FLOATING CARDS (All Green + Replaced 'Delivery' with 'Holistic Care')
  const infoCards = [
    { 
      icon: 'bi-headset', 
      title: 'Consultation', 
      desc: 'Expert Ayurvedic advice.', 
      bg: brandGreen, // Now Green
      text: 'white' 
    },
    { 
      icon: 'bi-heart-pulse', // Changed Icon
      title: 'Holistic Care', // Changed Title
      desc: 'Treating the root cause.', 
      bg: brandGreen, 
      text: 'white' 
    }, 
    { 
      icon: 'bi-capsule', 
      title: 'Pharmacy', 
      desc: 'Authentic herbs & oils.', 
      bg: brandGreen, // Now Green
      text: 'white' 
    },
  ];

  // 2. SERVICES DATA
  const services = [
    { title: 'Panchkarma', icon: 'bi-droplet-fill', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', desc: 'Deep detoxification therapies.', link: '/panchkarma' },
    { title: 'Nadi Pariksha', icon: 'bi-activity', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80', desc: 'Pulse diagnosis experts.', link: '/doctors' },
    { title: 'Garba Sanskar', icon: 'bi-heart-pulse', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80', desc: 'Ayurvedic prenatal care.', link: '/swasth-ayurveda' },
    { title: 'Skin Care', icon: 'bi-stars', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80', desc: 'Herbal treatments for skin.', link: '/swasth-ayurveda' },
    { title: 'Weight Mgmt', icon: 'bi-speedometer2', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80', desc: 'Natural weight loss programs.', link: '/swasth-ayurveda' },
    { title: 'Hair Therapy', icon: 'bi-scissors', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80', desc: 'Ayurvedic hair regrowth.', link: '/swasth-ayurveda' },
  ];

  // 3. BLOG DATA
  const blogs = [
    { date: '12 Jan 2026', title: 'Importance of Panchkarma in Modern Life', img: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { date: '15 Jan 2026', title: '5 Herbs for Better Immunity', img: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { date: '20 Jan 2026', title: 'Yoga Asanas for Mental Peace', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <header className="position-relative d-flex align-items-center"
        style={{
          background: `linear-gradient(rgba(235, 247, 235, 0.9), rgba(235, 247, 235, 0.9)), url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          minHeight: '85vh', 
          marginTop: '-10px'
        }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content - Slide Up Animation */}
            <div className="col-lg-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h5 className="text-uppercase fw-bold mb-3" style={{ color: brandGreen, letterSpacing: '2px' }}>
                The Home of Hope
              </h5>
              <h1 className="display-3 fw-bold text-dark mb-4">
                Your Health is Our <span style={{ color: brandGreen }}>Top Priority</span>
              </h1>
              <p className="lead text-secondary mb-5">
                Experience the ancient wisdom of Ayurveda combined with modern care. 
                Get your appointment online and stay safe.
              </p>
              
              <div className="d-flex gap-3">
                <Link to="/appointment" className="btn btn-brand btn-lg rounded-pill px-5 py-3 shadow">
                  Make Appointment
                </Link>
                <Link to="/about" className="btn btn-outline-dark btn-lg rounded-pill px-5 py-3 shadow">
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Right Image - Replaced with a Working Unsplash Link */}
            <div className="col-lg-6 d-none d-lg-block text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor" 
                className="img-fluid rounded-circle shadow-lg" // Added rounded-circle to make it look clean like a cutout
                style={{ maxHeight: '500px', width: '500px', objectFit: 'cover', border: `8px solid white` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ================= FLOATING INFO CARDS (Animated + Staggered Delay) ================= */}
      {/* Added 'floating-section' class and removed inline marginTop so CSS handles it */}
<section className="container floating-section" style={{ position: 'relative', zIndex: '10', marginTop: '-100px' }}>
        <div className="row g-4">
          {infoCards.map((card, index) => (
            <div className="col-md-4" key={index}>
              {/* ANIMATION APPLIED HERE: with increasing delay (0.2s, 0.4s, 0.6s) */}
              <div 
                className="card info-card p-4 text-center shadow-sm h-100 animate-slide-up" 
                style={{ 
                  backgroundColor: card.bg, 
                  color: card.text === 'white' ? 'white' : '#2c3e50',
                  animationDelay: `${0.2 * (index + 1)}s` 
                }}>
                <i className={`bi ${card.icon} display-3 mb-3`}></i>
                <h3 className="fw-bold">{card.title}</h3>
                <p className={card.text === 'white' ? 'text-white-50' : 'text-muted'} style={{ fontSize: '1.1rem' }}>
                    {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                className="img-fluid rounded-4 shadow-lg" 
                alt="Hospital Building" 
              />
            </div>
            
            <div className="col-lg-6 ps-lg-5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>About Us</h5>
              <h2 className="fw-bold display-5 mb-4">We Are Your Trusted Friend</h2>
              <p className="text-secondary lead mb-4">
                Brahmi Ayurveda is a trusted name in holistic medical services. We are always by your side, 
                treating the root cause of ailments rather than just symptoms.
              </p>

              <div className="row mb-4">
                 <div className="col-4">
                    <h2 className="fw-bold display-6" style={{ color: brandGreen }}>15+</h2>
                    <p className="text-muted small fw-bold">YEARS EXPERIENCE</p>
                 </div>
                 <div className="col-4">
                    <h2 className="fw-bold display-6" style={{ color: brandGreen }}>5k+</h2>
                    <p className="text-muted small fw-bold">HAPPY PATIENTS</p>
                 </div>
                 <div className="col-4">
                    <h2 className="fw-bold display-6" style={{ color: brandGreen }}>10+</h2>
                    <p className="text-muted small fw-bold">EXPERT DOCTORS</p>
                 </div>
              </div>

              <div className="bg-light p-4 rounded-4 border-start border-5 mb-4" style={{ borderColor: brandGreen }}>
                <h5 className="fw-bold mb-3"><i className="bi bi-clock me-2"></i> Opening Hours</h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between mb-2 border-bottom pb-2">
                    <span>Mon - Fri</span> <span className="fw-bold" style={{ color: brandGreen }}>08:00 AM - 09:00 PM</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Sunday</span> <span className="text-muted">Closed</span>
                  </li>
                </ul>
              </div>

              <Link to="/about" className="btn btn-brand rounded-pill px-5 py-3 shadow">Explore More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Our Services</h5>
            <h2 className="fw-bold display-5">Services We Provide</h2>
          </div>

          <div className="row g-4">
            {services.map((srv, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-box h-100">
                  <div className="service-img-container">
                    <img src={srv.img} alt={srv.title} className="service-img" />
                    <div className="service-overlay">
                      <i className={`bi ${srv.icon}`}></i>
                    </div>
                  </div>
                  
                  <div className="service-content">
                    <div className="service-icon-static">
                      <i className={`bi ${srv.icon}`}></i>
                    </div>
                    <h3 className="fw-bold mb-3">{srv.title}</h3>
                    <p className="text-muted mb-4">{srv.desc}</p>
                    <Link to={srv.link} className="text-decoration-none fw-bold" style={{ color: brandGreen }}>
                      Read More <i className="bi bi-arrow-right small"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT SECTION ================= */}
      <section className="py-5 text-white" 
        style={{ 
          backgroundColor: brandGreen, 
          background: `linear-gradient(${brandGreen}, #4da040)` 
        }}>
        <div className="container py-5">
          <div className="row align-items-center">
             <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="fw-bold display-4 mb-3">Get Your Appointment</h2>
                <p className="lead mb-4 opacity-75">Online booking helps you save waiting time and stay safe. 24/7 Support available.</p>
                <ul className="list-unstyled fs-5">
                   <li className="mb-2"><i className="bi bi-check-circle-fill me-2"></i> 24/7 Online Support</li>
                   <li className="mb-2"><i className="bi bi-check-circle-fill me-2"></i> Expert Ayurvedic Doctors</li>
                   <li className="mb-2"><i className="bi bi-check-circle-fill me-2"></i> 100% Herbal Medicines</li>
                </ul>
             </div>
             <div className="col-lg-6">
                <div className="bg-white p-5 rounded-4 shadow text-dark">
                   <form>
                      <div className="row g-3">
                         <div className="col-6"><input type="text" className="form-control p-3" placeholder="Name" /></div>
                         <div className="col-6"><input type="email" className="form-control p-3" placeholder="Email" /></div>
                         <div className="col-12"><input type="tel" className="form-control p-3" placeholder="Phone" /></div>
                         <div className="col-12"><textarea className="form-control p-3" rows="3" placeholder="Describe your problem"></textarea></div>
                         <div className="col-12">
                            <button className="btn btn-dark w-100 fw-bold py-3 rounded-pill">Book Appointment Now</button>
                         </div>
                      </div>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </section>

       {/* ================= BLOG SECTION ================= */}
       <section className="container py-5 my-5">
         <div className="text-center mb-5">
            <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Our Blog</h5>
            <h2 className="fw-bold display-5">Latest News & Updates</h2>
         </div>
         
         <div className="row g-4">
            {blogs.map((item, index) => (
               <div className="col-md-4" key={index}>
                  <div className="card border-0 shadow-sm h-100 hover-card">
                     <img src={item.img} className="card-img-top" alt={item.title} style={{height: '250px', objectFit: 'cover'}} />
                     <div className="card-body p-4">
                        <small className="text-muted text-uppercase fw-bold">{item.date}</small>
                        <h4 className="fw-bold mt-2 mb-3">{item.title}</h4>
                        <a href="#" className="fw-bold text-decoration-none" style={{ color: brandGreen }}>Read Article</a>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
      {/* ================= NEWSLETTER ================= */}
      <section className="py-5 bg-dark text-white text-center">
         <div className="container">
            <h2 className="fw-bold">Subscribe to Our Newsletter</h2>
            <p className="text-white-50 mb-4">Get the latest health tips and offers directly to your inbox.</p>
            <div className="row justify-content-center">
               <div className="col-md-6">
                  <div className="input-group">
                     <input type="email" className="form-control p-3" placeholder="Enter your email" />
                     <button className="btn fw-bold px-4" style={{ backgroundColor: brandGreen, color: 'white' }}>Subscribe</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;