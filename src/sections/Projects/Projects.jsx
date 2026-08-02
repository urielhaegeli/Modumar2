import React from 'react';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects bg-light">
      <div className="container">
        <span className="section-label">GALERÍA</span>
        <h2 className="section-title">PROYECTOS</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
