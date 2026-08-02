import React from 'react';
import { Box, Layers, Settings, Ruler } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Box size={32} />,
      title: "ESTRUCTURA METÁLICA",
      description: "Base sólida y duradera para tu proyecto."
    },
    {
      icon: <Layers size={32} />,
      title: "DISEÑO FLEXIBLE",
      description: "Adaptable a diferentes distribuciones."
    },
    {
      icon: <Settings size={32} />,
      title: "SISTEMA MODULAR",
      description: "Construcción eficiente y escalable."
    },
    {
      icon: <Ruler size={32} />,
      title: "PRESUPUESTO PERSONALIZADO",
      description: "Acorde a tus necesidades específicas."
    }
  ];

  return (
    <section className="features bg-dark">
      <div className="container features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
