import { useState } from 'react';
import './Courses.css';

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      category: 'engineering',
      program: 'Bachelor of Science in Information Technology',
      acronym: 'BSIT',
      description: 'Focuses on the application of technology in business and industry. Students learn programming, database management, networking, and systems analysis.',
      duration: '4 years',
      icon: '💻'
    },
    {
      id: 2,
      category: 'engineering',
      program: 'Bachelor of Science in Computer Science',
      acronym: 'BSCS',
      description: 'Emphasizes the theoretical foundations of computing and software development. Covers algorithms, artificial intelligence, and software engineering.',
      duration: '4 years',
      icon: '🖥️'
    },
    {
      id: 5,
      category: 'education',
      program: 'Bachelor of Secondary Education',
      acronym: 'BSEd',
      description: 'Prepares future secondary school teachers with majors in various fields including English, Mathematics, Science, and Social Studies.',
      duration: '4 years',
      icon: '📚'
    },
    {
      id: 6,
      category: 'education',
      program: 'Bachelor of Elementary Education',
      acronym: 'BEEd',
      description: 'Trains students to become elementary school teachers with comprehensive knowledge in all subject areas and child development.',
      duration: '4 years',
      icon: '✏️'
    },
    {
      id: 7,
      category: 'business',
      program: 'Bachelor of Science in Business Administration',
      acronym: 'BSBA',
      description: 'Offers majors in Marketing Management, Financial Management, Human Resource Management, and Operations Management.',
      duration: '4 years',
      icon: '💼'
    },
    {
      id: 8,
      category: 'business',
      program: 'Bachelor of Science in Accountancy',
      acronym: 'BSA',
      description: 'Prepares students for careers in accounting, auditing, taxation, and financial management. Leads to CPA licensure.',
      duration: '4 years',
      icon: '📊'
    },
   
    {
      id: 11,
      category: 'arts',
      program: 'Bachelor of Arts in Psychology',
      acronym: 'BA Psych',
      description: 'Studies human behavior, mental processes, and psychological assessment. Foundation for graduate studies in psychology.',
      duration: '4 years',
      icon: '🧠'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'engineering', name: 'Engineering & Technology' },
    { id: 'education', name: 'Education' },
    { id: 'business', name: 'Business & Management' },
    { id: 'arts', name: 'Arts & Sciences' },
    { id: 'hospitality', name: 'Hospitality' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="courses">
      <section className="courses-hero">
        <div className="courses-hero-overlay"></div>
        <div className="courses-hero-content">
          <h1>Programs Offered</h1>
          <p>Discover Your Path to Success</p>
        </div>
      </section>

      <section className="courses-section">
        <div className="container">
          <h2 className="section-title">Explore Our Programs</h2>
          <p className="section-subtitle">
            Choose from our wide range of programs designed to prepare you for a successful career
          </p>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-icon">{course.icon}</div>
                <div className="course-header">
                  <h3 className="course-acronym">{course.acronym}</h3>
                  <h4 className="course-title">{course.program}</h4>
                </div>
                <p className="course-description">{course.description}</p>
                <div className="course-footer">
                  <span className="course-duration">
                    <strong>Duration:</strong> {course.duration}
                  </span>
                  <a href="/admission" className="apply-btn">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose PNC?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">✅</div>
              <h3>Accredited Programs</h3>
              <p>AACCUP accredited programs ensuring quality education</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👨‍🏫</div>
              <h3>Expert Faculty</h3>
              <p>Learn from experienced and qualified instructors</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏢</div>
              <h3>Modern Facilities</h3>
              <p>State-of-the-art laboratories and learning spaces</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Affordable Tuition</h3>
              <p>Quality education at affordable rates with scholarship programs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;

