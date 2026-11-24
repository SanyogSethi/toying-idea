import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import './Toast.css';

export default function Toast({ message, type = 'info', onClose }) {
  if (!message) return null;

  return (
    <div className={`toast-container toast-${type}`}>
      <div className="toast-icon">
        {type === 'success' ? <CheckCircle2 size={18} /> : <Info size={18} />}
      </div>
      <div className="toast-message">{message}</div>
      <button 
        type="button" 
        className="toast-close-btn" 
        onClick={onClose}
        aria-label="Close notification"
      >
        <X size={15} />
      </button>
    </div>
  );
}
