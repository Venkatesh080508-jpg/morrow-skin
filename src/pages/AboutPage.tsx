import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Heart, Check } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '100vh', paddingBottom: '96px' }}>
      {/* Editorial Hero Header */}
      <section
        style={{
          backgroundColor: 'var(--color-cream)',
          borderBottom: '1px solid var(--color-border)',
          padding: 'clamp(56px, 8vw, 96px) 0'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="eyebrow">Our Founding Story</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', marginBottom: '20px', lineHeight: 1.15 }}>
            Skincare formulated for calm, everyday living.
          </h1>
          <p className="lead" style={{ margin: '0 auto', fontSize: 'var(--text-md)', lineHeight: 1.7 }}>
            Morrow was born out of frustration with over-complicated, 12-step beauty trends and harsh exfoliating acids that leave everyday skin stripped, sensitized, and constantly red.
          </p>
        </div>
      </section>

      {/* Narrative Section 1: The Barrier First Ethos */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center'
            }}
            className="about-split-grid"
          >
            <div>
              <span className="eyebrow">Formulation Philosophy</span>
              <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: '18px' }}>
                Barrier-First. Always.
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-charcoal-body)', lineHeight: 1.8, marginBottom: '16px' }}>
                The stratum corneum is your body’s primary biological shield against environmental oxidation, microbial pathogens, and rapid trans-epidermal moisture loss. When it is damaged, no amount of aggressive exfoliation or expensive treatments will create lasting glow.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-charcoal-body)', lineHeight: 1.8, marginBottom: '24px' }}>
                Every single Morrow formula is buffered at human skin's natural acidic mantle of <strong>pH 5.5</strong>. We integrate prebiotic beta-glucans, multi-molecular ceramides, and fermented botanical waters that your skin naturally recognizes and welcomes.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Zero synthetic fragrance, drying denatured alcohols, or sulfates',
                  'Rigorous patch-testing across clinical sensitive skin panels',
                  'High concentration of active botanicals with transparent percentages'
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ color: 'var(--color-sage)' }}>
                      <Check size={16} />
                    </div>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-surface-soft)',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid var(--color-border)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
                alt="Botanical extracts and pure formulation laboratory"
                style={{ width: '100%', height: '460px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Craftsmanship Banner */}
      <section className="section" style={{ backgroundColor: 'var(--color-sage-light)', borderTop: '1px solid var(--color-sage-border)', borderBottom: '1px solid var(--color-sage-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <span className="eyebrow" style={{ color: 'var(--color-sage-dark)' }}>
              Circular Stewardship
            </span>
            <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: '14px', color: 'var(--color-sage-dark)' }}>
              Respect for Earth, Respect for Skin
            </h2>
            <p style={{ color: 'var(--color-charcoal-body)', fontSize: 'var(--text-base)', lineHeight: 1.7 }}>
              Sustainability is not an afterthought or marketing label at Morrow. It is baked into our materials engineering and fulfillment lifecycle.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-sage-border)' }}>
              <div style={{ color: 'var(--color-sage)', marginBottom: '14px' }}>
                <Recycle size={28} />
              </div>
              <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 700, marginBottom: '8px' }}>
                Amber Glass Bottles
              </h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                Infinitely recyclable pharmaceutical-grade amber glass protects delicate bio-actives from light degradation without plastic leaching.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-sage-border)' }}>
              <div style={{ color: 'var(--color-sage)', marginBottom: '14px' }}>
                <Leaf size={28} />
              </div>
              <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 700, marginBottom: '8px' }}>
                FSC Certified Packaging
              </h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                All secondary shipping cartons and product sleeves are crafted with 100% post-consumer recycled paper printed with algae-based non-toxic inks.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-sage-border)' }}>
              <div style={{ color: 'var(--color-sage)', marginBottom: '14px' }}>
                <Heart size={28} />
              </div>
              <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 700, marginBottom: '8px' }}>
                Leaping Bunny Vegan
              </h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                Certified cruelty-free across our entire ingredient supply chain. Zero animal testing or animal by-products at any stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action: Shop the Routine */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <span className="eyebrow">Begin Your Journey</span>
          <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: '16px' }}>
            Experience the Morrow Ritual
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '28px' }}>
            Discover calm, fortified skin with our introductory routine bundle or explore single hero formulas.
          </p>
          <Link to="/shop" className="btn btn-sage btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span>Explore All Formulas</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
