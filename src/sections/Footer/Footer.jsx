import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark-alt">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo-container">
            <img src={siteConfig.LOGO_URL} alt={siteConfig.COMPANY_NAME} className="logo-img" />
            <div className="logo-text">
              <span className="brand-name">{siteConfig.COMPANY_NAME}</span>
              <span className="brand-tagline">MÓDULOS</span>
            </div>
          </div>
          <p className="footer-desc">
            Especialistas en estructuras metálicas y módulos habitacionales de alta gama.
          </p>
          <div className="social-links">
            <a href={siteConfig.INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={20} /></a>
            <a href={siteConfig.FACEBOOK_URL} target="_blank" rel="noreferrer"><Facebook size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>NAVEGACIÓN</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#modulos">Módulos</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>CONTACTO</h4>
          <ul>
            <li><Phone size={16} /> {siteConfig.WHATSAPP_NUMBER}</li>
            <li><Mail size={16} /> {siteConfig.EMAIL}</li>
            <li>{siteConfig.ADDRESS}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {siteConfig.COMPANY_NAME}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
