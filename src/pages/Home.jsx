import { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Welcome to Pamantasan ng Cabuyao",
      subtitle: "Your Gateway to Excellence",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop"
    },
    {
      title: "World-Class Education",
      subtitle: "Preparing Leaders of Tomorrow",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop"
    },
    {
      title: "Innovation & Excellence",
      subtitle: "Building Better Futures",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
      {/* Hero Slideshow */}
      <section className="hero-section">
        <div className="slideshow">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <h2 className="section-title">About Pamantasan ng Cabuyao</h2>
          <p className="overview-text">
            Pamantasan ng Cabuyao (PNC) is a premier educational institution in Laguna, Philippines, 
            committed to providing quality education and producing globally competitive graduates. 
            Established to serve the educational needs of Cabuyao and neighboring municipalities, 
            PNC has grown into a center of academic excellence, innovation, and community service.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="vmv-section">
        <div className="container">
          <div className="vmv-grid">
            <div className="vmv-card vision">
              <div className="vmv-icon">👁️</div>
              <h3>Vision</h3>
              <p>
                A premier institution of higher learning in Region IV, 
                developing globally-competitive and value-laden professionals 
                and leaders instrumental to community development and nation-building. 
              </p>
            </div>
            
            <div className="vmv-card mission">
              <div className="vmv-icon">🎯</div>
              <h3>Mission</h3>
              <p>
                As an institution of higher learning, UC (Pnc) is committed to equip 
                individuals with knowledge, skills, and values that will enable them 
                to achieve their professional goals & provide leadership and service for national development.
              </p>
            </div>
            
            <div className="vmv-card values">
              <div className="vmv-icon">⭐</div>
              <h3>PnC Core Values</h3>
              <ul>
                <li><strong>P</strong> - Personal Dignity</li>
                <li><strong>N</strong> - Nurturing Community</li>
                <li><strong>C</strong> - Commitment to Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of students who have chosen excellence</p>
          <div className="cta-buttons">
            <a href="/admission" className="btn btn-primary">Apply Now</a>
            <a href="/courses" className="btn btn-secondary">Explore Programs</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

