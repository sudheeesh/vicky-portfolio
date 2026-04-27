import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-primary-bg min-h-screen text-text-primary selection:bg-accent-1/30 selection:text-white">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Skills />
        <Experience />
        <CaseStudies />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
