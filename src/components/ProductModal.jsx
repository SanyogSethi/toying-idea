import React, { useState } from 'react';
import { X, Star, Check, ShoppingBag, Heart, Shield, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';
import './ProductModal.css';

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
  onToggleSave,
  isSaved
}) {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState('Teal');
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: 'Teal', hex: '#5BBDBB' },
    { name: 'Warm Orange', hex: '#F47745' },
    { name: 'Butter Yellow', hex: '#F3D95B' },
    { name: 'Ivory Cream', hex: '#FBF6EC' },
  ];

  const handleAdd = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 }
      });
    } catch (e) {}
    onAddToCart && onAddToCart(product, quantity, selectedColor);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-icon-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="product-modal-grid">
          {/* Left Image View */}
          <div className="product-modal-image-col">
            <div className="modal-img-container">
              <img src={product.image} alt={product.name} />
              {product.badge && (
                <span className="modal-badge">{product.badge}</span>
              )}
            </div>
            <div className="modal-craft-tag">
              <span>🖨️ Precision FDM Printed • 0.16mm Layer Height</span>
            </div>
          </div>

          {/* Right Product Details */}
          <div className="product-modal-info-col">
            <span className="modal-category-tag">{product.category || 'Custom 3D Print'}</span>
            <h2 className="modal-title">{product.name}</h2>

            <div className="modal-reviews-row">
              <div className="stars-wrap">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#F4A719" color="#F4A719" />
                ))}
              </div>
              <span className="rating-num">{product.rating || '4.9'}</span>
              <span className="reviews-count">({product.reviewsCount || 42} reviews)</span>
            </div>

            <div className="modal-price-wrap">
              <span className="modal-price">₹{product.price}</span>
              {product.originalPrice && (
                <span className="modal-original-price">₹{product.originalPrice}</span>
              )}
              <span className="modal-discount-pill">
                Save ₹{(product.originalPrice || Math.round(product.price * 1.25)) - product.price}
              </span>
            </div>

            <p className="modal-desc">{product.description}</p>

            {/* Color selection */}
            <div className="modal-options-block">
              <label className="option-label">Filament Color Accent: <strong>{selectedColor}</strong></label>
              <div className="color-swatches">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    className={`color-swatch-btn ${selectedColor === c.name ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => setSelectedColor(c.name)}
                    title={c.name}
                  >
                    {selectedColor === c.name && <Check size={14} color="#302319" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Features check list */}
            {product.features && (
              <div className="modal-features-list">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="modal-feature-item">
                    <Check size={15} className="feat-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="modal-actions-row">
              <div className="modal-qty-picker">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <button 
                type="button" 
                className="btn-primary modal-add-btn"
                onClick={handleAdd}
              >
                <ShoppingBag size={18} />
                <span>Add to Cart • ₹{product.price * quantity}</span>
              </button>

              <button 
                type="button" 
                className={`modal-wish-btn ${isSaved ? 'is-saved' : ''}`}
                onClick={() => onToggleSave && onToggleSave(product)}
                title="Save for later"
              >
                <Heart size={18} fill={isSaved ? "#F47745" : "none"} />
              </button>
            </div>

            <div className="modal-badges-foot">
              <div className="foot-badge">
                <Truck size={15} />
                <span>Ships across India in 3–5 days</span>
              </div>
              <div className="foot-badge">
                <Shield size={15} />
                <span>Damage-free delivery replacement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
