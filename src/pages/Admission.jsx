import { useState } from 'react';
import './Admission.css';

function Admission() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    yearLevel: 'freshman',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in PNC! Your application has been received. We will contact you soon.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      program: '',
      yearLevel: 'freshman',
      address: ''
    });
  };

  return (
    <div className="admission">
      <section className="admission-hero">
        <div className="admission-hero-overlay"></div>
        <div className="admission-hero-content">
          <h1>Admission Information</h1>
          <p>Start Your Journey with PNC</p>
        </div>
      </section>

      <section className="requirements-section">
        <div className="container">
          <h2 className="section-title">Admission Requirements</h2>
          <p className="section-subtitle">
            Complete the following requirements to begin your application process
          </p>

          <div className="requirements-grid">
            <div className="requirement-category">
              <h3>For Freshmen</h3>
              <ul>
                <li>✓ High School Report Card (Form 138) or equivalent</li>
                <li>✓ Certificate of Good Moral Character</li>
                <li>✓ Birth Certificate (PSA Copy)</li>
                <li>✓ Two (2) recent 2x2 ID pictures</li>
                <li>✓ Entrance Examination Result</li>
                <li>✓ Medical Certificate</li>
              </ul>
            </div>

            <div className="requirement-category">
              <h3>For Transferees</h3>
              <ul>
                <li>✓ Official Transcript of Records</li>
                <li>✓ Certificate of Good Moral Character</li>
                <li>✓ Honorable Dismissal</li>
                <li>✓ Birth Certificate (PSA Copy)</li>
                <li>✓ Two (2) recent 2x2 ID pictures</li>
                <li>✓ Course Description/Syllabus (for evaluation)</li>
              </ul>
            </div>

            <div className="requirement-category">
              <h3>For Graduate Programs</h3>
              <ul>
                <li>✓ Official Transcript of Records (Bachelor's Degree)</li>
                <li>✓ Certificate of Good Moral Character</li>
                <li>✓ Birth Certificate (PSA Copy)</li>
                <li>✓ Two (2) recent 2x2 ID pictures</li>
                <li>✓ Graduate School Entrance Exam Result</li>
                <li>✓ Letter of Intent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Admission Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Submit Application</h3>
                <p>Fill out the online application form or visit the Registrar's Office</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Take Entrance Exam</h3>
                <p>Schedule and take the entrance examination (for applicable applicants)</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Submit Requirements</h3>
                <p>Submit all required documents to the Admissions Office</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Wait for Evaluation</h3>
                <p>Admissions team will review your application (3-5 working days)</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Receive Acceptance</h3>
                <p>Qualified applicants will receive acceptance notification</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Enroll</h3>
                <p>Complete enrollment procedures and pay tuition fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="application-form-section">
        <div className="container">
          <h2 className="section-title">Online Application Form</h2>
          <p className="section-subtitle">
            Fill out the form below to start your application process
          </p>

          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="program">Preferred Program *</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a program</option>
                  <option value="BSIT">BS Information Technology</option>
                  <option value="BSCS">BS Computer Science</option>
                  <option value="BSCE">BS Civil Engineering</option>
                  <option value="BSEE">BS Electrical Engineering</option>
                  <option value="BSEd">Bachelor of Secondary Education</option>
                  <option value="BEEd">Bachelor of Elementary Education</option>
                  <option value="BSBA">BS Business Administration</option>
                  <option value="BSA">BS Accountancy</option>
                  <option value="BSEntrep">BS Entrepreneurship</option>
                  <option value="BAComm">BA Communication</option>
                  <option value="BAPsych">BA Psychology</option>
                  <option value="BSHM">BS Hospitality Management</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="yearLevel">Applicant Type *</label>
                <select
                  id="yearLevel"
                  name="yearLevel"
                  value={formData.yearLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="freshman">Freshman</option>
                  <option value="transferee">Transferee</option>
                  <option value="graduate">Graduate Program</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Complete Address *</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>

          <div className="download-section">
            <h3>Download Forms</h3>
            <p>You can also download and fill out these forms manually:</p>
            <div className="download-buttons">
              <a href="#" className="download-btn" onClick={(e) => {e.preventDefault(); alert('Application form download started');}}>
                📄 Application Form
              </a>
              <a href="#" className="download-btn" onClick={(e) => {e.preventDefault(); alert('Medical form download started');}}>
                📋 Medical Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="important-dates-section">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          <div className="dates-grid">
            <div className="date-card">
              <div className="date-icon">📅</div>
              <h3>Application Period</h3>
              <p><strong>March 1 - May 31, 2025</strong></p>
              <p>For First Semester, AY 2025-2026</p>
            </div>
            <div className="date-card">
              <div className="date-icon">✏️</div>
              <h3>Entrance Examination</h3>
              <p><strong>Every Saturday</strong></p>
              <p>8:00 AM - 12:00 NN</p>
            </div>
            <div className="date-card">
              <div className="date-icon">🎓</div>
              <h3>Enrollment Period</h3>
              <p><strong>June 1 - 15, 2025</strong></p>
              <p>First Semester Classes Start: June 16, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admission;

