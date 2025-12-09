import React from 'react';
import '../styles/main.css';

const Education: React.FC = () => (
  <section id="education" className="education-section">
    <h2 className="section-title" style={{ textAlign: 'center', color: 'var(--neon)', fontWeight: 800, fontSize: '2.2rem', marginBottom: '1.2rem' }}>Education</h2>
    <div className="education-list">
      <a className="education-card clickable-card" href="https://www.unitir.edu.al/" target="_blank" rel="noopener noreferrer">
        <h3>Bachelor of Computer Science</h3>
        <span className="school">University of Tirana</span>
        <span className="period">2015 - 2018</span>
      </a>
      <a className="education-card clickable-card" href="https://www.unitir.edu.al/" target="_blank" rel="noopener noreferrer">
        <h3>Msc. of Computer Science</h3>
        <span className="school">University of Tirana</span>
        <span className="period">2018 - 2020</span>
      </a>
    </div>
  </section>
);

export default Education;
