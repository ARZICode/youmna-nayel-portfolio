import React from 'react';
import './Expertise.css';
import { Landmark, FileText, ShieldCheck, Award, Users } from 'lucide-react';

export default function Expertise({ expertise }) {
  const icons = [
    <Landmark size={20} />,
    <FileText size={20} />,
    <ShieldCheck size={20} />,
    <Award size={20} />,
    <Users size={20} />
  ];

  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-container">
        <h2 className="expertise-heading">{expertise.heading}</h2>
        <div className="expertise-grid">
          {expertise.items.map((item, idx) => (
            <div key={idx} className="expertise-card">
              <div className="card-icon">{icons[idx]}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}