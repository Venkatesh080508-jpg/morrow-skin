import React, { useState } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { StarRating } from '../common/StarRating';
import { Badge } from '../common/Badge';
import { Link } from 'react-router-dom';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity] = useState(1);

  if (!product) return null;

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];

  const handleAdd = () => {
    addToCart(product, quantity, currentSize);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(24, 28, 25, 0.6)',
          backdropFilter: 'blur(5px)'
        }}
      />

      <div
        style={{
          position: 'relative',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-modal)',
          maxWidth: '780px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: '1px solid var(--color-border)',
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          zIndex: 10
        }}
        className="animate-fade-in quick-view-grid"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            padding: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-ivory)',
            color: 'var(--color-charcoal)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 12
          }}
        >
          <X size={18} />
        </button>

        {/* Product Media Column */}
        <div style={{ backgroundColor: 'var(--color-surface-soft)', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={product.images[0]}
            alt={product.name}
            style={{
              width: '100%',
              maxHeight: '380px',
              objectFit: 'cover',
              borderRadius: 'var(--radius-sm)'
            }}
          />
        </div>

        {/* Details Column */}
        <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="eyebrow" style={{ margin: 0 }}>
                {product.routineStep}
              </span>
              {product.badge && <Badge label={product.badge} variant="sage" />}
            </div>

            <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '6px', lineHeight: 1.25 }}>
              {product.name}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <StarRating rating={product.rating} showText reviewCount={product.reviewCount} />
              <span style={{ color: 'var(--color-border-dark)' }}>|</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-sage-dark)', fontWeight: 600 }}>
                In Stock & Ready to Ship
              </span>
            </div>

            <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '14px' }}>
              ${currentSize.price}
            </div>

            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-body)', lineHeight: 1.6, marginBottom: '20px' }}>
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes.length > 1 && (
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Select Size
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {product.sizes.map((s, idx) => (
                    <button
                      key={s.volume}
                      onClick={() => setSelectedSizeIndex(idx)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-xs)',
                        border: `1.5px solid ${selectedSizeIndex === idx ? 'var(--color-sage)' : 'var(--color-border)'}`,
                        backgroundColor: selectedSizeIndex === idx ? 'var(--color-sage-light)' : '#FFFFFF',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        color: 'var(--color-charcoal)'
                      }}
                    >
                      {s.label} ({s.volume}) · ${s.price}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <button
                onClick={handleAdd}
                className="btn btn-primary btn-full"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <ShoppingBag size={16} />
                <span>Add to Bag · ${currentSize.price * quantity}</span>
              </button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link
                to={`/product/${product.id}`}
                onClick={onClose}
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-sage-dark)',
                  textDecoration: 'underline',
                  fontWeight: 600
                }}
              >
                View Full Product Details & Transparent Ingredients →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .quick-view-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
