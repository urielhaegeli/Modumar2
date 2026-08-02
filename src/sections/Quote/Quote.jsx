import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { openWhatsApp } from '../../utils/whatsapp';
import './Quote.css';

const Quote = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    localidad: '',
    proyecto: 'Modulo 01',
    superficie: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hola, quiero solicitar un presupuesto.
    
Nombre: ${formData.nombre}
Teléfono: ${formData.telefono}
Email: ${formData.email}
Localidad: ${formData.localidad}
Tipo de proyecto: ${formData.proyecto}
Superficie aprox: ${formData.superficie}
Mensaje: ${formData.mensaje}`;

    openWhatsApp(message);
  };

  return (
    <section className="quote bg-dark">
      <div className="container quote-container">
        <div className="quote-info">
          <span className="section-label">PRESUPUESTO</span>
          <h2 className="quote-title">¿LISTO PARA EMPEZAR TU PROYECTO?</h2>
          <p className="quote-text">
            Contanos qué estás buscando y analizamos juntos una propuesta para vos.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span>WHATSAPP</span>
              <p>+54 9 11 1234-5678</p>
            </div>
            <div className="contact-item">
              <span>EMAIL</span>
              <p>contacto@modumar.example.com</p>
            </div>
          </div>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <input 
                type="text" 
                name="nombre" 
                placeholder="Nombre completo" 
                required 
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="telefono" 
                placeholder="Teléfono" 
                required 
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="localidad" 
                placeholder="Localidad" 
                required 
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select name="proyecto" onChange={handleChange}>
                <option value="Modulo 01">Módulo 01</option>
                <option value="Modulo 02">Módulo 02</option>
                <option value="Modulo 03">Módulo 03</option>
                <option value="Personalizado">Proyecto Personalizado</option>
              </select>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="superficie" 
                placeholder="Superficie aprox. (m²)" 
                required 
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group full-width">
            <textarea 
              name="mensaje" 
              placeholder="Tu mensaje" 
              rows="4" 
              onChange={handleChange}
            ></textarea>
          </div>
          <Button variant="primary" type="submit" className="w-full">
            SOLICITAR PRESUPUESTO POR WHATSAPP
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Quote;
