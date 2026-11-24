import React, { useState } from 'react';
import { X, Sparkles, Send, Upload, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import './CustomOrderModal.css';

export default function CustomOrderModal({ isOpen, onClose, onSubmitSuccess }) {
  if (!isOpen) return null;

  const [projectType, setProjectType] = useState('Personalised Name / Sign');
  const [material, setMaterial] = useState('Eco PLA (Matte Finish)');
  const [color, setColor] = useState('Sunset Orange');
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Patiala');

  const projectTypes = [
    'Personalised Name / Sign',
    'Custom Figurine / Pet Miniature',
    'Ambient Lamp / Home Decor',
    'Festival Diya / Ornament',
    'Replacement Part / Prototype'
  ];

  const materials = [
    'Eco PLA (Matte Finish)',
    'Silk Shimmer PLA',
    'Wood Composite PLA',
    'Glow-in-the-Dark PLA',
    'High-Detail Resin'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}
    if (onSubmitSuccess) {
      onSubmitSuccess({
        projectType,
        material,
        color,
        description,
        customerName: customerName || 'Friend',
        city
      });
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="custom-order-modal" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-icon-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="custom-modal-header">
          <div className="header-pill">✨ Custom 3D Studio Service</div>
          <h2 className="modal-heading">Bring Your Idea to Life</h2>
          <p className="modal-sub">Tell our Patiala studio what you'd like to fabricate. We will craft a 3D digital model and share a preview.</p>
        </div>

        <form onSubmit={handleSubmit} className="custom-form">
          {/* Project Type */}
          <div className="form-group">
            <label className="form-label">What are we printing?</label>
            <div className="chips-grid">
              {projectTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`chip-btn ${projectType === t ? 'active' : ''}`}
                  onClick={() => setProjectType(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label" htmlFor="order-desc">
              Idea description or custom text:
            </label>
            <textarea
              id="order-desc"
              rows={3}
              className="form-textarea"
              placeholder="e.g. Personalized desk nameplate for 'Simran', height 4 inches with a small musical note..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-row-2">
            {/* Material */}
            <div className="form-group">
              <label className="form-label">Filament / Material:</label>
              <select 
                className="form-select"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              >
                {materials.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="form-group">
              <label className="form-label">Delivery Destination:</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Patiala, Chandigarh, Delhi..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row-2">
            {/* Name */}
            <div className="form-group">
              <label className="form-label">Your Name:</label>
              <input
                type="text"
                className="form-input"
                placeholder="Simran Kaur"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>

            {/* WhatsApp / Phone */}
            <div className="form-group">
              <label className="form-label">WhatsApp Number:</label>
              <input
                type="tel"
                className="form-input"
                placeholder="+91 98765 00000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="custom-submit-row">
            <button type="submit" className="btn-primary custom-submit-btn">
              <Sparkles size={18} />
              <span>Send 3D Printing Inquiry</span>
            </button>
            <span className="guarantee-text">🔒 No payment required until 3D preview is approved!</span>
          </div>
        </form>
      </div>
    </div>
  );
}
