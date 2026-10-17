import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Youmna Nayel. All Rights Reserved.
        </p>

        <div className="footer-credit-group">
          <p className="footer-credit">
            Designed & Developed by <strong className="credit-brand">ARZICode.lb</strong>
          </p>

          <a
            href="https://instagram.com/arzicode.lb"
            target="_blank"
            rel="noopener noreferrer"
            className="credit-link"
            aria-label="ARZICode.lb Instagram Profile"
          >
            <svg
              className="instagram-icon-svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>@arzicode.lb</span>
          </a>
        </div>
      </div>
    </footer>
  );
}