import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export const RoutinePhilosophy: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Clarify With Empathy',
      subtitle: 'Never compromise the acid mantle',
      description:
        'Harsh foaming sulfates and squeaky-clean myths strip the fundamental ceramides your skin depends on. We formulate with colloidal oat beta-glucans and plant squalane at natural skin pH 5.5 to melt debris while preserving surface flora.',
      productId: 'dew-point-cleanser',
      benefits: ['Balances microbiome pH', 'Zero post-wash tightness', 'Cushions lipid membranes']
    },
    {
      num: '02',
      title: 'Fortify & Restore',
      subtitle: 'Feed deep epidermal hydration',
      description:
        'Layering active nutrition requires bio-available humectants and multi-weight hydrators. Our green tea ferment and bio-identical ceramide ratio penetrate down to the stratum granulosum, replenishing depleted cellular water.',
      productId: 'bio-squalane-cloud-cream',
      benefits: ['3:1:1 physiological ceramide ratio', 'Rapidly calms flushing & heat', '48-hour continuous moisture']
    },
    {
      num: '03',
      title: 'Protect Invisibly',
      subtitle: 'Physical defense without sensory load',
      description:
        'UV radiation and particulate pollution represent over 80% of preventable premature barrier breakdown. Our non-nano mineral zinc and ectoin biomolecules reflect radiant damage without white cast, greasy sheen, or pore congestion.',
      productId: 'mineral-silk-spf',
      benefits: ['Broad-spectrum UVA/UVB SPF 50+', 'Ectoin extreme-antioxidant shield', 'Seamless velvet makeup primer']
    }
  ];

  const currentStep = steps[activeStep];
  const featuredProduct = PRODUCTS.find((p) => p.id === currentStep.productId)!;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <span className="eyebrow">The Morrow Philosophy</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '14px' }}>
            Three intentional steps. Zero unnecessary filler.
          </h2>
          <p className="lead">
            Skincare does not need twelve steps to be transformative. We engineered three core pillars that harmonize with your skin’s biological diurnal rhythms.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '40px'
          }}
          className="step-tabs-grid"
        >
          {steps.map((st, idx) => (
            <button
              key={st.num}
              onClick={() => setActiveStep(idx)}
              style={{
                backgroundColor: activeStep === idx ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)',
                border: `1.5px solid ${activeStep === idx ? 'var(--color-sage)' : 'var(--color-border)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '24px 20px',
                textAlign: 'left',
                boxShadow: activeStep === idx ? 'var(--shadow-card)' : 'none',
                transition: 'all var(--transition-normal)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: activeStep === idx ? 'var(--color-terracotta)' : 'var(--color-charcoal-light)',
                  lineHeight: 1,
                  marginBottom: '10px'
                }}
              >
                {st.num}
              </div>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 700,
                  color: 'var(--color-charcoal)',
                  marginBottom: '4px'
                }}
              >
                {st.title}
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)' }}>
                {st.subtitle}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            padding: 'clamp(28px, 4vw, 48px)',
            boxShadow: 'var(--shadow-card)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 'clamp(32px, 5vw, 60px)',
            alignItems: 'center'
          }}
          className="step-content-grid"
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <span className="eyebrow" style={{ margin: 0 }}>
                Phase {currentStep.num} Protocol
              </span>
            </div>

            <h3 style={{ fontSize: 'var(--text-2xl)', marginBottom: '16px' }}>
              {currentStep.title}
            </h3>

            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-charcoal-body)', lineHeight: 1.7, marginBottom: '24px' }}>
              {currentStep.description}
            </p>

            {/* Key benefits list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              {currentStep.benefits.map((b) => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="var(--color-sage)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to={`/product/${featuredProduct.id}`}
              className="btn btn-sage btn-md"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Explore {featuredProduct.name}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Product Spotlight Image */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface-soft)',
              border: '1px solid var(--color-border)'
            }}
          >
            <img
              src={featuredProduct.images[0]}
              alt={featuredProduct.name}
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(6px)',
                padding: '16px 20px',
                borderTop: '1px solid var(--color-border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-charcoal)' }}>
                  {featuredProduct.name}
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)' }}>
                  {featuredProduct.volume} · ${featuredProduct.price}
                </div>
              </div>
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--color-terracotta)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Hero Formula
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .step-tabs-grid {
            grid-template-columns: 1fr !important;
          }
          .step-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
