import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ActivesData {
  id: string;
  name: string;
  origin: string;
  category: string;
  percentage?: string;
  action: string;
  whyWeLoveIt: string;
  foundIn: { name: string; id: string };
}

export const IngredientSpotlight: React.FC = () => {
  const [selectedId, setSelectedId] = useState('squalane');

  const actives: ActivesData[] = [
    {
      id: 'squalane',
      name: 'Bio-Squalane (Sugarcane)',
      origin: 'Renewable Brazilian Sugarcane',
      category: 'Biomimetic Lipid',
      percentage: '3.0% - 5.0%',
      action: 'Weightless Barrier Seal',
      whyWeLoveIt:
        'Squalane matches your skin’s natural lipid composition almost atom-for-atom. Unlike heavy mineral oils, it cushions cell membranes, accelerates moisture retention, and prevents trans-epidermal water loss without clogging pores.',
      foundIn: { name: 'Bio-Squalane Restorative Cloud Cream', id: 'bio-squalane-cloud-cream' }
    },
    {
      id: 'oat',
      name: 'Colloidal Oat Flour',
      origin: 'Finnish Non-GMO Oats',
      category: 'Prebiotic Beta-Glucan',
      percentage: '2.5%',
      action: 'Rapid Redness Extinguisher',
      whyWeLoveIt:
        'Rich in avenanthramides—rare anti-inflammatory polyphenols unique to oats. Colloidal milling creates a protective hydro-colloid film that calms seasonal flare-ups and shields reactive skin.',
      foundIn: { name: 'Dew Point Barrier Cleanser', id: 'dew-point-cleanser' }
    },
    {
      id: 'niacinamide',
      name: 'High-Purity Niacinamide',
      origin: 'Clinical Bio-Synthesis',
      category: 'Cellular Co-Factor',
      percentage: '10.0%',
      action: 'Tone Refinement & Pore Balance',
      whyWeLoveIt:
        'Supports NAD+ cellular energy pathways to dramatically refine congested pores and diminish post-inflammatory erythema (red discoloration) while boosting ceramide synthesis naturally.',
      foundIn: { name: 'Cellular Radiance Serum 10%', id: 'cellular-radiance-serum' }
    },
    {
      id: 'greentea',
      name: 'Fermented Green Tea Water',
      origin: 'Jeju Island Camellia Sinensis',
      category: 'Bio-Ferment Antioxidant',
      percentage: '68.0%',
      action: 'Polyphenol Quenching',
      whyWeLoveIt:
        'Through controlled bio-fermentation, the large antioxidant molecules of green tea are broken into micro-structures that penetrate deeply to neutralize urban particulate and blue light free radicals.',
      foundIn: { name: 'Botanic Calming Mist Essence', id: 'botanic-calming-mist' }
    },
    {
      id: 'bakuchiol',
      name: 'Pure Babchi Bakuchiol',
      origin: 'Ayurvedic Psoralea Corylifolia Seed',
      category: 'Phyto-Retinol Alternative',
      percentage: '2.0%',
      action: 'Nocturnal Collagen Signaling',
      whyWeLoveIt:
        'Clinically proven in dermatological studies to stimulate collagen production and cellular turnover similarly to retinoic acid, but without redness, peeling, dry flakes, or sun sensitivity.',
      foundIn: { name: 'Midnight Recovery Bakuchiol Elixir', id: 'midnight-bakuchiol-elixir' }
    }
  ];

  const current = actives.find((a) => a.id === selectedId) || actives[0];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface-soft)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <span className="eyebrow">Formulated with Intention</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '14px' }}>
            Clean Actives. Full Transparency.
          </h2>
          <p className="lead">
            We list every active ingredient with full percentage disclosure and biological purpose. No proprietary concealment, no filler percentages.
          </p>
        </div>

        {/* Actives Selector Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '36px'
          }}
        >
          {actives.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              style={{
                padding: '10px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                border: `1.5px solid ${selectedId === item.id ? 'var(--color-sage)' : 'var(--color-border)'}`,
                backgroundColor: selectedId === item.id ? 'var(--color-sage)' : '#FFFFFF',
                color: selectedId === item.id ? '#FFFFFF' : 'var(--color-charcoal)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {item.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Detail Card for Selected Active */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-card)',
            padding: 'clamp(28px, 4vw, 44px)',
            maxWidth: '860px',
            margin: '0 auto'
          }}
          className="animate-fade-in"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--color-border-light)',
              marginBottom: '20px'
            }}
          >
            <div>
              <span className="eyebrow" style={{ margin: 0 }}>
                {current.category} {current.percentage && `· ${current.percentage}`}
              </span>
              <h3 style={{ fontSize: 'var(--text-2xl)', marginTop: '4px' }}>
                {current.name}
              </h3>
            </div>

            <span
              style={{
                backgroundColor: 'var(--color-sage-light)',
                color: 'var(--color-sage-dark)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600
              }}
            >
              Source: {current.origin}
            </span>
          </div>

          <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-charcoal-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            {current.whyWeLoveIt}
          </p>

          <div
            style={{
              backgroundColor: 'var(--color-ivory)',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-charcoal-muted)' }}>
                Featured In Daily Ritual
              </div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                {current.foundIn.name}
              </div>
            </div>

            <Link
              to={`/product/${current.foundIn.id}`}
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Inspect Formula</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
