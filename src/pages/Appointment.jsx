import React, { useState } from "react";
import axios from "axios";
import toast  from "react-hot-toast";
import "../App.css";

const Appointment = () => {
  const brandGreen = "#67be57";

  const initialState = {
    name: "",
    phone: "+91",
    date: "",
    dept: "General Consultation",
    doctor: "Any Available Doctor",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "https://brahmin-ayruveda-backend-8oi4.vercel.app/api/appointments",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Appointment booked successfully!");

      // Reset form
      setFormData(initialState);

    } catch (err) {
      console.error(err);

      if (err.response) {
        toast.error(err.response.data.message || "Booking failed");
      } else {
        toast.error("Server not reachable");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Toast Container */}

      {/* HERO */}
      <header
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
        }}
      >
        <div className="container text-center text-white">
          <h5
            className="text-uppercase fw-bold mb-3"
            style={{ letterSpacing: "2px", color: brandGreen }}
          >
            Book Your Visit
          </h5>
          <h1 className="display-3 fw-bold">Appointment Request</h1>
          <p className="lead fs-4">Skip the waiting line. Book online.</p>
        </div>
      </header>

      {/* FORM */}
      <section className="container my-5 py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="bg-light p-5 rounded-4 shadow-sm border">
              <h3 className="fw-bold mb-4" style={{ color: brandGreen }}>
                Patient Details
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label fw-bold small">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control p-3"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold small">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control p-3"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold small">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="form-control p-3"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold small">
                      Department
                    </label>
                    <select
                      name="dept"
                      className="form-select p-3"
                      value={formData.dept}
                      onChange={handleChange}
                    >
                      <option>General Consultation</option>
                      <option>Panchkarma</option>
                      <option>Swasth Vritta</option>
                      <option>Pediatrics</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-bold small">
                      Choose Doctor
                    </label>
                    <select
                      name="doctor"
                      className="form-select p-3"
                      value={formData.doctor}
                      onChange={handleChange}
                    >
                      <option>Any Available Doctor</option>
                      <option>Vd. Priyanka H. Dodiya</option>
                      <option>Dr. Aesha Desai</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-bold small">
                      Describe Problem
                    </label>
                    <textarea
                      name="message"
                      className="form-control p-3"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn w-100 py-3 fw-bold rounded-pill text-white"
                      style={{ background: brandGreen }}
                    >
                      {loading ? "Booking..." : "Confirm Booking"}
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

          {/* SIDEBAR (UNCHANGED) */}
          <div className="col-lg-5">
            <div
              className="p-4 rounded-4 text-white mb-4 shadow"
              style={{ backgroundColor: brandGreen }}
            >
              <h4>Before You Visit</h4>
              <ul>
                <li>Bring old reports</li>
                <li>Come empty stomach for Nadi Pariksha</li>
                <li>Wear comfortable clothes</li>
                <li>Arrive 15 mins early</li>
              </ul>
            </div>

            <div className="p-4 rounded-4 bg-dark text-white shadow">
              <h4>OPD Hours</h4>
              <p>Mon–Fri: 8AM–9PM</p>
              <p>Saturday: 9AM–7PM</p>
              <p>Sunday: Emergency Only</p>
            </div>

            <div className="mt-4 text-center">
              <p>Need help booking?</p>
              <h3 style={{ color: brandGreen }}>+91 9712311557</h3>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Appointment;
