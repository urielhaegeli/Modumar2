import React, { useState } from 'react';
import { modules } from '../../data/modules';
import ModuleCard from '../../components/ModuleCard/ModuleCard';
import ModuleModal from '../../components/ModuleModal/ModuleModal';
import './Modules.css';

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <section className="modules bg-light">
      <div className="container">
        <span className="section-label">CATÁLOGO</span>
        <h2 className="section-title">NUESTROS MÓDULOS</h2>
        
        <div className="modules-grid">
          {modules.map((module) => (
            <ModuleCard 
              key={module.id} 
              module={module} 
              onClick={() => setSelectedModule(module)}
            />
          ))}
        </div>
      </div>

      {selectedModule && (
        <ModuleModal 
          module={selectedModule} 
          onClose={() => setSelectedModule(null)} 
        />
      )}
    </section>
  );
};

export default Modules;
