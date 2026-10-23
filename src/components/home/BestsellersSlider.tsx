import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import type { Product } from '../../types';

interface BestsellersProps {
  onQuickView: (product: Product) => void;
}

export const BestsellersSlider: React.FC<BestsellersProps> = ({ onQuickView }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Bestsellers' },
    { id: 'cleansers', label: 'Cleansers' },
    { id: 'serums', label: 'Serums' },
    { id: 'moisturizers', label: 'Moisturizers' },
    { id: 'suncare', label: 'Sun Care' }
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  }).slice(0, 4);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div>
            <span className="eyebrow">Proven Formulations</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
              Most-Loved Daily Rituals
            </h2>
          </div>

          <Link
            to="/shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--color-sage-dark)',
              textDecoration: 'underline'
            }}
          >
            <span>View Complete Collection ({PRODUCTS.length} Formulas)</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '28px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                border: `1px solid ${filter === cat.id ? 'var(--color-sage)' : 'var(--color-border)'}`,
                backgroundColor: filter === cat.id ? 'var(--color-sage)' : '#FFFFFF',
                color: filter === cat.id ? '#FFFFFF' : 'var(--color-charcoal-muted)',
                whiteSpace: 'nowrap',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
