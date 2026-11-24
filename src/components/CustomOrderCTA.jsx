import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import './CustomOrderCTA.css';

export default function CustomOrderCTA({ onOpenCustomModal }) {
  return (
    <section id="custom-cta" className="custom-cta-section">
      <div className="container">
        <div className="custom-cta-card">
          {/* Floating Decorative Orbs & Shapes */}
          <div className="cta-deco-shape cta-deco-1 animate-float-deco-1" aria-hidden="true" />
          <div className="cta-deco-shape cta-deco-2 animate-float-deco-2" aria-hidden="true" />

          <div className="custom-cta-content">
            <span className="cta-pill-tag">Bespoke 3D Fabrication</span>
            <h2 className="custom-cta-title">Dream it. Design it. Print it.</h2>
            <p className="custom-cta-description">
              Have something unique in mind? A special gift, architectural model, replacement gadget, 
              or unique art piece? Let’s bring your imagination to life.
            </p>

            <div className="custom-cta-buttons">
              <button 
                type="button" 
                className="btn-primary cta-btn-main"
                onClick={onOpenCustomModal}
              >
                <Sparkles size={18} />
                <span>Start a Custom Order</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <p className="cta-secondary-note">
              ✨ Almost anything can be made with a little imagination. No minimum order quantity!
            </p>
          </div>

          <div className="cta-preview-floating">
            <div className="cta-img-card card-rotate-left animate-float-gentle">
              <img src="/images/fresh-ambient.png" alt="Custom lamp preview" />
              <span className="card-badge-label">💡 Custom Lamp</span>
            </div>
            <div className="cta-img-card card-rotate-right animate-float" style={{ animationDelay: '1s' }}>
              <img src="/images/cat-festival.png" alt="Custom snowman preview" />
              <span className="card-badge-label">⛄ Festival Decor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
