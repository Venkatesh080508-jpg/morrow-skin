import React from 'react';
import { REVIEWS } from '../../data/reviews';
import { StarRating } from '../common/StarRating';
import { CheckCircle2 } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <span className="eyebrow">Real Experiences</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '14px' }}>
            Trusted by Sensitive & Reactive Skin
          </h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
            <StarRating rating={4.9} size={16} />
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-charcoal)' }}>
              4.9 / 5 Average Rating from 1,480+ Verified Ritual Users
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 28px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <StarRating rating={review.rating} size={14} />
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-light)' }}>
                    {review.date}
                  </span>
                </div>

                <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 700, marginBottom: '10px', color: 'var(--color-charcoal)' }}>
                  "{review.title}"
                </h3>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-body)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {review.comment}
                </p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: review.avatarBg || 'var(--color-sage)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700
                    }}
                  >
                    {review.author[0]}
                  </div>

                  <div>
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>{review.author}</span>
                      {review.verified && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: 'var(--color-sage)', fontSize: '11px', fontWeight: 500 }}>
                          <CheckCircle2 size={12} /> Verified
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)' }}>
                      Skin Type: {review.skinType} · Purchased <em>{review.productName}</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
