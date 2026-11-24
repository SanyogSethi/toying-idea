import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import './CartDrawer.css';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
    onCheckout && onCheckout();
  };

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <ShoppingBag size={20} className="header-bag-icon" />
            <h3>Your Studio Cart ({cartItems.reduce((a, c) => a + c.quantity, 0)})</h3>
          </div>
          <button 
            type="button" 
            className="cart-close-btn"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Alert */}
        <div className="cart-shipping-notice">
          <span>🚚 <strong>Free Pan-India Delivery</strong> on all 3D printed orders this week!</span>
        </div>

        {/* Cart Body */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-box-icon">
                <ShoppingBag size={48} />
              </div>
              <h4>Your cart is empty!</h4>
              <p>Looks like you haven't added any 3D-printed creations yet.</p>
              <button 
                type="button" 
                className="btn-primary empty-shop-btn"
                onClick={onClose}
              >
                Explore Collection
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div className="cart-item-thumb">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h5 className="cart-item-title">{item.name}</h5>
                    <span className="cart-item-price">₹{item.price}</span>
                    <div className="cart-item-qty-row">
                      <div className="qty-controls">
                        <button 
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        type="button" 
                        className="cart-item-delete"
                        onClick={() => onRemoveItem(item.id)}
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-summary-line">
              <span>Studio Subtotal</span>
              <span className="summary-total-val">₹{subtotal}</span>
            </div>
            <div className="cart-summary-line">
              <span>Packaging &amp; Safe Box</span>
              <span className="text-teal font-bold">FREE</span>
            </div>

            <button 
              type="button" 
              className="btn-primary checkout-btn"
              onClick={handleCheckout}
            >
              <Sparkles size={18} />
              <span>Proceed to Checkout (Demo)</span>
              <ArrowRight size={18} />
            </button>

            <div className="cart-security-foot">
              <ShieldCheck size={16} className="text-teal" />
              <span>Handcrafted in Patiala • 100% Quality Inspected</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
