import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Thank you for contacting us! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We'd Love to Hear From You</p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions? We're here to help!
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <p>Banay-banay, Cabuyao City</p>
              <p>Laguna 4025, Philippines</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>Main Office: (049) 531-4332</p>
              <p>Registrar: (049) 531-4333</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>info@pnc.edu.ph</p>
              <p>admissions@pnc.edu.ph</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">⏰</div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 8:00 AM - 12:00 NN</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-layout">
            <div className="form-container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            <div className="map-container">
              <h2>Find Us Here</h2>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.9234567890!2d121.1234567890!3d14.2345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCabuyao%2C%20Laguna!5e0!3m2!1sen!2sph!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PNC Location Map"
                ></iframe>
              </div>
              <div className="directions">
                <h3>How to Get Here</h3>
                <p>
                  <strong>By Car:</strong> From Manila, take SLEX and exit at Calamba. 
                  Head towards Cabuyao City. PNC is located along the main road.
                </p>
                <p>
                  <strong>By Public Transport:</strong> Take a bus to Cabuyao from any major 
                  terminal in Manila. From the city center, take a jeepney or tricycle to 
                  Banay-banay area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="departments-section">
        <div className="container">
          <h2 className="section-title">Department Contacts</h2>
          <div className="departments-grid">
            <div className="department-card">
              <h3>Registrar's Office</h3>
              <p>📞 (049) 531-4333</p>
              <p>📧 registrar@pnc.edu.ph</p>
            </div>
            <div className="department-card">
              <h3>Admissions Office</h3>
              <p>📞 (049) 531-4334</p>
              <p>📧 admissions@pnc.edu.ph</p>
            </div>
            <div className="department-card">
              <h3>Cashier's Office</h3>
              <p>📞 (049) 531-4335</p>
              <p>📧 cashier@pnc.edu.ph</p>
            </div>
            <div className="department-card">
              <h3>Student Affairs</h3>
              <p>📞 (049) 531-4336</p>
              <p>📧 studentaffairs@pnc.edu.ph</p>
            </div>
            <div className="department-card">
              <h3>Library</h3>
              <p>📞 (049) 531-4337</p>
              <p>📧 library@pnc.edu.ph</p>
            </div>
            <div className="department-card">
              <h3>IT Department</h3>
              <p>📞 (049) 531-4338</p>
              <p>📧 itdept@pnc.edu.ph</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

