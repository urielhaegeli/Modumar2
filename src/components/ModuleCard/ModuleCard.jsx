import React from 'react';
import './ModuleCard.css';

const ModuleCard = ({ module, onClick }) => {
  return (
    <div className="module-card" onClick={onClick}>
      <div className="module-card-image">
        <img src={module.image} alt={module.name} />
        <div className="module-card-overlay">
          <span>VER DETALLES</span>
        </div>
      </div>
      <div className="module-card-info">
        <div className="module-card-header">
          <h3 className="module-name">{module.name}</h3>
          <span className="module-surface">{module.surface}</span>
        </div>
        <p className="module-desc">{module.description}</p>
        <button className="module-consult-btn">CONSULTAR →</button>
      </div>
    </div>
  );
};

export default ModuleCard;
