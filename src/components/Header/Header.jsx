import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Módulos', href: '#modulos' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Personalización', href: '#personalizacion' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#inicio" className="logo-container">
          <img src={siteConfig.LOGO_URL} alt={siteConfig.COMPANY_NAME} className="logo-img" />
          <div className="logo-text">
            <span className="brand-name">{siteConfig.COMPANY_NAME}</span>
            <span className="brand-tagline">MÓDULOS</span>
          </div>
        </a>

        <nav className={`nav-desktop ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-only-cta">
            <Button variant="primary" onClick={() => window.location.href = '#contacto'}>
              Solicitar Presupuesto
            </Button>
          </div>
        </nav>

        <div className="header-actions">
          <Button 
            variant="outline" 
            className="header-cta desktop-only"
            onClick={() => window.location.href = '#contacto'}
          >
            Solicitar Presupuesto
          </Button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
