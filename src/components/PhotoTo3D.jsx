import React, { useState } from 'react';
import { Sparkles, Camera, Layers, Wand2, Check } from 'lucide-react';
import './PhotoTo3D.css';

export default function PhotoTo3D({ onStartCustom }) {
  const [activeTab, setActiveTab] = useState('pet'); // 'pet' or 'portrait'

  const comparisonData = {
    pet: {
      beforeImg: '/images/photo-real.jpg',
      afterImg: '/images/photo-3d-print.jpg',
      title: 'Beloved Pets & Companions',
      desc: 'Turn a snapshot of your dog, cat, or parrot into a charming miniature figurine that captures their personality forever.'
    },
    portrait: {
      beforeImg: '/images/cat-miniature.png',
      afterImg: '/images/cat-lamp.png',
      title: 'Personalized Memorabilia',
      desc: 'From wedding poses to graduation milestones, preserve your favorite moments in 3D tactile form.'
    }
  };

  const current = comparisonData[activeTab];

  return (
    <section id="photo-to-3d" className="photo-to-3d-section bg-cream-dotted">
      <div className="container">
        <div className="photo-3d-wrapper">
          {/* Left Text / Info */}
          <div className="photo-3d-content">
            <span className="section-tag">MOST LOVED GIFT</span>
            <h2 className="photo-3d-title">Turn your favourite photo into a 3D memory.</h2>
            <p className="photo-3d-description">
              Have a favourite photograph of yourself, your family, or your pet? 
              Let our digital sculptors and 3D printers transform it into a personalised 3D miniature you can hold, gift, and treasure.
            </p>

            {/* Feature highlights */}
            <div className="photo-features-list">
              <div className="photo-feature-item">
                <div className="feature-check-icon"><Check size={16} /></div>
                <span>Capture fine facial features &amp; real posture</span>
              </div>
              <div className="photo-feature-item">
                <div className="feature-check-icon"><Check size={16} /></div>
                <span>Printed with multi-tone premium eco-resin / PLA</span>
              </div>
              <div className="photo-feature-item">
                <div className="feature-check-icon"><Check size={16} /></div>
                <span>Custom engraved wooden pedestal available</span>
              </div>
            </div>

            <div className="photo-cta-row">
              <button 
                type="button" 
                className="btn-primary photo-btn"
                onClick={onStartCustom}
              >
                <Wand2 size={18} />
                <span>Create Your Miniature</span>
              </button>
              <span className="photo-guarantee-note">✨ Free 3D preview before printing</span>
            </div>
          </div>

          {/* Right Visual Before/After Showcase */}
          <div className="photo-3d-visual">
            <div className="comparison-card">
              <div className="comparison-tabs">
                <button 
                  type="button" 
                  className={`tab-btn ${activeTab === 'pet' ? 'active' : ''}`}
                  onClick={() => setActiveTab('pet')}
                >
                  🐶 Pet Miniature
                </button>
                <button 
                  type="button" 
                  className={`tab-btn ${activeTab === 'portrait' ? 'active' : ''}`}
                  onClick={() => setActiveTab('portrait')}
                >
                  🎨 3D Lithophane
                </button>
              </div>

              <div className="comparison-frames">
                {/* Before Frame */}
                <div className="frame-card frame-before">
                  <span className="frame-label label-before">
                    <Camera size={13} />
                    <span>Your Photo</span>
                  </span>
                  <div className="frame-img-box">
                    <img src={current.beforeImg} alt="Original photo" className="frame-img" />
                  </div>
                </div>

                {/* Transfer Arrow Indicator */}
                <div className="transfer-badge animate-float-gentle">
                  <Wand2 size={18} />
                  <span>3D Magic</span>
                </div>

                {/* After Frame */}
                <div className="frame-card frame-after">
                  <span className="frame-label label-after">
                    <Layers size={13} />
                    <span>3D Miniature</span>
                  </span>
                  <div className="frame-img-box">
                    <img src={current.afterImg} alt="3D Printed Miniature" className="frame-img" />
                  </div>
                </div>
              </div>

              <div className="comparison-caption">
                <strong>{current.title}:</strong> {current.desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
