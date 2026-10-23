import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { REVIEWS } from '../data/reviews';
import type { Review } from '../types';
import { StarRating } from '../components/common/StarRating';
import { Badge } from '../components/common/Badge';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import {
  ChevronRight,
  ShoppingBag,
  Plus,
  Minus,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Truck
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const product = PRODUCTS.find((p) => p.id === productId || p.slug === productId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string>('benefits');

  // Customer Reviews state
  const [productReviews, setProductReviews] = useState<Review[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    skinType: 'Sensitive',
    rating: 5,
    title: '',
    comment: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    setSelectedSizeIndex(0);
    setQuantity(1);

    if (product) {
      // Find reviews for this product, or provide generic brand reviews if not directly matching
      const matching = REVIEWS.filter((r) => r.productId === product.id);
      if (matching.length > 0) {
        setProductReviews(matching);
      } else {
        setProductReviews(REVIEWS.slice(0, 2));
      }
    }
  }, [productId, product]);

  if (!product) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Formula Not Found</h2>
        <p className="lead" style={{ margin: '16px auto 24px' }}>
          The requested skincare product does not exist or has been archived.
        </p>
        <Link to="/shop" className="btn btn-sage">
          Return to Shop
        </Link>
      </div>
    );
  }

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const pairedProducts = PRODUCTS.filter((p) => product.pairedWith?.includes(p.id));

  const handleAddToCart = () => {
    addToCart(product, quantity, currentSize);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.comment) return;

    const created: Review = {
      id: `rev-${Date.now()}`,
      productId: product.id,
      productName: product.name,
      author: newReview.author,
      skinType: newReview.skinType,
      rating: newReview.rating,
      date: 'Just now',
      title: newReview.title || 'Exceptional formula',
      comment: newReview.comment,
      verified: true,
      avatarBg: 'var(--color-sage)'
    };

    setProductReviews([created, ...productReviews]);
    setShowReviewForm(false);
    setNewReview({
      author: '',
      skinType: 'Sensitive',
      rating: 5,
      title: '',
      comment: ''
    });
    showToast('Review Submitted', 'Thank you for your valuable feedback!', 'success');
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? '' : id);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '100vh', paddingBottom: '96px' }}>
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        style={{
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: '#FFFFFF',
          padding: '12px 0'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-charcoal-muted)',
              overflowX: 'auto',
              whiteSpace: 'nowrap'
            }}
          >
            <Link to="/" style={{ color: 'var(--color-charcoal-muted)' }}>
              Home
            </Link>
            <ChevronRight size={12} />
            <Link to="/shop" style={{ color: 'var(--color-charcoal-muted)' }}>
              Shop
            </Link>
            <ChevronRight size={12} />
            <Link to={`/shop?category=${product.category}`} style={{ color: 'var(--color-charcoal-muted)' }}>
              {product.categoryLabel}
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--color-charcoal)', fontWeight: 600 }}>
              {product.name}
            </span>
          </div>
        </div>
      </nav>

      {/* Main Product Hero Grid */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '48px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.05fr 1fr',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'flex-start'
            }}
            className="pdp-grid"
          >
            {/* Left: Product Imagery Gallery */}
            <div style={{ position: 'sticky', top: '100px' }} className="pdp-gallery">
              {/* Main Active Image */}
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-cream)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-card)',
                  marginBottom: '16px',
                  aspectRatio: '4 / 4.5'
                }}
              >
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={`${product.name} main view`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.25s ease'
                  }}
                />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div style={{ display: 'flex', gap: '12px' }}>
                  {product.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      style={{
                        width: '76px',
                        height: '76px',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        border: `2px solid ${activeImageIndex === idx ? 'var(--color-sage)' : 'var(--color-border)'}`,
                        padding: 0,
                        backgroundColor: '#FFFFFF',
                        opacity: activeImageIndex === idx ? 1 : 0.65,
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Buy Box & Details */}
            <div>
              {/* Routine Step & Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-terracotta)'
                  }}
                >
                  {product.routineStep}
                </span>
                {product.badge && <Badge label={product.badge} variant="sage" />}
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', marginBottom: '8px', lineHeight: 1.15 }}>
                {product.name}
              </h1>

              <div
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-charcoal-muted)',
                  marginBottom: '16px',
                  lineHeight: 1.4
                }}
              >
                {product.subtitle}
              </div>

              {/* Ratings and Reviews Jump Link */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid var(--color-border)',
                  marginBottom: '20px'
                }}
              >
                <StarRating rating={product.rating} showText reviewCount={product.reviewCount} size={15} />
                <span style={{ color: 'var(--color-border-dark)' }}>·</span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-sage-dark)', fontWeight: 600 }}>
                  99% would recommend to sensitive skin
                </span>
              </div>

              {/* Pricing Display */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                  ${currentSize.price}
                </span>
                {product.originalPrice && (
                  <span style={{ fontSize: 'var(--text-lg)', color: 'var(--color-charcoal-light)', textDecoration: 'line-through' }}>
                    ${product.originalPrice}
                  </span>
                )}
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)', marginLeft: '4px' }}>
                  ({currentSize.volume})
                </span>
              </div>

              {/* Size Selector */}
              {product.sizes.length > 1 && (
                <div style={{ marginBottom: '24px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '8px'
                    }}
                  >
                    Select Volume: {currentSize.label}
                  </label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {product.sizes.map((sz, idx) => (
                      <button
                        key={sz.volume}
                        onClick={() => setSelectedSizeIndex(idx)}
                        style={{
                          flex: 1,
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: `1.5px solid ${selectedSizeIndex === idx ? 'var(--color-sage)' : 'var(--color-border)'}`,
                          backgroundColor: selectedSizeIndex === idx ? 'var(--color-sage-light)' : '#FFFFFF',
                          textAlign: 'left',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        <div style={{ fontWeight: 700, fontSize: 'var(--text-xs)', color: 'var(--color-charcoal)' }}>
                          {sz.label}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--color-charcoal-muted)', marginTop: '2px' }}>
                          {sz.volume} · ${sz.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper & Add to Bag CTA */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                {/* Quantity Stepper */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid var(--color-border-dark)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#FFFFFF',
                    padding: '0 4px'
                  }}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    style={{
                      padding: '10px 12px',
                      color: 'var(--color-charcoal)',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Minus size={14} />
                  </button>
                  <span
                    style={{
                      padding: '0 10px',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      minWidth: '28px',
                      textAlign: 'center'
                    }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    style={{
                      padding: '10px 12px',
                      color: 'var(--color-charcoal)',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Primary Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="btn btn-sage btn-lg"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <ShoppingBag size={18} />
                  <span>Add to Bag · ${(currentSize.price * quantity).toFixed(2)}</span>
                </button>
              </div>

              {/* Shipping & Assurance Perk Bar */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface-soft)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '32px',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-charcoal-body)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Truck size={14} color="var(--color-sage)" />
                  <span>
                    Free Carbon-Neutral Express Shipping on orders over $60
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={14} color="var(--color-sage)" />
                  <span>
                    30-Day Ritual Guarantee — Hassle-free exchanges and returns
                  </span>
                </div>
              </div>

              {/* Deep-Dive Accordions */}
              <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--color-border)' }}>
                {/* Accordion 1: Benefits */}
                <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <button
                    onClick={() => toggleAccordion('benefits')}
                    style={{
                      width: '100%',
                      padding: '16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-charcoal)'
                    }}
                  >
                    <span>The Formula & Clinical Benefits</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: openAccordion === 'benefits' ? 'rotate(180deg)' : 'none',
                        transition: 'transform var(--transition-fast)'
                      }}
                    />
                  </button>
                  {openAccordion === 'benefits' && (
                    <div style={{ paddingBottom: '16px', fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-body)', lineHeight: 1.7 }}>
                      <p>{product.description}</p>
                      <p style={{ marginTop: '8px' }}>{product.details}</p>
                      <ul style={{ listStyle: 'none', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {product.benefits.map((b) => (
                          <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle2 size={14} color="var(--color-sage)" style={{ flexShrink: 0 }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Key Actives */}
                <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <button
                    onClick={() => toggleAccordion('actives')}
                    style={{
                      width: '100%',
                      padding: '16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-charcoal)'
                    }}
                  >
                    <span>Key Active Ingredients & Percentages</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: openAccordion === 'actives' ? 'rotate(180deg)' : 'none',
                        transition: 'transform var(--transition-fast)'
                      }}
                    />
                  </button>
                  {openAccordion === 'actives' && (
                    <div style={{ paddingBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {product.keyIngredients.map((ing) => (
                        <div
                          key={ing.name}
                          style={{
                            padding: '12px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--color-border)'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 'var(--text-xs)', color: 'var(--color-charcoal)' }}>
                            <span>{ing.name}</span>
                            {ing.percentage && (
                              <span style={{ color: 'var(--color-terracotta)', fontWeight: 700 }}>
                                {ing.percentage}
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)', marginTop: '4px' }}>
                            {ing.purpose}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Accordion 3: How to Use */}
                <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <button
                    onClick={() => toggleAccordion('usage')}
                    style={{
                      width: '100%',
                      padding: '16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-charcoal)'
                    }}
                  >
                    <span>How to Apply (Ritual Guide)</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: openAccordion === 'usage' ? 'rotate(180deg)' : 'none',
                        transition: 'transform var(--transition-fast)'
                      }}
                    />
                  </button>
                  {openAccordion === 'usage' && (
                    <div style={{ paddingBottom: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {product.howToUse.map((step) => (
                        <div key={step.step} style={{ display: 'flex', gap: '10px', fontSize: 'var(--text-xs)' }}>
                          <span style={{ fontWeight: 700, color: 'var(--color-sage-dark)', minWidth: '48px' }}>
                            {step.step}:
                          </span>
                          <span style={{ color: 'var(--color-charcoal-body)', lineHeight: 1.5 }}>
                            {step.instruction}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Accordion 4: Full Ingredients */}
                <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <button
                    onClick={() => toggleAccordion('inci')}
                    style={{
                      width: '100%',
                      padding: '16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 600,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-charcoal)'
                    }}
                  >
                    <span>Complete INCI Ingredient Transparency</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: openAccordion === 'inci' ? 'rotate(180deg)' : 'none',
                        transition: 'transform var(--transition-fast)'
                      }}
                    />
                  </button>
                  {openAccordion === 'inci' && (
                    <div style={{ paddingBottom: '16px', fontSize: '11px', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                      {product.fullIngredients}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paired Routines / Cross-Sell */}
      {pairedProducts.length > 0 && (
        <section className="section" style={{ backgroundColor: 'var(--color-cream)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="eyebrow">Synergistic Pairings</span>
                <h2 style={{ fontSize: 'var(--text-2xl)' }}>
                  Complete Your Everyday Ritual
                </h2>
              </div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)', maxWidth: '360px' }}>
                Formulated to chemically layer seamlessly without pilling, tackiness, or sensory congestion.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {pairedProducts.map((p) => (
                <div
                  key={p.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    style={{
                      width: '74px',
                      height: '74px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-xs)'
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-sage)' }}>
                      {p.routineStep.split('·')[0]}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-charcoal)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)', marginBottom: '8px' }}>
                      ${p.price} · {p.volume}
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => addToCart(p, 1)}
                        className="btn btn-secondary btn-sm"
                        style={{ padding: '4px 10px', fontSize: '11px' }}
                      >
                        + Add to Bag
                      </button>
                      <Link
                        to={`/product/${p.id}`}
                        style={{ fontSize: '11px', color: 'var(--color-sage-dark)', textDecoration: 'underline', padding: '4px 0' }}
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Customer Reviews Section */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div>
              <span className="eyebrow">Community Feedback</span>
              <h2 style={{ fontSize: 'var(--text-2xl)' }}>
                Verified Customer Reviews
              </h2>
            </div>

            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="btn btn-secondary btn-sm"
            >
              {showReviewForm ? 'Cancel Review' : 'Write a Product Review'}
            </button>
          </div>

          {/* Review Submission Form Drawer */}
          {showReviewForm && (
            <form
              onSubmit={handleAddReview}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--color-border)',
                marginBottom: '32px',
                boxShadow: 'var(--shadow-card)'
              }}
              className="animate-fade-in"
            >
              <h3 style={{ fontSize: 'var(--text-md)', marginBottom: '16px' }}>
                Share Your Experience with {product.name}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '6px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    placeholder="e.g. Maya L."
                    className="input-field"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '6px' }}>
                    Your Skin Type
                  </label>
                  <select
                    value={newReview.skinType}
                    onChange={(e) => setNewReview({ ...newReview, skinType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      fontSize: 'var(--text-xs)'
                    }}
                  >
                    <option value="Sensitive & Reactive">Sensitive & Reactive</option>
                    <option value="Dry & Dehydrated">Dry & Dehydrated</option>
                    <option value="Combination / Acne-Prone">Combination / Acne-Prone</option>
                    <option value="Balanced / Normal">Balanced / Normal</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '6px' }}>
                  Headline / Short Title
                </label>
                <input
                  type="text"
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  placeholder="e.g. Transformed my sensitive barrier within a week"
                  className="input-field"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '6px' }}>
                  Detailed Review
                </label>
                <textarea
                  required
                  rows={4}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Share details on texture, absorption, how it felt on your skin..."
                  className="input-field"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-sm">
                Publish Verified Review
              </button>
            </form>
          )}

          {/* Product Reviews List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {productReviews.map((rev) => (
              <div
                key={rev.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <StarRating rating={rev.rating} size={14} />
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-light)' }}>
                    {rev.date}
                  </span>
                </div>

                <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: '6px' }}>
                  {rev.title}
                </h4>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-body)', lineHeight: 1.6, marginBottom: '12px' }}>
                  {rev.comment}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)' }}>
                  <strong style={{ color: 'var(--color-charcoal)' }}>{rev.author}</strong>
                  {rev.verified && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: 'var(--color-sage)', fontWeight: 600 }}>
                      <CheckCircle2 size={12} /> Verified Buyer
                    </span>
                  )}
                  <span>· Skin Type: {rev.skinType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .pdp-grid {
            grid-template-columns: 1fr !important;
          }
          .pdp-gallery {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
};
