import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import VdAeshaBDesai from "../assets/images/VdAeshaBDesai.jpeg";
import VdPriyankaHDodiya from "../assets/images/VdPriyankaHDodiya.png";

const Doctors = () => {
  const brandGreen = "#67be57";

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // ================= DOCTORS DATA =================
  const doctorsList = [
    {
      name: "Vd. Priyanka H. Dodiya (Verma)",
      degree: "M.D. (Ayurveda)",
      specialty: "Ayurveda Consultant & Founder",
      exp: "12+ Years Exp",
      img: VdPriyankaHDodiya,
      desc:
        "Founder of Brahmi Ayurveda & Panchakarma Hospital. Focuses on Dosha balance, Agni strengthening and long-term wellness through Panchakarma, Shamana Chikitsa, diet and lifestyle counselling.",
      expertise: [
        "Liver disorders",
        "Lifestyle disorders",
        "Digestive disorders",
        "Gynaecological disorders",
        "Hair & skin conditions",
      ],
    },

    {
      name: "Vd. Aesha B. Desai",
      degree: "B.A.M.S.",
      specialty: "Ayurvedic Consultant & Panchakarma Specialist",
      exp: "12+ Years Exp",
      img: VdAeshaBDesai,
      desc:
        "Co-founder emphasizing ethical and root-cause-based treatment for long-term wellness with individualized Panchakarma care.",
      expertise: [
        "Chronic lifestyle disorders",
        "Joint & muscular pain",
        "Digestive problems",
        "Stress disorders",
        "Women's health",
      ],
    },
  ];

  // ================= PROCESS =================
  const process = [
    { step: "01", title: "Nadi Pariksha", desc: "Pulse diagnosis to detect root cause." },
    { step: "02", title: "Prakriti Analysis", desc: "Understanding your body constitution." },
    { step: "03", title: "Custom Plan", desc: "Personalized medicines & therapies." },
    { step: "04", title: "Follow Up", desc: "Tracking healing progress." },
  ];

  // ================= FAQ =================
  const faqs = [
    {
      question: "How can I book a specific doctor?",
      answer:
        "You can select your preferred doctor while booking online or request at reception.",
    },
    {
      question: "Do you offer video consultations?",
      answer:
        "Yes, senior doctors are available for video consultations.",
    },
    {
      question: "What to bring for first visit?",
      answer:
        "Carry previous reports, medication list and ID proof.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <header
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="container text-center text-white">
          <h5 className="fw-bold mb-3" style={{ color: brandGreen }}>
            Expert Care
          </h5>
          <h1 className="display-4 fw-bold">Meet Our Vaidyas</h1>
          <p className="lead">Dedicated to restoring natural balance</p>
        </div>
      </header>

      {/* INTRO */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h5 style={{ color: brandGreen }}>Our Expertise</h5>
            <h2 className="fw-bold">Experience Matters</h2>
            <p className="text-muted">
              Our Vaidyas combine classical Ayurveda with modern diagnostics.
            </p>

            <div className="d-flex gap-4 mt-3">
              <div className="text-center border p-3 rounded">
                <h3 style={{ color: brandGreen }}>20+</h3>
                Specialists
              </div>
              <div className="text-center border p-3 rounded">
                <h3 style={{ color: brandGreen }}>50k+</h3>
                Consultations
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img
              src={VdPriyankaHDodiya}
              alt=""
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h5 style={{ color: brandGreen }}>The Team</h5>
            <h2 className="fw-bold">Our Specialists</h2>
          </div>

          <div className="row g-4">
            {doctorsList.map((doc, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 shadow border-0 text-center p-3">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{ width: 120, height: 120, objectFit: "cover" }}
                  />

                  <h5 style={{ color: brandGreen }}>{doc.name}</h5>

                  <span className="badge bg-dark mb-2">
                    {doc.specialty}
                  </span>

                  <p className="fw-bold small">{doc.degree}</p>
                  <p className="text-muted small">{doc.desc}</p>

                  <ul className="text-start small text-muted">
                    {doc.expertise.map((ex, idx) => (
                      <li key={idx}>{ex}</li>
                    ))}
                  </ul>

                  <Link
                    to="/appointment"
                    className="btn btn-outline-success rounded-pill mt-auto"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h5 style={{ color: brandGreen }}>How We Treat</h5>
          <h2 className="fw-bold mb-5">Diagnosis Process</h2>

          <div className="row g-4">
            {process.map((p, i) => (
              <div className="col-md-3" key={i}>
                <h2 style={{ color: brandGreen }}>{p.step}</h2>
                <h5>{p.title}</h5>
                <p className="text-white-50">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">FAQs</h2>

          {faqs.map((faq, i) => (
            <div key={i} className="mb-3 border rounded">
              <button
                className="w-100 text-start p-3 fw-bold border-0"
                onClick={() => toggleFaq(i)}
                style={{
                  background: openFaq === i ? "#eafbe7" : "white",
                  color: openFaq === i ? brandGreen : "black",
                }}
              >
                {faq.question}
              </button>

              {openFaq === i && (
                <div className="p-3 text-muted">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center text-white"
        style={{ background: `linear-gradient(${brandGreen}, #4da040)` }}>
        <h2>Join Our Medical Team</h2>
        <p>Passionate about holistic healing? We are hiring.</p>
        <Link to="/contact" className="btn btn-light text-success">
          Apply Now
        </Link>
      </section>
    </div>
  );
};

export default Doctors;
