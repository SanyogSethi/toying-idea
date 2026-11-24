import React from 'react';
import './BenefitsStrip.css';

export default function BenefitsStrip() {
  const benefits = [
    { emoji: '🎨', title: 'Any colour you like' },
    { emoji: '⚡', title: 'Printed in 3–5 days' },
    { emoji: '🔒', title: 'Secure online payment' },
    { emoji: '📦', title: 'Safe, snug packaging' },
  ];

  return (
    <div className="benefits-strip-wrapper">
      <div className="benefits-main-strip">
        <div className="container">
          <div className="benefits-row">
            {benefits.map((b, idx) => (
              <div key={idx} className="benefit-item">
                <span className="benefit-emoji" role="img" aria-label={b.title}>
                  {b.emoji}
                </span>
                <span className="benefit-title">{b.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scalloped Bottom Edge Divider using SVG pattern for crisp anti-aliasing */}
      <div className="scallop-divider-wrap" aria-hidden="true">
        <svg className="scallop-svg" width="100%" height="18" preserveAspectRatio="none">
          <defs>
            <pattern id="scallopPattern" width="28" height="18" patternUnits="userSpaceOnUse">
              {/* Semicircular convex scalloped lobe pointing downward */}
              <path 
                d="M 0,0 C 4,14 24,14 28,0 Z" 
                fill="#5BBDBB" 
              />
            </pattern>
          </defs>
          <rect width="100%" height="18" fill="url(#scallopPattern)" />
        </svg>
      </div>
    </div>
  );
}
