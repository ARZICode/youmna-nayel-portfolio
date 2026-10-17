import React from 'react';
import './CaseStudies.css';

export default function CaseStudies({ caseStudies }) {
  return (
    <section id="case-studies" className="casestudies-section">
      <div className="casestudies-container">
        <h2 className="casestudies-heading">{caseStudies.heading}</h2>
        <div className="casestudies-grid">
          {caseStudies.items.map((cs, idx) => (
            <div key={idx} className="casestudy-card">
              <div>
                <span className="casestudy-code">{cs.code}</span>
                <h3 className="casestudy-title">{cs.title}</h3>
                <p className="casestudy-focus">{cs.focus}</p>
                <p className="casestudy-summary">{cs.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}