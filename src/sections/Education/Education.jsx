import React from 'react';
import './Education.css';

const Education = () => {
  const steps = [
    { num: "01", title: "ESTRUCTURA METÁLICA", desc: "La base sólida de tu proyecto." },
    { num: "02", title: "CERRAMIENTOS", desc: "Muros y aberturas según diseño." },
    { num: "03", title: "INSTALACIONES", desc: "Eléctrica, sanitaria y climatización." },
    { num: "04", title: "TERMINACIONES", desc: "Revestimientos y detalles finales." },
    { num: "05", title: "VIVIENDA", desc: "Tu hogar listo para habitar." }
  ];

  return (
    <section className="education bg-light">
      <div className="container">
        <span className="section-label text-center">EL CAMINO</span>
        <h2 className="section-title text-center">DE ESTRUCTURA A VIVIENDA</h2>
        <p className="education-intro text-center">
          Entendé las etapas de construcción. Los pasos posteriores a la estructura pueden depender del proyecto y de los servicios contratados.
        </p>
        
        <div className="education-timeline">
          {steps.map((step, index) => (
            <div key={index} className="edu-step">
              <div className="edu-num">{step.num}</div>
              <div className="edu-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="edu-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
