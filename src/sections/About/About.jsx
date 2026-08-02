import React from 'react';
import Button from '../../components/Button/Button';
import './About.css';

const About = () => {
  return (
    <section className="about bg-light">
      <div className="container about-container">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1590069230002-70cc6a47d33b?auto=format&fit=crop&q=80&w=1000" alt="Estructura Metálica" />
        </div>
        <div className="about-content">
          <span className="section-label">QUÉ HACEMOS</span>
          <h2 className="section-title">
            EL PUNTO DE PARTIDA <br />
            DE TU PROYECTO.
          </h2>
          <p className="about-text">
            Desarrollamos módulos habitacionales mediante estructuras metálicas pensadas para convertirse en el punto de partida de tu vivienda.
          </p>
          <p className="about-text">
            Fabricamos estructuras adaptables y ofrecemos posibilidades de personalización según las necesidades de cada proyecto.
          </p>
          <Button variant="dark" onClick={() => window.location.href = '#como-funciona'}>
            CONOCÉ NUESTRO SISTEMA →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
