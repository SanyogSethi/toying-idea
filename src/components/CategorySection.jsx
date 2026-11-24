import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';
import './CategorySection.css';

export default function CategorySection({ onSelectCategory }) {
  return (
    <section id="categories" className="category-section bg-cream-dotted">
      <div className="container">
        {/* Section Heading matching Screenshot 3 */}
        <div className="category-section-header">
          <span className="section-tag">WHAT WE MAKE</span>
          <h2 className="section-title">Pick a category, or dream up your own.</h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="category-grid">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
