import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import BenefitsStrip from './components/BenefitsStrip';
import CategorySection from './components/CategorySection';
import HowItWorks from './components/HowItWorks';
import PhotoTo3D from './components/PhotoTo3D';
import CustomOrderCTA from './components/CustomOrderCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Toast from './components/Toast';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import CustomOrderModal from './components/CustomOrderModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [savedProductIds, setSavedProductIds] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [toast, setToast] = useState(null);

  // Show toast utility
  const showToast = (message, type = 'info', duration = 3500) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, duration);
  };

  // ScrollSpy to update active nav state smoothly
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = [
        { id: 'home', target: 'hero' },
        { id: 'shop', target: 'fresh-products' },
        { id: 'photo-3d', target: 'photo-to-3d' },
        { id: 'about', target: 'how-it-works' },
        { id: 'custom-order', target: 'custom-cta' },
        { id: 'contact', target: 'footer' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].target);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation click
  const handleNavigate = (targetId, navId) => {
    setActiveSection(navId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add to cart
  const handleAddToCart = (product, qty = 1, color = 'Teal') => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty, color }];
    });
    showToast(`Added "${product.name}" to your cart! 🛍️`, 'success');
  };

  // Update Cart Quantity
  const handleUpdateQuantity = (productId, newQty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  // Remove from Cart
  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  // Toggle Save / Wishlist
  const handleToggleSave = (product) => {
    setSavedProductIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from saved list`, 'info');
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to your wishlist! ❤️`, 'success');
        return [...prev, product.id];
      }
    });
  };

  // Language Change
  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    const langNames = {
      EN: 'English',
      हिं: 'Hindi (हिन्दी)',
      ਪੰ: 'Punjabi (ਪੰਜਾਬੀ)'
    };
    showToast(`Language switched to ${langNames[newLang] || newLang}`, 'info');
  };

  const handleSavedClick = () => {
    if (savedProductIds.length === 0) {
      showToast('Your saved wishlist is empty. Tap the ❤️ icon on any 3D print to save it!', 'info');
    } else {
      showToast(`You have ${savedProductIds.length} item(s) saved in your wishlist! ❤️`, 'success');
    }
  };

  const handleWhatsAppClick = () => {
    showToast('💬 WhatsApp Chat placeholder: Connecting to ToyingIdea Studio, Patiala (+91 98765 43210)', 'info', 4000);
  };

  const handleSelectCategory = (cat) => {
    showToast(`Selected "${cat.title}" (${cat.count} designs available)`, 'info');
    const showcase = document.getElementById('fresh-products');
    if (showcase) showcase.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    showToast('🎉 Demo checkout successful! Your 3D prints are queued for printing in Patiala.', 'success', 5000);
  };

  // Custom order success
  const handleCustomOrderSuccess = (orderData) => {
    showToast(`🎉 Custom order request sent! Thank you, ${orderData.customerName}. We will WhatsApp your 3D preview shortly.`, 'success', 5000);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="toying-app">
      {/* SECTION 1: NAVIGATION BAR */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        savedCount={savedProductIds.length}
        onSavedClick={handleSavedClick}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      <main>
        {/* SECTION 2: HERO SECTION */}
        <Hero
          onShopClick={() => handleNavigate('fresh-products', 'shop')}
          onHowItWorksClick={() => handleNavigate('how-it-works', 'about')}
        />

        {/* SECTION 3: FRESH OFF THE PRINTER */}
        <ProductShowcase
          onProductClick={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onToggleSave={handleToggleSave}
          savedIds={savedProductIds}
        />

        {/* SECTION 4: BENEFITS STRIP WITH SCALLOPED EDGE */}
        <BenefitsStrip />

        {/* SECTION 5: WHAT WE MAKE (CATEGORIES) */}
        <CategorySection
          onSelectCategory={handleSelectCategory}
        />

        {/* SECTION 6: HOW IT WORKS */}
        <HowItWorks
          onStartCustom={() => setIsCustomModalOpen(true)}
        />

        {/* SECTION 7: PHOTO TO 3D */}
        <PhotoTo3D
          onStartCustom={() => setIsCustomModalOpen(true)}
        />

        {/* SECTION 8: CUSTOM ORDER CTA */}
        <CustomOrderCTA
          onOpenCustomModal={() => setIsCustomModalOpen(true)}
        />
      </main>

      {/* SECTION 9: FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      {/* SECTION 10: FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton
        onClick={handleWhatsAppClick}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onToggleSave={handleToggleSave}
          isSaved={savedProductIds.includes(selectedProduct.id)}
        />
      )}

      {/* Custom Order Modal */}
      <CustomOrderModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onSubmitSuccess={handleCustomOrderSuccess}
      />

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
