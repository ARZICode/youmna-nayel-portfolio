import React from 'react';
import './Education.css';

export default function Education({ education }) {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-heading">{education.heading}</h2>
        <div className="education-grid">
          {education.credentials.map((edu, idx) => (
            <div key={idx} className="education-card">
              <span className="education-date">{edu.date}</span>
              <h3 className="education-title">{edu.title}</h3>
              <h4 className="education-inst">{edu.institution}</h4>
              <p className="education-note">{edu.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}