import React from 'react';
import './Hero.css';
import { ArrowUpRight, Download } from 'lucide-react';

export default function Hero({ hero, lang }) {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">{hero.badge}</span>
          <h1 className="hero-headline">{hero.headline}</h1>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <a href="#experience" className="btn-hero-primary">
              {hero.exploreBtn}
              <ArrowUpRight size={18} className="btn-icon" />
            </a>
            <a 
  href={`/documents/Youmna_Nayel_CV_${lang.toUpperCase()}.pdf`} 
  download={`Youmna_Nayel_CV_${lang.toUpperCase()}.pdf`}
  className="btn-hero-secondary"
>
  {hero.downloadCvBtn}
  <Download size={18} />
</a>
          </div>
        </div>
      </div>
    </section>
  );
}