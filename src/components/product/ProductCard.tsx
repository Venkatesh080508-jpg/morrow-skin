import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { StarRating } from '../common/StarRating';
import { Badge } from '../common/Badge';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  return (
    <article
      className="product-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        transition: 'all var(--transition-normal)',
        position: 'relative'
      }}
    >
      {/* Product Image Link Container */}
      <Link
        to={`/product/${product.id}`}
        aria-label={`View details for ${product.name}`}
        style={{ position: 'relative', display: 'block' }}
      >
        <div className="product-image-container">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              // Graceful SVG fallback if network or image fails
              (e.target as HTMLElement).style.display = 'none';
            }}
          />

          {/* Badges on Top Left & Right */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              zIndex: 2
            }}
          >
            {product.badge && (
              <Badge
                label={product.badge}
                variant={
                  product.badge === 'Bestseller'
                    ? 'terracotta'
                    : product.badge === 'New'
                    ? 'charcoal'
                    : 'sage'
                }
              />
            )}
          </div>

          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              zIndex: 2
            }}
          >
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(4px)',
                padding: '3px 8px',
                borderRadius: 'var(--radius-full)',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--color-charcoal-muted)'
              }}
            >
              {product.volume}
            </span>
          </div>

          {/* Quick View Floating Button on Hover */}
          {onQuickView && (
            <button
              onClick={handleQuickViewClick}
              aria-label={`Quick view ${product.name}`}
              className="quick-view-btn"
              style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: 'var(--color-charcoal)',
                borderRadius: 'var(--radius-full)',
                padding: '8px',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transform: 'translateY(6px)',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Eye size={16} />
            </button>
          )}
        </div>
      </Link>

      {/* Product Content Details */}
      <div
        style={{
          padding: '18px 18px 20px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <div>
          {/* Routine Step Indicator & Category */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '6px'
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-sage)'
              }}
            >
              {product.routineStep.split('·')[0]}
            </span>
            <StarRating rating={product.rating} size={12} showText reviewCount={product.reviewCount} />
          </div>

          {/* Product Title */}
          <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 600, marginBottom: '4px', lineHeight: 1.3 }}>
            <Link
              to={`/product/${product.id}`}
              style={{ color: 'var(--color-charcoal)', transition: 'color var(--transition-fast)' }}
            >
              {product.name}
            </Link>
          </h3>

          {/* Subtitle / Key Actives */}
          <p
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--color-charcoal-muted)',
              marginBottom: '14px',
              lineHeight: 1.4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {product.subtitle}
          </p>
        </div>

        {/* Pricing & Add to Bag Action */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '12px',
            borderTop: '1px solid var(--color-border-light)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 700,
                  color: 'var(--color-charcoal)'
                }}
              >
                ${product.price}
              </span>
              {product.originalPrice && (
                <span
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-charcoal-light)',
                    textDecoration: 'line-through'
                  }}
                >
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span style={{ fontSize: '10px', color: 'var(--color-charcoal-light)', textTransform: 'uppercase' }}>
              Standard Size
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            aria-label={`Add ${product.name} to bag`}
            className="btn btn-secondary btn-sm"
            style={{
              padding: '6px 12px',
              fontSize: '11px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <ShoppingBag size={13} />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      <style>{`
        .product-card:hover {
          box-shadow: var(--shadow-card);
          border-color: var(--color-sage-border);
          transform: translateY(-2px);
        }
        .product-card:hover .quick-view-btn {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </article>
  );
};
