import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, SKIN_CONCERNS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { QuickViewModal } from '../components/product/QuickViewModal';
import type { Product, ProductCategory, SkinConcern } from '../types';
import { Search, X, Sparkles, ArrowUpDown } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = (searchParams.get('category') as ProductCategory) || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [category, setCategory] = useState<ProductCategory>(initialCategory);
  const [concern, setConcern] = useState<SkinConcern>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Sync URL search params when category or search changes externally
  useEffect(() => {
    const cat = searchParams.get('category') as ProductCategory;
    if (cat) setCategory(cat);
    const q = searchParams.get('search');
    if (q !== null) setSearchQuery(q);
  }, [searchParams]);

  const handleCategorySelect = (cat: ProductCategory) => {
    setCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleClearFilters = () => {
    setCategory('all');
    setConcern('all');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category match
      if (category !== 'all' && p.category !== category) return false;

      // Skin concern match
      if (concern !== 'all' && !p.skinConcerns.includes(concern)) return false;

      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesSubtitle = p.subtitle.toLowerCase().includes(query);
        const matchesIngredients = p.keyIngredients.some((i) => i.name.toLowerCase().includes(query));
        const matchesCategory = p.categoryLabel.toLowerCase().includes(query);
        if (!matchesName && !matchesSubtitle && !matchesIngredients && !matchesCategory) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [category, concern, searchQuery, sortBy]);

  const hasActiveFilters = category !== 'all' || concern !== 'all' || searchQuery.trim() !== '';

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '80vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section
        style={{
          backgroundColor: 'var(--color-cream)',
          borderBottom: '1px solid var(--color-border)',
          padding: 'clamp(36px, 5vw, 64px) 0'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="eyebrow">Complete Collection</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', marginBottom: '14px' }}>
            The Morrow Skincare Apothecary
          </h1>
          <p className="lead" style={{ margin: '0 auto' }}>
            Thoughtfully formulated everyday formulas designed to restore lipid barrier density, quench cellular dehydration, and respect sensitive acid mantles.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '36px' }}>
        {/* Search, Concern Filter & Sorting Toolbar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '32px'
          }}
        >
          {/* Top Row: Search Input & Sort Selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap'
            }}
          >
            {/* Search Box */}
            <div style={{ position: 'relative', flex: 1, minWidth: '240px', maxWidth: '400px' }}>
              <Search
                size={16}
                color="var(--color-charcoal-light)"
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="search"
                placeholder="Search formulas or key actives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field"
                style={{ paddingLeft: '38px', paddingRight: '32px' }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--color-charcoal-light)'
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowUpDown size={14} color="var(--color-charcoal-muted)" />
              <label htmlFor="sort-select" style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-charcoal-muted)', textTransform: 'uppercase' }}>
                Sort:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#FFFFFF',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  color: 'var(--color-charcoal)',
                  cursor: 'pointer'
                }}
              >
                <option value="featured">Curated & Featured</option>
                <option value="rating">Highest Rated (5.0 ★)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Routine Category Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '4px'
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id as ProductCategory)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  border: `1.5px solid ${category === cat.id ? 'var(--color-charcoal)' : 'var(--color-border)'}`,
                  backgroundColor: category === cat.id ? 'var(--color-charcoal)' : '#FFFFFF',
                  color: category === cat.id ? 'var(--color-ivory)' : 'var(--color-charcoal)',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skin Concern Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '4px'
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-charcoal-muted)', whiteSpace: 'nowrap', marginRight: '4px' }}>
              Target Concern:
            </span>
            {SKIN_CONCERNS.map((c) => (
              <button
                key={c.id}
                onClick={() => setConcern(c.id as SkinConcern)}
                style={{
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '11px',
                  fontWeight: 600,
                  border: `1px solid ${concern === c.id ? 'var(--color-sage)' : 'var(--color-border)'}`,
                  backgroundColor: concern === c.id ? 'var(--color-sage-light)' : '#FFFFFF',
                  color: concern === c.id ? 'var(--color-sage-dark)' : 'var(--color-charcoal-muted)',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Active Filters Summary & Results Count */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '12px',
              borderTop: '1px solid var(--color-border-light)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-charcoal-muted)'
            }}
          >
            <span>
              Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'formula' : 'formulas'}
            </span>

            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                style={{
                  color: 'var(--color-terracotta)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <X size={12} /> Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Product Grid or Empty Search State */}
        {filteredProducts.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '64px 20px',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)'
            }}
          >
            <Sparkles size={32} color="var(--color-charcoal-light)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '8px' }}>
              No Formulas Found
            </h3>
            <p style={{ color: 'var(--color-charcoal-muted)', fontSize: 'var(--text-sm)', maxWidth: '420px', margin: '0 auto 20px' }}>
              We couldn't find any products matching your selected filters. Try broadening your criteria or reset the filters below.
            </p>
            <button
              onClick={handleClearFilters}
              className="btn btn-sage btn-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
              gap: '24px'
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
