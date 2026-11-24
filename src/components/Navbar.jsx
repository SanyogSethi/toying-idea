import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Menu, X, Printer, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar({
  activeSection = 'home',
  onNavigate,
  cartCount = 0,
  onOpenCart,
  savedCount = 0,
  onSavedClick,
  language = 'EN',
  onLanguageChange
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', target: 'hero' },
    { id: 'shop', label: 'Shop', target: 'fresh-products' },
    { id: 'photo-3d', label: 'Photo → 3D', target: 'photo-to-3d' },
    { id: 'about', label: 'About', target: 'how-it-works' },
    { id: 'custom-order', label: 'Custom order', target: 'custom-cta' },
    { id: 'contact', label: 'Contact', target: 'footer' },
  ];

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(item.target, item.id);
    } else {
      const element = document.getElementById(item.target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const languages = ['EN', 'हिं', 'ਪੰ'];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo & Name */}
        <a 
          href="#hero" 
          className="brand-logo-wrap" 
          onClick={(e) => handleLinkClick(e, { target: 'hero', id: 'home' })}
          title="ToyingIdea — Custom 3D Printing Studio"
        >
          <div className="logo-box">
            {/* Playful 3D printing nozzle & cube icon */}
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <rect x="6" y="8" width="20" height="16" rx="5" fill="#FFFFFF" fillOpacity="0.25"/>
              <path d="M11 12H21M16 8V6M16 24V26M10 21L16 15L22 21" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="15" r="2.2" fill="#F3D95B"/>
            </svg>
          </div>
          <span className="brand-name">
            Toying<span className="brand-name-accent">Idea</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.target}`}
                    onClick={(e) => handleLinkClick(e, item)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                    {isActive && <span className="active-underline" />}
                  </a>
                </li>
              );
            })}
            {/* Saved Wishlist Link */}
            <li className="nav-item">
              <button 
                type="button" 
                className="nav-link saved-btn" 
                onClick={onSavedClick}
                title="Saved Items"
              >
                <Heart size={15} className="heart-icon" fill={savedCount > 0 ? "#F47745" : "none"} />
                <span>Saved</span>
                {savedCount > 0 && <span className="saved-badge">{savedCount}</span>}
              </button>
            </li>
          </ul>
        </nav>

        {/* Right Actions: Cart & Language Selector */}
        <div className="navbar-actions">
          {/* Cart Button */}
          <button 
            type="button" 
            className="cart-pill-btn"
            onClick={onOpenCart}
            aria-label="View Shopping Cart"
          >
            <ShoppingBag size={17} className="cart-icon" />
            <span className="cart-text">Cart</span>
            <span className="cart-count-badge">{cartCount}</span>
          </button>

          {/* Language Selector */}
          <div className="lang-segmented-control" role="group" aria-label="Language selector">
            {languages.map((lng) => (
              <button
                key={lng}
                type="button"
                className={`lang-option ${language === lng ? 'active' : ''}`}
                onClick={() => onLanguageChange && onLanguageChange(lng)}
              >
                {lng}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="mobile-nav-item">
                <a
                  href={`#${item.target}`}
                  onClick={(e) => handleLinkClick(e, item)}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mobile-nav-item">
              <button 
                type="button" 
                className="mobile-nav-link mobile-saved-link"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSavedClick && onSavedClick();
                }}
              >
                <Heart size={18} />
                <span>Saved Wishlist ({savedCount})</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
