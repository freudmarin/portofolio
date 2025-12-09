import React from 'react';
import '../styles/main.css';

const AboutMe: React.FC = () => (
  <section id="about" className="about-section">
    <p className="about-text about-animate" style={{ color: 'var(--text-soft)', fontSize: '1.35rem', lineHeight: 1.6, margin: '0 auto', maxWidth: 700 }}>
      Hi, I'm Marin Dulja, a results-driven software engineer passionate about building impactful digital experiences.<br />
      My expertise covers full-stack and backend development, modern web technologies, and delivering high-quality solutions across a wide range of projects.
    </p>
  </section>
);

export default AboutMe;
