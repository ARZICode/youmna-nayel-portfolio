import React from 'react';
import './Contact.css';
import { Mail } from 'lucide-react';

export default function Contact({ contact }) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">{contact.heading}</h2>
        <p className="contact-subheading">{contact.subheading}</p>
        <div className="contact-actions">
          <a
            href="https://linkedin.com/in/youmna-nayel-b4b0a2301"
            target="_blank"
            rel="noreferrer"
            className="btn-contact-primary"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>{contact.connectLinkedIn}</span>
          </a>
          <a
            href="mailto:youmnanayel@gmail.com"
            className="btn-contact-secondary"
          >
            <Mail size={18} />
            <span>{contact.emailMe}</span>
          </a>
        </div>
      </div>
    </section>
  );
}