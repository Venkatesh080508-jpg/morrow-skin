import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Leaf, Droplets } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuiz }) => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-ivory)',
        paddingTop: 'clamp(40px, 6vw, 80px)',
        paddingBottom: 'clamp(50px, 8vw, 100px)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      {/* Decorative ambient background accents */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(189, 98, 69, 0.08) 0%, rgba(250, 247, 242, 0) 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(85, 104, 87, 0.1) 0%, rgba(250, 247, 242, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Editorial Copy & CTAs */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: 'var(--color-sage-light)',
                border: '1px solid var(--color-sage-border)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '20px'
              }}
            >
              <Sparkles size={13} color="var(--color-sage-dark)" />
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--color-sage-dark)'
                }}
              >
                Intelligent Everyday Skincare
              </span>
            </div>

            <h1
              style={{
                marginBottom: '20px',
                lineHeight: 1.1,
                color: 'var(--color-charcoal)'
              }}
            >
              Daily formulations for an uncompromised barrier.
            </h1>

            <p
              className="lead"
              style={{
                marginBottom: '32px',
                maxWidth: '520px',
                color: 'var(--color-charcoal-body)'
              }}
            >
              Morrow Skin strips away trend-chasing clutter. We craft approachable, clinically-tested botanical treatments that restore cellular moisture, soothe inflammation, and build lasting skin resilience.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '40px'
              }}
            >
              <Link
                to="/shop"
                className="btn btn-sage btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Shop Everyday Rituals</span>
                <ArrowRight size={16} />
              </Link>

              <button
                onClick={onOpenQuiz}
                className="btn btn-secondary btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Sparkles size={16} color="var(--color-terracotta)" />
                <span>Find Your Match</span>
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(14px, 3vw, 28px)',
                paddingTop: '24px',
                borderTop: '1px solid var(--color-border)',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="var(--color-sage)" />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-charcoal-muted)' }}>
                  Derm-Tested pH 5.5
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Leaf size={16} color="var(--color-sage)" />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-charcoal-muted)' }}>
                  100% Vegan & Cruelty-Free
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Droplets size={16} color="var(--color-sage)" />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-charcoal-muted)' }}>
                  Zero Synthetic Fragrance
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Image Showcase */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-hover)',
                backgroundColor: 'var(--color-cream)',
                border: '1px solid var(--color-border)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"
                alt="Morrow Skin Amber Botanical Bottles and Clean Aesthetic"
                style={{
                  width: '100%',
                  height: 'clamp(400px, 46vw, 560px)',
                  objectFit: 'cover'
                }}
              />

              {/* Floating Overlay Badge 1 */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid rgba(232, 226, 214, 0.9)',
                  maxWidth: '260px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-sage)'
                    }}
                  />
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sage-dark)' }}>
                    Core Protocol
                  </span>
                </div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                  Bio-Squalane Cloud Cream
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-charcoal-muted)', marginTop: '2px' }}>
                  89% measured barrier moisture increase within 1 hour
                </div>
              </div>

              {/* Floating Award Pill Top Right */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  backgroundColor: 'var(--color-charcoal)',
                  color: 'var(--color-ivory)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                2026 Clean Beauty Award Winner
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
