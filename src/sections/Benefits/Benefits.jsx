import React from 'react';
import { Check } from 'lucide-react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    { title: "Estructura metálica reforzada", desc: "Máxima durabilidad y resistencia sísmica." },
    { title: "Diseño adaptable", desc: "Se ajusta a tus planos y necesidades espaciales." },
    { title: "Personalización total", desc: "Elegí dimensiones y distribuciones a medida." },
    { title: "Proceso claro", desc: "Asesoramiento técnico en cada etapa del proyecto." },
    { title: "Presupuesto cerrado", desc: "Sabés exactamente cuánto vas a invertir en tu estructura." }
  ];

  return (
    <section className="benefits bg-dark">
      <div className="container">
        <span className="section-label">VENTAJAS</span>
        <h2 className="section-title text-white">¿POR QUÉ ELEGIR UN SISTEMA MODULAR?</h2>
        
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                <Check size={24} />
              </div>
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
