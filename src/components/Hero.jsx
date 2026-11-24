import React from 'react';
import { ArrowRight, Sparkles, Printer, Compass } from 'lucide-react';
import './Hero.css';

export default function Hero({ onShopClick, onHowItWorksClick }) {
  return (
    <section id="hero" className="hero-section bg-cream-dotted">
      {/* Decorative Floating Background Shapes */}
      <div className="hero-deco-puzzle animate-float-deco-1" aria-hidden="true">
        {/* Yellow Puzzle Piece with dark outline */}
        <svg width="42" height="42" viewBox="0 0 100 100" fill="#F3D95B" stroke="#302319" strokeWidth="6" strokeLinejoin="round">
          <path d="M 20 20 H 42 C 42 10, 58 10, 58 20 H 80 V 42 C 90 42, 90 58, 80 58 V 80 H 58 C 58 90, 42 90, 42 80 H 20 V 58 C 10 58, 10 42, 20 42 Z" />
        </svg>
      </div>

      <div className="hero-deco-star animate-float-deco-2" aria-hidden="true">
        {/* 4-point golden star */}
        <svg width="36" height="36" viewBox="0 0 100 100" fill="#F4A719" stroke="#302319" strokeWidth="5" strokeLinejoin="round">
          <path d="M 50 5 Q 50 50, 95 50 Q 50 50, 50 95 Q 50 50, 5 50 Q 50 50, 50 5 Z" />
        </svg>
      </div>

      <div className="container hero-container">
        {/* Left Column: Typography & CTAs */}
        <div className="hero-content">
          {/* Yellow Badge */}
          <div className="hero-badge-wrap">
            <span className="badge-pill-yellow">
              <span className="badge-icon">🖨️</span>
              CUSTOM 3D PRINTING STUDIO
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Your <span className="text-orange">idea,</span> printed <br />
            into something <span className="text-teal">real</span> <br />
            &amp; <span className="text-amber">fun.</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="hero-subtitle">
            Personalised name gifts, festival decor, miniatures of people and pets, 
            and home decor you can’t buy off a shelf — 3D printed in our Patiala, Punjab studio 
            and delivered across India.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <button 
              type="button" 
              className="btn-primary hero-btn-shop"
              onClick={onShopClick}
            >
              <span>Shop the collection</span>
            </button>

            <button 
              type="button" 
              className="btn-outline hero-btn-works"
              onClick={onHowItWorksClick}
            >
              <span>How it works</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Blocks & Floating Badges */}
        <div className="hero-visual">
          <div className="hero-visual-card">
            {/* Top-left Floating Badge */}
            <div className="floating-badge-wrap badge-pos-top-left animate-float-gentle">
              <span className="badge-floating">
                <span className="badge-emoji">✏️</span> Made to order
              </span>
            </div>

            {/* Main 3D Interlocking Blocks Image */}
            <div className="hero-image-stage animate-float">
              <img 
                src="/images/hero-blocks-transparent.png" 
                alt="ToyingIdea custom 3D printed interlocking TI toy blocks" 
                className="hero-main-img"
              />
              {/* Soft Drop Shadow Ellipse */}
              <div className="hero-ground-shadow" />
            </div>

            {/* Bottom-right Floating Badge */}
            <div className="floating-badge-wrap badge-pos-bottom-right animate-float-gentle" style={{ animationDelay: '1.5s' }}>
              <span className="badge-floating">
                <span className="badge-emoji">🚚</span> Ships pan-India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
