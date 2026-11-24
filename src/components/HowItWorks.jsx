import React from 'react';
import { Lightbulb, Cog, PackageCheck, Sparkles, ArrowRight } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks({ onStartCustom }) {
  const steps = [
    {
      step: '01',
      title: 'Share Your Idea',
      description: 'Tell us what you want to create. Share a photo, sketch, reference link, or simply describe what you have in mind.',
      icon: <Lightbulb size={28} className="step-icon-svg" />,
      tag: 'Idea & Sketch',
      accent: 'var(--accent-orange)'
    },
    {
      step: '02',
      title: 'We Create It',
      description: 'Our team in Patiala models your idea in 3D CAD software and precision 3D-prints it layer by layer using premium materials.',
      icon: <Cog size={28} className="step-icon-svg" />,
      tag: '3D CAD & Print',
      accent: 'var(--accent-teal)'
    },
    {
      step: '03',
      title: 'Delivered to You',
      description: 'Your custom creation is inspected, lovingly packed in snug protective eco-boxes, and delivered straight to your doorstep across India.',
      icon: <PackageCheck size={28} className="step-icon-svg" />,
      tag: 'Doorstep Delivery',
      accent: 'var(--accent-amber)'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="how-header">
          <span className="section-tag">SIMPLE 3-STEP PROCESS</span>
          <h2 className="section-title">From your imagination to reality.</h2>
          <p className="how-subtitle">
            Whether it’s a bespoke birthday gift or a replacement part, turning your dream into a physical object has never been simpler.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((st, idx) => (
            <div key={idx} className="step-card">
              <div className="step-top-row">
                <span className="step-number" style={{ color: st.accent }}>
                  {st.step}
                </span>
                <div className="step-icon-bubble" style={{ backgroundColor: `${st.accent}18`, color: st.accent }}>
                  {st.icon}
                </div>
              </div>

              <span className="step-tag">{st.tag}</span>
              <h3 className="step-title">{st.title}</h3>
              <p className="step-description">{st.description}</p>

              {idx < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="how-cta-banner">
          <div className="how-cta-text">
            <h4>Ready to hold your idea in your hands?</h4>
            <p>Our Patiala studio prints and dispatches custom orders in 3–5 working days.</p>
          </div>
          <button 
            type="button" 
            className="btn-primary"
            onClick={onStartCustom}
          >
            <Sparkles size={18} />
            <span>Turn an Idea into 3D</span>
          </button>
        </div>
      </div>
    </section>
  );
}
