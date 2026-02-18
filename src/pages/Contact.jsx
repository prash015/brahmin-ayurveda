import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../App.css";

const Contact = () => {
  const brandGreen = "#67be57";

  // ================= STATE =================
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  // ================= HANDLERS =================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      return toast.error("Phone number must be 10 digits");
    }

    try {
      setLoading(true);

      await axios.post(
        "https://brahmin-ayruveda-backend-8oi4.vercel.app/api/contact",
        formData
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        countryCode: "+91",
        phone: "",
        email: "",
        subject: "General Inquiry",
        message: ""
      });

    } catch (err) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  // ================= STATIC UI DATA =================
  const contactInfo = [
    { icon: "bi-geo-alt", title: "Our Location", desc: "314, Samanvay Business Square, Waghodia Road, Vadodara – 390019", action: "Get Directions" },
    { icon: "bi-telephone", title: "Phone Number", desc: "+91 97123 11557", action: "Call Now" },
    { icon: "bi-envelope", title: "Email Address", desc: "info@brahmiayu.com", action: "Send Email" }
  ];

  const departments = [
    { name: "General Enquiry", email: "info@brahmiayu.com", phone: "+91 97123 11557" },
    { name: "Appointments", email: "booking@brahmiayu.com", phone: "+91 97123 11557" },
    { name: "Consultation Hours", email: "10:00 AM – 2:00 PM, 4:30 PM – 8:00 PM", phone: "Daily" }
  ];

  const socialLinks = [
    { icon: "bi-youtube", name: "YouTube", url: "https://www.youtube.com/@brahmiayu", color: "#FF0000" },
    { icon: "bi-whatsapp", name: "WhatsApp", url: "https://whatsapp.com/channel/0029VbARMpxISTkROSyxY22X", color: "#25D366" },
    { icon: "bi-facebook", name: "Facebook", url: "https://www.facebook.com/share/1APJqFuzZb/", color: "#1877F2" }
  ];

  return (
    <div>

      {/* HERO */}
      <header className="position-relative d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px"
        }}>
        <div className="container text-center text-white">
          <h5 className="text-uppercase fw-bold mb-3" style={{letterSpacing:"2px",color:brandGreen}}>
            We're Here to Help
          </h5>
          <h1 className="display-3 fw-bold">Get in Touch</h1>
        </div>
      </header>

      {/* FLOATING CARDS */}
      <section className="container" style={{marginTop:"-80px",zIndex:10,position:"relative"}}>
        <div className="row g-4">
          {contactInfo.map((item,i)=>(
            <div className="col-md-4" key={i}>
              <div className="card border-0 shadow-sm p-4 text-center h-100">
                <div className="mb-3 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto"
                  style={{width:"70px",height:"70px",background:"#eafbe7",color:brandGreen}}>
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

      {/* FORM */}
      <section className="container my-5 py-5">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-5 mb-5">
            <h5 style={{color:brandGreen}} className="fw-bold">Message Us</h5>

            <div className="list-group shadow-sm rounded-4 overflow-hidden mb-4">
              {departments.map((d,i)=>(
                <div key={i} className="list-group-item border-0 p-3 d-flex justify-content-between">
                  <div>
                    <h6 className="fw-bold mb-0">{d.name}</h6>
                    <small className="text-muted">{d.email}</small>
                  </div>
                  <small className="fw-bold" style={{color:brandGreen}}>{d.phone}</small>
                </div>
              ))}
            </div>

            <div className="d-flex gap-3">
              {socialLinks.map((s,i)=>(
                <a key={i} href={s.url} target="_blank" rel="noreferrer"
                  className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                  style={{width:50,height:50}}>
                  <i className={`bi ${s.icon}`} style={{color:s.color}}></i>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-7 ps-lg-5">
            <div className="bg-light p-5 rounded-4 shadow-sm border">

              <h3 className="fw-bold mb-4">Send a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <input name="name" value={formData.name} onChange={handleChange}
                    className="form-control p-3 border-0 shadow-sm" placeholder="Your Name" required />

                  {/* COUNTRY CODE + PHONE */}
                  <div className="col-md-4">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="form-select p-3 border-0 shadow-sm"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+971">🇦🇪 +971</option>
                    </select>
                  </div>

                  <div className="col-md-8">
                    <input
                      type="tel"
                      value={formData.phone}
                      maxLength={10}
                      required
                      className={`form-control p-3 border-0 shadow-sm ${phoneError ? "is-invalid" : ""}`}
                      placeholder="Phone Number"
                      onChange={(e)=>{
                        const value=e.target.value;

                        // allow only digits
                        if(/^\d*$/.test(value)){
                          setFormData({...formData,phone:value});
                          setPhoneError(false);
                        }else{
                          setPhoneError(true);
                        }
                      }}
                    />
                  </div>

                  <input name="email" type="email" value={formData.email}
                    onChange={handleChange}
                    className="form-control p-3 border-0 shadow-sm"
                    placeholder="Email" required />

                  <select name="subject" value={formData.subject}
                    onChange={handleChange}
                    className="form-select p-3 border-0 shadow-sm">
                    <option>General Inquiry</option>
                    <option>Book Consultation</option>
                    <option>Treatment Information</option>
                    <option>Feedback</option>
                  </select>

                  <textarea name="message" rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control p-3 border-0 shadow-sm"
                    placeholder="Message" required />

                  <button disabled={loading}
                    className="btn btn-brand w-100 py-3 fw-bold rounded-pill shadow">
                    {loading?"Sending...":"Submit Message"}
                  </button>

                </div>
              </form>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
