import './About.css';

function About() {
  const officers = [
    {
      name: "Dr. Maria Santos",
      position: "University President",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Juan dela Cruz",
      position: "Vice President for Academic Affairs",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Ana Reyes",
      position: "Vice President for Administration",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Roberto Garcia",
      position: "Dean of College of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Linda Flores",
      position: "Dean of College of Education",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Carlos Mendoza",
      position: "Dean of College of Business",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Pamantasan ng Cabuyao</h1>
          <p>Building Leaders, Transforming Communities</p>
        </div>
      </section>

      <section className="history-section">
        <div className="container">
          <h2 className="section-title">Our History</h2>
          <div className="history-content">
            <div className="history-text">
              <p>
                <strong>Pamantasan ng Cabuyao (PNC)</strong> was established in 2001 through 
                City Ordinance No. 2001-012, making it the first and only local university 
                in the City of Cabuyao, Laguna. The university was born out of the vision 
                to provide accessible and quality higher education to the residents of 
                Cabuyao and nearby municipalities.
              </p>
              <p>
                Starting with just a handful of programs and a few hundred students, PNC 
                has grown exponentially over the years. The university initially offered 
                teacher education programs and has since expanded to include engineering, 
                business administration, computer science, and various other fields of study.
              </p>
              <p>
                In 2010, PNC achieved a significant milestone by earning Level II 
                Accreditation from the Accrediting Agency of Chartered Colleges and 
                Universities in the Philippines (AACCUP). This recognition validated the 
                university's commitment to excellence in education.
              </p>
              <p>
                Today, PNC stands as a testament to the power of quality education in 
                transforming lives and communities. With modern facilities, qualified 
                faculty members, and a student-centered approach to learning, the university 
                continues to produce graduates who are not only academically competent but 
                also socially responsible and globally competitive.
              </p>
              <p>
                The university has also been active in community extension services, 
                partnering with local government units and organizations to address 
                community needs through various outreach programs, skills training, and 
                sustainable development initiatives.
              </p>
            </div>
            <div className="history-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2001</div>
                <div className="timeline-desc">PNC was established</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2005</div>
                <div className="timeline-desc">Expanded program offerings</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2010</div>
                <div className="timeline-desc">Achieved AACCUP Level II</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-desc">New campus facilities opened</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-desc">Launched online learning platforms</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-desc">Celebrating 24 years of excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="officers-section">
        <div className="container">
          <h2 className="section-title">Administrative Officers</h2>
          <p className="section-subtitle">Meet the dedicated leaders guiding PNC towards excellence</p>
          <div className="officers-grid">
            {officers.map((officer, index) => (
              <div key={index} className="officer-card">
                <div className="officer-image">
                  <img src={officer.image} alt={officer.name} />
                </div>
                <div className="officer-info">
                  <h3>{officer.name}</h3>
                  <p>{officer.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>AACCUP Accredited</h3>
              <p>Multiple programs accredited by AACCUP Level II and III</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎓</div>
              <h3>High Board Exam Passing Rate</h3>
              <p>Consistently above national average in licensure examinations</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🌟</div>
              <h3>Excellence in Research</h3>
              <p>Numerous published researches in international journals</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🤝</div>
              <h3>Community Impact</h3>
              <p>Awarded for outstanding community extension programs</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">💼</div>
              <h3>Industry Partnerships</h3>
              <p>Strong partnerships with leading companies for OJT and employment</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🌏</div>
              <h3>International Linkages</h3>
              <p>Partnerships with universities abroad for exchange programs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

