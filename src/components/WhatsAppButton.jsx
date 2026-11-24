import React from 'react';
import './WhatsAppButton.css';

export default function WhatsAppButton({ onClick }) {
  return (
    <div className="whatsapp-floating-wrap">
      <button 
        type="button" 
        className="whatsapp-btn animate-pulse-glow"
        onClick={onClick}
        aria-label="Contact ToyingIdea studio on WhatsApp"
        title="Chat with ToyingIdea on WhatsApp"
      >
        {/* Crisp WhatsApp Icon */}
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.08L2 22L7.07 20.67C8.53 21.52 10.22 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#25D366"/>
          <path d="M17.5 14.33C17.22 14.2 15.86 13.52 15.61 13.43C15.36 13.34 15.17 13.29 14.99 13.57C14.8 13.84 14.28 14.47 14.12 14.65C13.96 14.83 13.8 14.86 13.52 14.72C13.25 14.59 12.35 14.29 11.29 13.34C10.46 12.6 9.9 11.68 9.74 11.4C9.58 11.13 9.72 10.98 9.86 10.84C9.98 10.72 10.13 10.53 10.27 10.37C10.41 10.21 10.45 10.09 10.54 9.91C10.64 9.73 10.59 9.57 10.52 9.43C10.45 9.3 9.9 7.94 9.67 7.39C9.45 6.85 9.22 6.92 9.06 6.91H8.54C8.36 6.91 8.06 6.98 7.81 7.25C7.56 7.52 6.86 8.18 6.86 9.53C6.86 10.88 7.84 12.18 7.98 12.36C8.12 12.54 9.9 15.29 12.63 16.47C13.28 16.75 13.79 16.92 14.18 17.04C14.84 17.25 15.43 17.22 15.9 17.15C16.43 17.07 17.52 16.49 17.75 15.85C17.98 15.21 17.98 14.66 17.91 14.55C17.84 14.43 17.68 14.37 17.5 14.33Z" fill="#FFFFFF"/>
        </svg>
      </button>
    </div>
  );
}
