import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faq } from '../../data/faq';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq bg-light">
      <div className="container">
        <span className="section-label text-center">CONSULTAS</span>
        <h2 className="section-title text-center">PREGUNTAS FRECUENTES</h2>
        
        <div className="faq-list">
          {faq.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
