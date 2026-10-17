import React from 'react';
import './Experience.css';
import { ChevronRight } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-heading">{experience.heading}</h2>
        <div className="timeline-list">
          {experience.roles.map((role, idx) => (
            <div key={idx} className="timeline-card">
              <span className="timeline-period">{role.period}</span>
              <h3 className="timeline-role">{role.title}</h3>
              <h4 className="timeline-org">{role.organization}</h4>
              <ul className="timeline-points">
                {role.points.map((pt, pIdx) => (
                  <li key={pIdx} className="timeline-point">
                    <ChevronRight size={18} className="timeline-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}