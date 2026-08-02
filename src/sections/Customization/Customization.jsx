import React from 'react';
import Button from '../../components/Button/Button';
import { openWhatsApp } from '../../utils/whatsapp';
import './Customization.css';

const Customization = () => {
  return (
    <section className="customization bg-dark-alt">
      <div className="container customization-container">
        <div className="customization-content">
          <span className="section-label">A MEDIDA</span>
          <h2 className="section-title text-white">
            TU PROYECTO, <br />
            A TU MEDIDA.
          </h2>
          <p className="customization-text">
            No todos los proyectos son iguales. Si tenés una idea, un terreno o una distribución específica, podemos analizar tu proyecto y preparar una propuesta personalizada.
          </p>
          <Button 
            variant="primary" 
            onClick={() => openWhatsApp('Hola, quiero consultar por un proyecto personalizado.')}
          >
            QUIERO PERSONALIZAR MI MÓDULO
          </Button>
        </div>
        <div className="customization-image">
          <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1000" alt="Personalización" />
        </div>
      </div>
    </section>
  );
};

export default Customization;
