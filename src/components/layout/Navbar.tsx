import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface NavbarProps {
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItemsCount, openCart } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { label: 'Shop All', path: '/shop' },
    { label: 'Cleansers', path: '/shop?category=cleansers' },
    { label: 'Serums', path: '/shop?category=serums' },
    { label: 'Moisturizers', path: '/shop?category=moisturizers' },
    { label: 'Sun Care', path: '/shop?category=suncare' },
    { label: 'Brand Ethos', path: '/about' }
  ];

  const isActive = (path: string) => {
    if (path === '/shop' && location.pathname === '/shop' && !location.search) return true;
    return location.pathname + location.search === path;
  };

  return (
    <>
      <header
        className="glass-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
          transition: 'all var(--transition-normal)'
        }}
      >
        <div className="container">
          <div
            style={{
              height: 'var(--header-height)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              style={{
                display: 'none',
                padding: '8px',
                color: 'var(--color-charcoal)'
              }}
              className="mobile-nav-toggle"
            >
              <Menu size={22} />
            </button>

            {/* Brand Logo */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: 'var(--color-charcoal)'
                }}
              >
                MORROW
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-terracotta)',
                  marginBottom: '2px'
                }}
              />
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--color-sage)',
                  marginLeft: '4px',
                  paddingTop: '3px'
                }}
                className="hide-mobile-xs"
              >
                SKIN
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '28px'
              }}
              className="desktop-nav-links"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: isActive(link.path) ? 'var(--color-sage-dark)' : 'var(--color-charcoal-muted)',
                    position: 'relative',
                    padding: '4px 0',
                    transition: 'color var(--transition-fast)'
                  }}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-sage)'
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Action Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Routine Quiz Pill Button */}
              <button
                onClick={onOpenQuiz}
                className="btn btn-secondary btn-sm hide-mobile"
                style={{
                  borderRadius: 'var(--radius-full)',
                  padding: '6px 14px',
                  fontSize: '11px',
                  borderColor: 'var(--color-sage-border)',
                  backgroundColor: 'var(--color-sage-light)',
                  color: 'var(--color-sage-dark)'
                }}
              >
                <Sparkles size={13} color="var(--color-sage)" />
                <span>Skin Quiz</span>
              </button>

              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search skincare products"
                style={{
                  color: 'var(--color-charcoal)',
                  padding: '8px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color var(--transition-fast)'
                }}
              >
                <Search size={20} />
              </button>

              {/* Bag Trigger Button with Counter */}
              <button
                onClick={openCart}
                aria-label={`View shopping bag, ${totalItemsCount} items`}
                style={{
                  color: 'var(--color-charcoal)',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-subtle)',
                  position: 'relative'
                }}
              >
                <ShoppingBag size={18} />
                <span
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: 'var(--color-charcoal)'
                  }}
                >
                  {totalItemsCount}
                </span>
                {totalItemsCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-2px',
                      right: '-2px',
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-terracotta)'
                    }}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Quick Search Dropdown Bar */}
          {searchOpen && (
            <div
              style={{
                padding: '12px 0 16px',
                borderTop: '1px solid var(--color-border)',
                animation: 'fadeIn 0.2s ease-out'
              }}
            >
              <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '8px' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <Search
                    size={16}
                    color="var(--color-charcoal-light)"
                    style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    type="search"
                    placeholder="Search cleansers, serums, squalane, barrier cream..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="input-field"
                    style={{ paddingLeft: '38px' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="btn btn-secondary btn-sm"
                  aria-label="Close search input"
                >
                  <X size={16} />
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10002,
            display: 'flex'
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(24, 28, 25, 0.5)'
            }}
          />

          <div
            style={{
              position: 'relative',
              width: '82%',
              maxWidth: '320px',
              backgroundColor: 'var(--color-ivory)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
              zIndex: 10,
              boxShadow: 'var(--shadow-drawer)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                MORROW
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '6px', color: 'var(--color-charcoal)' }}
              >
                <X size={20} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: 'var(--text-md)',
                    fontWeight: 500,
                    color: 'var(--color-charcoal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={14} color="var(--color-charcoal-light)" />
                </Link>
              ))}

              <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '12px 0' }} />

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="btn btn-sage btn-full"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Sparkles size={16} />
                <span>Take Skin Diagnostic Quiz</span>
              </button>
            </nav>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px', fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)' }}>
              Approachable premium skincare crafted with transparent botanical actives.
            </div>
          </div>
        </div>
      )}

      {/* Responsive CSS helper */}
      <style>{`
        @media (max-width: 880px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .hide-mobile-xs {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
