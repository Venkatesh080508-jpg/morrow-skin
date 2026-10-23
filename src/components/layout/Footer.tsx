import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Leaf, Recycle, Heart } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const Footer: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      showToast('Welcome to Morrow Skin', 'Check your inbox for 10% off code MORROW10', 'success');
      setEmail('');
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#1E2320',
        color: '#E8ECE8',
        paddingTop: '64px',
        paddingBottom: '32px',
        marginTop: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        {/* Brand Ethos Trust Badges Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '48px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(85, 104, 87, 0.3)', color: '#88A38B' }}>
              <Leaf size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: '#FFFFFF', marginBottom: '4px' }}>
                Conscious Formulations
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: '#A0AAA2', lineHeight: 1.5 }}>
                Free from drying alcohols, synthetic sulfates, artificial fragrance, and parabens.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(85, 104, 87, 0.3)', color: '#88A38B' }}>
              <Recycle size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: '#FFFFFF', marginBottom: '4px' }}>
                Infinitely Recyclable
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: '#A0AAA2', lineHeight: 1.5 }}>
                Bottled in ultraviolet-protective amber glass with post-consumer recycled pumps.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(85, 104, 87, 0.3)', color: '#88A38B' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: '#FFFFFF', marginBottom: '4px' }}>
                Clinical Rigor
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: '#A0AAA2', lineHeight: 1.5 }}>
                Dermatologist-tested across diverse sensitive skin types at physiological pH 5.5.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: 'rgba(85, 104, 87, 0.3)', color: '#88A38B' }}>
              <Heart size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: '#FFFFFF', marginBottom: '4px' }}>
                100% Leaping Bunny Cruelty-Free
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: '#A0AAA2', lineHeight: 1.5 }}>
                Never tested on animals. 100% vegan certified botanical bio-actives.
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '48px',
            marginBottom: '48px'
          }}
          className="footer-grid"
        >
          {/* Brand Intro & Newsletter */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: '#FAF7F2'
                }}
              >
                MORROW
              </span>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-terracotta)'
                }}
              />
            </div>

            <p style={{ fontSize: 'var(--text-sm)', color: '#B2BCB4', maxWidth: '340px', lineHeight: 1.6, marginBottom: '24px' }}>
              Approachable premium skincare designed to strengthen skin barrier resilience through intentional, everyday rituals.
            </p>

            <div style={{ maxWidth: '340px' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#D4A359', marginBottom: '8px' }}>
                Join the Morrow Journal
              </div>
              {subscribed ? (
                <div
                  style={{
                    backgroundColor: 'rgba(85, 104, 87, 0.3)',
                    border: '1px solid rgba(136, 163, 139, 0.4)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '10px 14px',
                    fontSize: 'var(--text-xs)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#CDE0D0'
                  }}
                >
                  <Check size={14} /> You're on the list! Use code <strong>MORROW10</strong> at checkout.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '6px' }}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: 'var(--radius-xs)',
                      padding: '8px 12px',
                      color: '#FFFFFF',
                      fontSize: 'var(--text-xs)'
                    }}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    style={{
                      backgroundColor: 'var(--color-sage)',
                      color: '#FFFFFF',
                      borderRadius: 'var(--radius-xs)',
                      padding: '8px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FFFFFF', marginBottom: '18px' }}>
              Ritual Categories
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: 'var(--text-sm)', color: '#A0AAA2' }}>
              <li>
                <Link to="/shop" style={{ transition: 'color var(--transition-fast)' }}>
                  All Formulas
                </Link>
              </li>
              <li>
                <Link to="/shop?category=cleansers">Gentle Cleansers</Link>
              </li>
              <li>
                <Link to="/shop?category=toners">Essences & Tonics</Link>
              </li>
              <li>
                <Link to="/shop?category=serums">Active Serums</Link>
              </li>
              <li>
                <Link to="/shop?category=moisturizers">Barrier Creams</Link>
              </li>
              <li>
                <Link to="/shop?category=suncare">Mineral Sunscreen</Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FFFFFF', marginBottom: '18px' }}>
              The Brand
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: 'var(--text-sm)', color: '#A0AAA2' }}>
              <li>
                <Link to="/about">Our Founding Story</Link>
              </li>
              <li>
                <Link to="/about">Clean Actives Standard</Link>
              </li>
              <li>
                <Link to="/about">Packaging Sustainability</Link>
              </li>
              <li>
                <Link to="/about">Clinical Verification</Link>
              </li>
              <li>
                <Link to="/shop">Bestsellers Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Care & Help Column */}
          <div>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FFFFFF', marginBottom: '18px' }}>
              Client Care
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: 'var(--text-sm)', color: '#A0AAA2' }}>
              <li>
                <span style={{ cursor: 'pointer' }}>Shipping & Track Package</span>
              </li>
              <li>
                <span style={{ cursor: 'pointer' }}>30-Day Ritual Guarantee</span>
              </li>
              <li>
                <span style={{ cursor: 'pointer' }}>Patch Testing Protocol</span>
              </li>
              <li>
                <span style={{ cursor: 'pointer' }}>Recycling Partnership</span>
              </li>
              <li>
                <span style={{ cursor: 'pointer' }}>care@morrowskin.example</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 'var(--text-xs)',
            color: '#7B857D',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            © {new Date().getFullYear()} Morrow Skin Co. All rights reserved. ShadowFox UI/UX Internship Project.
          </div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accessibility</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
};
