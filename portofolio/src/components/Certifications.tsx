import React from 'react';
import '../styles/main.css';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title" style={{ 
        textAlign: 'center', 
        color: '#fff', 
        fontWeight: 800, 
        fontSize: '2.2rem', 
        marginBottom: '1.2rem' 
      }}>
        Certifications
      </h2>
      
      <div className="certifications-grid">
        <div className="certification-card">
          <div className="certification-image">
            <img 
              src="/azure-certification.png" 
              alt="Microsoft Certified: Azure Developer Associate" 
              className="cert-screenshot"
            />
          </div>
          <div className="certification-info">
            <h3 className="cert-title">Microsoft Certified: Azure Developer Associate</h3>
            <a 
              href="https://learn.microsoft.com/en-us/users/marindulja-4281/credentials/95bcad6e81b05db8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-btn"
            >
              <span>🔗</span> Verify Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;