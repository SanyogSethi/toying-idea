import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CategoryCard.css';

export default function CategoryCard({ category, onSelectCategory }) {
  const { title, description, label, image } = category;

  return (
    <div 
      className="category-card"
      onClick={() => onSelectCategory && onSelectCategory(category)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onSelectCategory && onSelectCategory(category);
      }}
    >
      <div className="category-image-wrap">
        <img 
          src={image} 
          alt={title} 
          className="category-img" 
          loading="lazy"
        />
      </div>

      <div className="category-content">
        <h3 className="category-title">{title}</h3>
        <p className="category-desc">{description}</p>
        <div className="category-link">
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
}
