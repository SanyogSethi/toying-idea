import React from 'react';
import ProductCard from './ProductCard';
import { freshProducts } from '../data/products';
import './ProductShowcase.css';

export default function ProductShowcase({
  onProductClick,
  onAddToCart,
  onToggleSave,
  savedIds = []
}) {
  return (
    <section id="fresh-products" className="product-showcase-section bg-cream-dotted">
      {/* Decorative Side Elements matching Reference Screenshot 2 */}
      <div className="deco-lego-brick animate-float-deco-1" aria-hidden="true">
        {/* Teal 2-stud Lego Brick with dark brown outline */}
        <svg width="48" height="28" viewBox="0 0 70 40" fill="#5BBDBB" stroke="#302319" strokeWidth="4.5" strokeLinejoin="round">
          {/* 2 Studs on top */}
          <rect x="12" y="3" width="18" height="8" rx="2" fill="#5BBDBB" stroke="#302319" strokeWidth="4" />
          <rect x="40" y="3" width="18" height="8" rx="2" fill="#5BBDBB" stroke="#302319" strokeWidth="4" />
          {/* Main Body */}
          <rect x="4" y="11" width="62" height="25" rx="6" fill="#5BBDBB" stroke="#302319" strokeWidth="4.5" />
        </svg>
      </div>

      <div className="deco-teal-ring animate-float-deco-2" aria-hidden="true">
        {/* Teal Donut Ring with dark brown outline */}
        <svg width="38" height="38" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="22" stroke="#5BBDBB" strokeWidth="9" />
          <circle cx="30" cy="30" r="26.5" stroke="#302319" strokeWidth="3" />
          <circle cx="30" cy="30" r="17.5" stroke="#302319" strokeWidth="3" />
        </svg>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="showcase-header">
          <span className="showcase-tag">FRESH OFF THE PRINTER</span>
        </div>

        {/* Product Cards Row */}
        <div className="products-grid">
          {freshProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
              onAddToCart={onAddToCart}
              onToggleSave={onToggleSave}
              isSaved={savedIds.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
