import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './sections/Hero/Hero';
import Features from './sections/Features/Features';
import About from './sections/About/About';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import Modules from './sections/Modules/Modules';
import Customization from './sections/Customization/Customization';
import Projects from './sections/Projects/Projects';
import Benefits from './sections/Benefits/Benefits';
import Education from './sections/Education/Education';
import FAQ from './sections/FAQ/FAQ';
import Quote from './sections/Quote/Quote';
import Footer from './sections/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <Features />
        <About />
        <section id="como-funciona">
          <HowItWorks />
        </section>
        <section id="modulos">
          <Modules />
        </section>
        <section id="personalizacion">
          <Customization />
        </section>
        <section id="proyectos">
          <Projects />
        </section>
        <Benefits />
        <Education />
        <FAQ />
        <section id="contacto">
          <Quote />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
