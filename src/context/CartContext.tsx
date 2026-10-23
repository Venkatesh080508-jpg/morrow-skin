import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import type { CartItem, Product, ProductSize } from '../types';
import { useToast } from './ToastContext';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedSize?: ProductSize) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
  // Financial calculations
  subtotal: number;
  discountCode: string;
  discountPercentage: number;
  discountAmount: number;
  applyDiscountCode: (code: string) => boolean;
  removeDiscountCode: () => void;
  shipping: number;
  tax: number;
  total: number;
  totalItemsCount: number;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
  freeShippingProgress: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'morrow_skin_cart_v1';
const FREE_SHIPPING_THRESHOLD = 60;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showToast } = useToast();
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Could not save cart to local storage', e);
    }
  }, [items]);

  const addToCart = (product: Product, quantity = 1, selectedSize?: ProductSize) => {
    const sizeToUse = selectedSize || product.sizes[0] || {
      label: 'Standard',
      volume: product.volume,
      price: product.price
    };

    const cartItemId = `${product.id}-${sizeToUse.volume}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: cartItemId,
            product,
            quantity,
            selectedSize: sizeToUse
          }
        ];
      }
    });

    showToast(
      `Added to Bag`,
      `${product.name} (${sizeToUse.volume})`,
      'success'
    );
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    const itemToRemove = items.find((i) => i.id === cartItemId);
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
    if (itemToRemove) {
      showToast('Removed from bag', itemToRemove.product.name, 'info');
    }
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
    setDiscountCode('');
    setDiscountPercentage(0);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  const closeCheckout = () => setIsCheckoutOpen(false);

  // Promo Code Handler
  const applyDiscountCode = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'MORROW10') {
      setDiscountCode('MORROW10');
      setDiscountPercentage(0.1);
      showToast('Promo Code Applied!', '10% off your entire ritual', 'success');
      return true;
    } else if (cleanCode === 'ROUTINE15') {
      setDiscountCode('ROUTINE15');
      setDiscountPercentage(0.15);
      showToast('Promo Code Applied!', '15% routine bonus unlocked', 'success');
      return true;
    } else {
      showToast('Invalid Code', 'Try code MORROW10 for 10% off', 'warning');
      return false;
    }
  };

  const removeDiscountCode = () => {
    setDiscountCode('');
    setDiscountPercentage(0);
    showToast('Promo Code Removed', '', 'info');
  };

  // Computations
  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.selectedSize.price * item.quantity, 0);
  }, [items]);

  const discountAmount = useMemo(() => {
    return subtotal * discountPercentage;
  }, [subtotal, discountPercentage]);

  const discountedSubtotal = subtotal - discountAmount;

  const shipping = useMemo(() => {
    if (items.length === 0) return 0;
    return discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 6.0;
  }, [items.length, discountedSubtotal]);

  const tax = useMemo(() => {
    if (items.length === 0) return 0;
    return discountedSubtotal * 0.05; // 5% estimated tax
  }, [items.length, discountedSubtotal]);

  const total = useMemo(() => {
    if (items.length === 0) return 0;
    return discountedSubtotal + shipping + tax;
  }, [items.length, discountedSubtotal, shipping, tax]);

  const totalItemsCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - discountedSubtotal);
  const freeShippingProgress = Math.min(
    100,
    Math.round((discountedSubtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        subtotal,
        discountCode,
        discountPercentage,
        discountAmount,
        applyDiscountCode,
        removeDiscountCode,
        shipping,
        tax,
        total,
        totalItemsCount,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        freeShippingRemaining,
        freeShippingProgress
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
