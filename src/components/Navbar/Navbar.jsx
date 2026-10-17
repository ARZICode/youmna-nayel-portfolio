import React from 'react';
import './Navbar.css';
import { Globe } from 'lucide-react';

export default function Navbar({ nav, lang, toggleLanguage }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Clickable Brand Header */}
        <div className="brand-wrapper" onClick={scrollToTop} role="button" tabIndex={0}>
          <span className="brand-title">{nav.brandTitle}</span>
          <span className="brand-subtitle">{nav.brandSubtitle}</span>
        </div>

        <ul className="nav-links">
          <li><a href="#about" className="nav-link">{nav.about}</a></li>
          <li><a href="#expertise" className="nav-link">{nav.expertise}</a></li>
          <li><a href="#experience" className="nav-link">{nav.experience}</a></li>
          <li><a href="#case-studies" className="nav-link">{nav.caseStudies}</a></li>
          <li><a href="#education" className="nav-link">{nav.education}</a></li>
          <li><a href="#contact" className="nav-link">{nav.contact}</a></li>
        </ul>

        <button onClick={toggleLanguage} className="lang-btn">
          <Globe size={14} />
          <span>{lang === 'en' ? 'العربية' : 'English'}</span>
        </button>
      </div>
    </nav>
  );
}