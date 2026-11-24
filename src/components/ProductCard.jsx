import React from 'react';
import { Eye, Heart, ShoppingBag, Plus } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({
  product,
  onProductClick,
  onAddToCart,
  onToggleSave,
  isSaved = false
}) {
  const { name, price, originalPrice, image, badge } = product;

  return (
    <div 
      className="product-card"
      onClick={() => onProductClick && onProductClick(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onProductClick && onProductClick(product);
      }}
    >
      {/* Product Image Container */}
      <div className="product-image-wrap">
        <img 
          src={image} 
          alt={name} 
          className="product-img" 
          loading="lazy"
        />

        {/* Quick action buttons floating on card */}
        <div className="product-quick-actions" onClick={(e) => e.stopPropagation()}>
          <button 
            type="button" 
            className={`action-btn-save ${isSaved ? 'is-saved' : ''}`}
            onClick={() => onToggleSave && onToggleSave(product)}
            title={isSaved ? "Remove from wishlist" : "Save to wishlist"}
          >
            <Heart size={16} fill={isSaved ? "#F47745" : "none"} />
          </button>
          
          <button 
            type="button" 
            className="action-btn-cart"
            onClick={() => onAddToCart && onAddToCart(product)}
            title="Add to cart"
          >
            <Plus size={16} />
          </button>
        </div>

        {badge && (
          <span className="product-badge">{badge}</span>
        )}
      </div>

      {/* Product Information */}
      <div className="product-info">
        <h3 className="product-title">{name}</h3>
        <div className="product-price-row">
          <span className="product-price">₹{price}</span>
          {originalPrice && (
            <span className="product-original-price">₹{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
