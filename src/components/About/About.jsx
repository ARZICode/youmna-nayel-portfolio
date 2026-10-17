import React from 'react';
import './About.css';

export default function About({ about }) {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">{about.heading}</h2>
        <div className="about-card">
          <p className="about-paragraph">{about.body1}</p>
          <p className="about-paragraph">{about.body2}</p>
          <p className="about-paragraph">{about.body3}</p>
        </div>
      </div>
    </section>
  );
}