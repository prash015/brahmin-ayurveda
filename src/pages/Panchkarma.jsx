import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Panchkarma = () => {
  const brandGreen = '#67be57'; 
  
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // 1. THE 5 THERAPIES DATA
  const therapies = [
    { 
      title: 'Vamana', 
      subtitle: 'Therapeutic Emesis',
      icon: 'bi-moisture', 
      img: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
      desc: 'Elimination of toxins through the mouth. Best for Kapha disorders like asthma, allergies, and skin issues.' 
    },
    { 
      title: 'Virechana', 
      subtitle: 'Purgation Therapy',
      icon: 'bi-arrow-down-circle', 
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
      desc: 'Removal of toxins through the lower GI tract. Ideal for Pitta disorders like acidity, liver issues, and rashes.' 
    },
    { 
      title: 'Basti', 
      subtitle: 'Enema Therapy',
      icon: 'bi-droplet-half', 
      img: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
      desc: 'The mother of all treatments. Herbal enemas to balance Vata, treating arthritis, constipation, and neurological issues.' 
    },
    { 
      title: 'Nasya', 
      subtitle: 'Nasal Administration',
      icon: 'bi-flower1', 
      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
      desc: 'Instilling herbal oils in the nose to clear the head channel. Effective for migraines, sinusitis, and stress.' 
    },
    { 
      title: 'Raktamokshana', 
      subtitle: 'Bloodletting',
      icon: 'bi-bandaid', 
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
      desc: 'Purification of the blood. Used rarely and carefully for severe skin diseases, eczema, and varicose veins.' 
    }
  ];

  // 2. BENEFITS DATA
  const benefits = [
    { title: 'Detoxification', desc: 'Deep cleanses the body at a cellular level.' },
    { title: 'Rejuvenation', desc: 'Restores tissues and boosts immunity.' },
    { title: 'Balance Doshas', desc: 'Aligns Vata, Pitta, and Kapha energies.' },
    { title: 'Stress Relief', desc: 'Calms the nervous system and improves sleep.' }
  ];

  // 3. FAQ DATA
  const faqs = [
    {
      question: "How long does a Panchkarma treatment take?",
      answer: "A complete cycle can take anywhere from 7 to 21 days, depending on your condition and the doctor's recommendation. Short 3-day detox plans are also available."
    },
    {
      question: "Is it painful?",
      answer: "Not at all. While some procedures like Vamana (vomiting) can be intense, the preparatory massages are very relaxing. The entire process is conducted under strict medical supervision."
    },
    {
      question: "Can I do it at home?",
      answer: "No. Panchkarma requires precise preparation (Oleation/Sudation) and clinical monitoring. It should only be done in a proper Ayurvedic hospital."
    }
  ];

  // 4. INDICATIONS DATA (Who needs it)
  const indications = [
    { icon: 'bi-battery-half', title: 'Chronic Fatigue', desc: 'Feeling tired even after sleep.' },
    { icon: 'bi-exclamation-triangle', title: 'Digestive Issues', desc: 'Constipation, acidity, or bloating.' },
    { icon: 'bi-briefcase', title: 'High Stress', desc: 'Anxiety, insomnia, or mental fog.' },
    { icon: 'bi-activity', title: 'Joint Pain', desc: 'Arthritis, stiffness, or body ache.' }
  ];

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <header className="position-relative d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '550px'
        }}>
        <div className="container text-center text-white animate-slide-up">
          <h5 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px', color: brandGreen }}>
            The Ultimate Detox
          </h5>
          <h1 className="display-3 fw-bold mb-3">Panchkarma Therapy</h1>
          <p className="lead fs-4 mb-4">Reset Your Body, Mind, and Soul</p>
          <Link to="/appointment" className="btn btn-brand btn-lg rounded-pill px-5 py-3 shadow">
            Book Appointment
          </Link>
        </div>
      </header>

      {/* ================= INTRO & 3 STAGES ================= */}
      <section className="container my-5 py-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 animate-slide-up">
            <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>What is Panchkarma?</h5>
            <h2 className="fw-bold display-5 mb-4">Five Actions to Purify the Body</h2>
            <p className="lead text-secondary">
              "Pancha" means Five and "Karma" means Procedures.
            </p>
            <p className="text-muted">
              It is Ayurveda's primary purification and detoxification treatment. 
              Panchkarma does not just treat the disease; it uproots the toxins that cause the disease. 
              The process happens in three strict stages:
            </p>
          </div>
          <div className="col-lg-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             <img src="https://images.unsplash.com/photo-1519823551278-64ac927accc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="img-fluid rounded-4 shadow-lg" alt="Oil Massage" />
          </div>
        </div>

        {/* 3 STAGES CARDS */}
        <div className="row g-4">
           {[
             { step: '01', title: 'Poorva Karma', sub: 'Preparation', desc: 'Preparing the body through Snehana (Oil Massage) and Swedana (Steam) to loosen toxins.' },
             { step: '02', title: 'Pradhana Karma', sub: 'Main Procedure', desc: 'The actual expulsion of toxins using one of the 5 methods (Vamana, Virechana, etc.).', active: true },
             { step: '03', title: 'Paschat Karma', sub: 'Post-Care', desc: 'Restoring digestive fire through a strict diet (Samsarjana Krama) and rest.' }
           ].map((stage, idx) => (
             <div className="col-md-4" key={idx}>
                <div className="p-4 rounded-4 h-100 shadow-sm animate-slide-up" 
                     style={{ 
                       backgroundColor: stage.active ? brandGreen : '#f8f9fa', 
                       color: stage.active ? 'white' : 'black',
                       animationDelay: `${idx * 0.2}s`
                     }}>
                   <div className="display-4 fw-bold mb-3 opacity-50">{stage.step}</div>
                   <h4 className="fw-bold">{stage.title}</h4>
                   <h6 className="text-uppercase mb-3 opacity-75">{stage.sub}</h6>
                   <p className={stage.active ? 'text-white-50' : 'text-muted'}>{stage.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ================= NEW: WHO NEEDS PANCHKARMA? ================= */}
      <section className="py-5 bg-light">
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Indications</h5>
               <h2 className="fw-bold">Is Panchkarma For You?</h2>
               <p className="text-muted">If you experience any of these signs, your body might need detoxification.</p>
            </div>
            <div className="row g-4">
               {indications.map((item, index) => (
                  <div className="col-lg-3 col-md-6" key={index}>
                     <div className="card border-0 shadow-sm h-100 p-4 text-center hover-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="mb-3">
                           <i className={`bi ${item.icon} display-4`} style={{ color: brandGreen }}></i>
                        </div>
                        <h5 className="fw-bold">{item.title}</h5>
                        <p className="text-muted small">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= THE 5 THERAPIES (GRID) ================= */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Our Treatments</h5>
            <h2 className="fw-bold display-5">The Five Pradhana Karmas</h2>
          </div>
          
          <div className="row g-4 justify-content-center">
            {therapies.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-box h-100 animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
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

      {/* ================= NEW: TREATMENT TIMELINE ================= */}
      <section className="py-5 bg-light">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-5 mb-4 mb-lg-0">
                  <h2 className="fw-bold display-5 mb-3">Your Journey to Wellness</h2>
                  <p className="text-secondary mb-4">A typical Panchkarma cycle involves careful planning. Here is what you can expect during your stay with us.</p>
                  <Link to="/appointment" className="btn btn-brand rounded-pill px-4">Consult a Doctor</Link>
               </div>
               <div className="col-lg-7">
                  <ul className="list-group list-group-flush shadow-sm rounded-4 overflow-hidden">
                     <li className="list-group-item p-4 border-0 d-flex align-items-center">
                        <div className="fw-bold fs-2 me-3" style={{ color: brandGreen }}>01</div>
                        <div>
                           <h5 className="fw-bold mb-0">Consultation & Diagnosis</h5>
                           <small className="text-muted">Nadi Pariksha and deciding the course of treatment.</small>
                        </div>
                     </li>
                     <li className="list-group-item p-4 border-0 d-flex align-items-center bg-light">
                        <div className="fw-bold fs-2 me-3" style={{ color: brandGreen }}>2-5</div>
                        <div>
                           <h5 className="fw-bold mb-0">Oleation & Fomentation (Prep)</h5>
                           <small className="text-muted">Internal ghee intake and external oil massages.</small>
                        </div>
                     </li>
                     <li className="list-group-item p-4 border-0 d-flex align-items-center">
                        <div className="fw-bold fs-2 me-3" style={{ color: brandGreen }}>06</div>
                        <div>
                           <h5 className="fw-bold mb-0">Main Detox Procedure</h5>
                           <small className="text-muted">The primary therapy (e.g., Vamana or Virechana).</small>
                        </div>
                     </li>
                     <li className="list-group-item p-4 border-0 d-flex align-items-center bg-light">
                        <div className="fw-bold fs-2 me-3" style={{ color: brandGreen }}>7+</div>
                        <div>
                           <h5 className="fw-bold mb-0">Rest & Diet Restoration</h5>
                           <small className="text-muted">Gradual reintroduction of normal food.</small>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* ================= BENEFITS LIST ================= */}
      <section className="py-5 bg-dark text-white">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-5 mb-4 mb-lg-0">
                  <h2 className="fw-bold display-5 mb-4">Why Choose Panchkarma?</h2>
                  <p className="lead text-white-50 mb-4">
                     In a world full of pollution and stress, your body needs a reset. 
                     Panchkarma is the most effective way to reverse the damage.
                  </p>
                  <Link to="/contact" className="btn btn-outline-light rounded-pill px-5 py-3">Talk to an Expert</Link>
               </div>
               <div className="col-lg-7">
                  <div className="row g-4">
                     {benefits.map((b, i) => (
                        <div className="col-md-6" key={i}>
                           <div className="d-flex align-items-start animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                              <div className="me-3 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                                   style={{ width: '50px', height: '50px', backgroundColor: brandGreen }}>
                                 <i className="bi bi-check-lg fs-4"></i>
                              </div>
                              <div>
                                 <h5 className="fw-bold">{b.title}</h5>
                                 <p className="text-white-50 small">{b.desc}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ================= NEW: DIETARY GUIDELINES ================= */}
      <section className="py-5">
         <div className="container text-center">
            <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Pathya & Apathya</h5>
            <h2 className="fw-bold mb-5">Diet During Treatment</h2>
            <div className="row justify-content-center">
               <div className="col-md-5">
                  <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#eafbe7', border: `1px solid ${brandGreen}` }}>
                     <h4 className="fw-bold mb-3 text-success"><i className="bi bi-check-circle-fill"></i> Do's (Pathya)</h4>
                     <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: '300px' }}>
                        <li className="mb-2">✔ Drink warm water only.</li>
                        <li className="mb-2">✔ Eat light, warm, fresh meals (Khichdi).</li>
                        <li className="mb-2">✔ Rest and sleep early.</li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-5 mt-4 mt-md-0">
                  <div className="p-4 rounded-4 shadow-sm bg-white border">
                     <h4 className="fw-bold mb-3 text-danger"><i className="bi bi-x-circle-fill"></i> Don'ts (Apathya)</h4>
                     <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: '300px' }}>
                        <li className="mb-2">✖ Avoid cold, spicy, or fried food.</li>
                        <li className="mb-2">✖ Avoid day sleep.</li>
                        <li className="mb-2">✖ Avoid heavy physical exercise.</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-5 bg-light">
         <div className="container">
            <div className="text-center mb-5">
               <h5 className="text-uppercase fw-bold" style={{ color: brandGreen }}>Common Questions</h5>
               <h2 className="fw-bold">Everything You Need to Know</h2>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="accordion shadow-sm" id="pkFaq">
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

export default Panchkarma;