import React from 'react';
import { MapPin, Mail, Phone, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer({ onNavigate, onSelectCategory }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer-wrap">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-row">
              <div className="footer-logo-box">
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <rect x="6" y="8" width="20" height="16" rx="5" fill="#FFFFFF" fillOpacity="0.25"/>
                  <path d="M11 12H21M16 8V6M16 24V26M10 21L16 15L22 21" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="15" r="2.2" fill="#F3D95B"/>
                </svg>
              </div>
              <span className="footer-brand-title">
                Toying<span className="brand-accent">Idea</span>
              </span>
            </div>
            
            <p className="footer-about-text">
              Small ideas, big imagination. Custom 3D-printed creations made with love in Patiala, Punjab and delivered safely across all corners of India.
            </p>

            <div className="footer-social-row">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
              <a href="mailto:hello@toyingidea.com" className="social-icon-btn" aria-label="Email us">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><button type="button" onClick={() => scrollTo('hero')}>Home</button></li>
              <li><button type="button" onClick={() => scrollTo('fresh-products')}>Shop Collection</button></li>
              <li><button type="button" onClick={() => scrollTo('how-it-works')}>About Studio</button></li>
              <li><button type="button" onClick={() => scrollTo('photo-to-3d')}>Photo → 3D</button></li>
              <li><button type="button" onClick={() => scrollTo('custom-cta')}>Custom Order</button></li>
              <li><button type="button" onClick={() => scrollTo('footer')}>Contact Us</button></li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Categories</h4>
            <ul className="footer-links-list">
              <li><button type="button" onClick={() => scrollTo('categories')}>Name &amp; Text Gifts</button></li>
              <li><button type="button" onClick={() => scrollTo('categories')}>Festival Decor</button></li>
              <li><button type="button" onClick={() => scrollTo('categories')}>Miniatures of Pets &amp; People</button></li>
              <li><button type="button" onClick={() => scrollTo('categories')}>Parametric Home Decor</button></li>
              <li><button type="button" onClick={() => scrollTo('categories')}>Planters &amp; Ambient Lamps</button></li>
            </ul>
          </div>

          {/* Contact Studio Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Studio Location</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Model Town, Patiala, Punjab, 147001, India</span>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>hello@toyingidea.com</span>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>+91 98765 43210 (Mon–Sat, 10am–7pm)</span>
              </div>
            </div>
            <div className="footer-badge-box">
              <span>🇮🇳 Proudly Crafted in Punjab</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 ToyingIdea. All rights reserved.</p>
          <p className="footer-craft-love">
            Handcrafted with <Heart size={14} className="heart-inline" fill="#F47745" color="#F47745" /> in Patiala
          </p>
        </div>
      </div>
    </footer>
  );
}
