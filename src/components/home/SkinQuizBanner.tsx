import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface SkinQuizBannerProps {
  onOpenQuiz: () => void;
}

export const SkinQuizBanner: React.FC<SkinQuizBannerProps> = ({ onOpenQuiz }) => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--color-sage-dark)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(36px, 6vw, 64px)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-hover)'
          }}
        >
          {/* Subtle background ambient gradients */}
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(189, 98, 69, 0.25) 0%, rgba(50, 62, 52, 0) 70%)',
              pointerEvents: 'none'
            }}
          />

          <div
            style={{
              maxWidth: '680px',
              position: 'relative',
              zIndex: 2
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(4px)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#D4A359',
                marginBottom: '20px'
              }}
            >
              <Sparkles size={14} />
              Personalized Routine Diagnostic
            </div>

            <h2
              style={{
                color: '#FAF7F2',
                fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                lineHeight: 1.15,
                marginBottom: '18px'
              }}
            >
              Overwhelmed by skincare options? Take our 60-second diagnostic.
            </h2>

            <p
              style={{
                fontSize: 'var(--text-base)',
                color: '#D2DED4',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '540px'
              }}
            >
              Answer three questions about your current barrier health and everyday lifestyle. We'll curate your tailored 3-step routine with an automatic 15% introductory bundle savings.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenQuiz}
                className="btn btn-terracotta btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <span>Begin Skin Diagnostic</span>
                <ArrowRight size={16} />
              </button>

              <span style={{ fontSize: 'var(--text-xs)', color: '#A0B2A3', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={14} color="#88A38B" />
                No registration required · Instant recommendations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
