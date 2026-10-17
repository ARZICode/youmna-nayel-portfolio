import React, { useState, useEffect } from 'react';
import './assets/styles/reset.css';
import { content } from './data/content';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Experience from './components/Experience/Experience';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [lang, setLang] = useState('en');
  const t = content[lang];
  const isArabic = lang === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
  }, [lang, isArabic]);

  const toggleLanguage = () => setLang(prev => (prev === 'en' ? 'ar' : 'en'));

  return (
    <div className="app-root">
      <Navbar nav={t.nav} lang={lang} toggleLanguage={toggleLanguage} />
      <main className="w-full min-h-screen">
        <Hero hero={t.hero} lang={lang} />
        <About about={t.about} />
        <Expertise expertise={t.expertise} />
        <Experience experience={t.experience} />
        <CaseStudies caseStudies={t.caseStudies} />
        <Education education={t.education} />
        <Contact contact={t.contact} />
      </main>
      <Footer />
    </div>
  );
}