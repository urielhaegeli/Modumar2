import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "ELEGÍ TU MÓDULO",
      description: "Explorá nuestro catálogo de módulos base y seleccioná el que mejor se adapte a tu idea inicial."
    },
    {
      num: "02",
      title: "DEFINIMOS EL PROYECTO",
      description: "Analizamos juntos la implantación, orientación y requerimientos específicos de tu terreno."
    },
    {
      num: "03",
      title: "PERSONALIZAMOS LA ESTRUCTURA",
      description: "Ajustamos dimensiones, refuerzos y detalles estructurales para que el módulo sea exactamente lo que buscás."
    },
    {
      num: "04",
      title: "RECIBÍS TU PRESUPUESTO",
      description: "Te entregamos una propuesta detallada y personalizada para la fabricación de tu estructura metálica."
    }
  ];

  return (
    <section className="how-it-works bg-dark">
      <div className="container">
        <span className="section-label text-center">PROCESO</span>
        <h2 className="section-title text-center text-white">¿CÓMO FUNCIONA?</h2>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-num">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
