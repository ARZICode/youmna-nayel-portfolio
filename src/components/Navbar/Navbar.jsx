import React, { useState } from 'react';
import './Navbar.css';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar({ nav, lang, toggleLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Clickable Brand Header */}
        <div className="brand-wrapper" onClick={scrollToTop} role="button" tabIndex={0}>
          <span className="brand-title">{nav.brandTitle}</span>
          <span className="brand-subtitle">{nav.brandSubtitle}</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links desktop-links">
          <li><a href="#about" className="nav-link">{nav.about}</a></li>
          <li><a href="#expertise" className="nav-link">{nav.expertise}</a></li>
          <li><a href="#experience" className="nav-link">{nav.experience}</a></li>
          <li><a href="#case-studies" className="nav-link">{nav.caseStudies}</a></li>
          <li><a href="#education" className="nav-link">{nav.education}</a></li>
          <li><a href="#contact" className="nav-link">{nav.contact}</a></li>
        </ul>

        {/* Right Action Bar (Lang Button + Mobile Toggle) */}
        <div className="nav-actions">
          <button onClick={toggleLanguage} className="lang-btn">
            <Globe size={14} />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#about" onClick={handleLinkClick}>{nav.about}</a></li>
          <li><a href="#expertise" onClick={handleLinkClick}>{nav.expertise}</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>{nav.experience}</a></li>
          <li><a href="#case-studies" onClick={handleLinkClick}>{nav.caseStudies}</a></li>
          <li><a href="#education" onClick={handleLinkClick}>{nav.education}</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>{nav.contact}</a></li>
        </ul>
      </div>
    </nav>
  );
}