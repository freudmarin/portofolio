import React from 'react';
import '../styles/main.css';

const socials = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/marin-dulja/',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#0077B5"/>
        <path d="M10.666 13.333h2.667v8h-2.667v-8zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm3.334 4h2.56v1.093h.037c.357-.677 1.23-1.393 2.533-1.393 2.707 0 3.207 1.787 3.207 4.107v4.193h-2.667v-3.733c0-.893-.017-2.04-1.24-2.04-1.24 0-1.427.968-1.427 1.967v3.806h-2.667v-8z" fill="#fff"/>
      </svg>
    )
  },
  {
    label: 'GitHub',
    url: 'https://github.com/freudmarin',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.38 9.38 0 012.5-.34c.85.01 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="#fff"/>
      </svg>
    )
  }
];

const SocialCards: React.FC = () => (
  <section id="connect" className="social-section">
    <h2 className="section-title" style={{ textAlign: 'center', color: 'var(--neon)', fontWeight: 800, fontSize: '2.2rem', marginBottom: '1.2rem' }}>Connect</h2>
    <div className="social-list">
      {socials.map((s, idx) => (
        <a className="social-card" href={s.url} target="_blank" rel="noopener noreferrer" key={idx}>
          <div className="social-icon">{s.icon}</div>
          <span className="social-label">{s.label}</span>
        </a>
      ))}
    </div>
  </section>
);

export default SocialCards;
