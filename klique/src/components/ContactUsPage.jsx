import { useEffect, useState } from "react";
import axios from "axios";
import "./ContactUsPage.css";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Scroll reveal trigger
  useEffect(() => {
    window.scrollTo(0, 0);
    const revealEls = document.querySelectorAll(
      ".contact-page-wrapper .reveal, .contact-page-wrapper .reveal-l, .contact-page-wrapper .reveal-r",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => {
      revealEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    const name = formData.name.trim();
    const email = formData.email.trim();

    // Name validation
    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (name.length < 2) {
      setError("Name must be at least 2 characters.");
      return;
    }

    if (name.length > 50) {
      setError("Name cannot exceed 50 characters.");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
      setError("Name can contain only letters and spaces.");
      return;
    }

    // Email validation
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://klique-software-solutions.onrender.com/api/contact",
        {
          name,
          email,
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
      );

      setSuccess(response.data.message);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setError(error.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-wrapper w-full bg-[#f6f8fb]">
      {/* Banner */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out and let's talk.</p>
      </div>

      {/* Info cards */}
      <div className="info-section">
        <div className="info-glow"></div>
        <div className="info-cards">
          <div className="info-card reveal" style={{ transitionDelay: "0s" }}>
            <div className="info-card-glow"></div>
            <div className="info-card-icon">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3>Location</h3>
            <p>
              202, Pragati Nagar, Kotra 305004,
              <br />
              Ajmer, Rajasthan, India
            </p>
          </div>
          <div
            className="info-card reveal"
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="info-card-glow"></div>
            <div className="info-card-icon">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3>Call Us</h3>
            <a href="tel:+917014294738">+91-7014-294-738</a>
          </div>
          <div className="info-card reveal" style={{ transitionDelay: "0.3s" }}>
            <div className="info-card-glow"></div>
            <div className="info-card-icon">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3>Email Us</h3>
            <a href="mailto:hr@kliquesoftwaresolutions.com">
              hr@kliquesoftwaresolutions.com
            </a>
          </div>
        </div>
      </div>

      {/* Form + Map */}
      <div className="contact-section">
        <div className="contact-grid">
          <div className="form-side reveal-l">
            <div className="eyebrow">Get in touch</div>
            <h2>Send a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    maxLength={50}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />{" "}
              </div>
              <div className="form-group">
                <label>Your message (optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your project..."
                ></textarea>{" "}
              </div>
              {success && <p className="form-success">{success}</p>}
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send message →"}
              </button>
            </form>
          </div>

          <div className="map-side reveal-r">
            <div className="eyebrow">Find us</div>
            <h2>Locate us here</h2>
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5607!2d74.6!3d26.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7b2f0a0a0a1%3A0x1234567890abcdef!2s202%2C%20Pragati%20Nagar%2C%20Kotra%2C%20Ajmer%2C%20Rajasthan%20305004!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="map-addr">
              <div className="ic">📍</div>
              <span>
                202, Pragati Nagar, Kotra 305004, Ajmer, Rajasthan, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
