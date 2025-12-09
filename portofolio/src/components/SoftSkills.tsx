import React from 'react';
import '../styles/main.css';

const softSkills = [
  'Growth Oriented',
  'Results Driven',
  'Adaptable',
  'Problem Solver',
  'Communicative',
  'Self-Motivated',
];

const SoftSkills: React.FC = () => (
  <section id="soft-skills" className="soft-skills-section">
    <h2 className="section-title" style={{ textAlign: 'center', color: '#fff', fontWeight: 800, fontSize: '2.2rem', marginBottom: '1.2rem' }}>Soft Skills</h2>
    <div className="soft-skills-list">
      {softSkills.map((skill, idx) => (
        <div className="soft-skill-card" key={idx} style={{color: '#fff'}}>{skill}</div>
      ))}
    </div>
  </section>
);

export default SoftSkills;
