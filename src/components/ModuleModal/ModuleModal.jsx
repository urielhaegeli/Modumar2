import React from 'react';
import { X } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import Button from '../Button/Button';
import './ModuleModal.css';

const ModuleModal = ({ module, onClose }) => {
  if (!module) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-grid">
          <div className="modal-image">
            <img src={module.image} alt={module.name} />
          </div>
          <div className="modal-info">
            <h2 className="modal-title">{module.name}</h2>
            <span className="modal-surface">{module.surface}</span>
            <p className="modal-description">{module.description}</p>
            
            <div className="modal-features">
              <h3>Características principales:</h3>
              <ul>
                {module.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <Button 
              variant="primary" 
              onClick={() => openWhatsApp(`Hola, quiero consultar por el ${module.name} de ${module.surface}.`)}
            >
              SOLICITAR PRESUPUESTO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleModal;
