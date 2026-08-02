import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../../components/Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            CONSTRUIMOS <br />
            LA ESTRUCTURA. <br />
            <span className="text-beige">VOS IMAGINÁS <br />
            EL HOGAR.</span>
          </h1>
          <p className="hero-subtitle">
            Módulos habitacionales con estructura metálica, diseñados para adaptarse a tu proyecto.
          </p>
          <div className="hero-btns">
            <Button variant="primary" onClick={() => window.location.href = '#contacto'}>
              SOLICITAR PRESUPUESTO
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '#modulos'}>
              CONOCÉ NUESTROS MÓDULOS
            </Button>
          </div>
          <div className="hero-tags">
            <span>ESTRUCTURAS METÁLICAS</span>
            <span className="tag-separator">•</span>
            <span>MÓDULOS HABITACIONALES</span>
            <span className="tag-separator">•</span>
            <span>PROYECTOS PERSONALIZADOS</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
