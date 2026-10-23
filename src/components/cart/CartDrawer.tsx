import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    openCheckout,
    subtotal,
    discountCode,
    discountAmount,
    applyDiscountCode,
    removeDiscountCode,
    shipping,
    tax,
    total,
    freeShippingThreshold,
    freeShippingRemaining,
    freeShippingProgress
  } = useCart();

  const [inputCode, setInputCode] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const success = applyDiscountCode(inputCode);
    if (success) {
      setInputCode('');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Your Shopping Bag"
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(24, 28, 25, 0.55)',
          backdropFilter: 'blur(4px)',
          transition: 'opacity var(--transition-normal)'
        }}
      />

      {/* Drawer Panel */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: 'var(--color-ivory)',
          boxShadow: 'var(--shadow-drawer)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10,
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', margin: 0 }}>Your Ritual Bag</h2>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-muted)' }}>
              ({items.reduce((s, i) => s + i.quantity, 0)})
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close Shopping Bag"
            style={{
              padding: '8px',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-charcoal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-surface-soft)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div
          style={{
            padding: '14px 24px',
            backgroundColor: 'var(--color-sage-light)',
            borderBottom: '1px solid var(--color-sage-border)'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              color: 'var(--color-sage-dark)',
              marginBottom: '6px'
            }}
          >
            {freeShippingRemaining > 0 ? (
              <span>
                Add <strong>${freeShippingRemaining.toFixed(2)}</strong> more for{' '}
                <strong style={{ color: 'var(--color-terracotta)' }}>Free Express Shipping</strong>
              </span>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={14} color="var(--color-terracotta)" />
                You've unlocked <strong>Free Express Delivery!</strong>
              </span>
            )}
            <span>${freeShippingThreshold} Target</span>
          </div>

          <div
            style={{
              height: '6px',
              backgroundColor: 'rgba(85, 104, 87, 0.2)',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${freeShippingProgress}%`,
                backgroundColor: 'var(--color-sage)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Items List or Empty State */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px 24px'
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '40px 16px'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-cream)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  color: 'var(--color-charcoal-muted)'
                }}
              >
                <Tag size={24} />
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '8px' }}>Your Bag is Empty</h3>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-charcoal-muted)',
                  maxWidth: '260px',
                  marginBottom: '24px'
                }}
              >
                Discover our barrier-supporting formulas crafted with intention for daily resilience.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn btn-sage btn-sm"
              >
                Explore Bestsellers
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '14px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                >
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={closeCart}
                    style={{ flexShrink: 0 }}
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      style={{
                        width: '72px',
                        height: '78px',
                        objectFit: 'cover',
                        borderRadius: 'var(--radius-xs)'
                      }}
                    />
                  </Link>

                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Link
                          to={`/product/${item.product.id}`}
                          onClick={closeCart}
                          style={{
                            fontWeight: 600,
                            fontSize: 'var(--text-sm)',
                            color: 'var(--color-charcoal)',
                            lineHeight: 1.3
                          }}
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.product.name} from bag`}
                          style={{
                            color: 'var(--color-charcoal-light)',
                            padding: '2px',
                            marginLeft: '8px'
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div
                        style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-charcoal-muted)',
                          marginTop: '2px'
                        }}
                      >
                        {item.selectedSize.label} · {item.selectedSize.volume}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                      {/* Quantity Stepper */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--color-ivory)'
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          style={{
                            padding: '4px 8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-charcoal)'
                          }}
                        >
                          <Minus size={12} />
                        </button>
                        <span
                          style={{
                            padding: '0 8px',
                            fontSize: 'var(--text-xs)',
                            fontWeight: 600,
                            minWidth: '24px',
                            textAlign: 'center'
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          style={{
                            padding: '4px 8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-charcoal)'
                          }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Item Total */}
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: 'var(--text-sm)',
                          color: 'var(--color-charcoal)'
                        }}
                      >
                        ${(item.selectedSize.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer with Calculations and Checkout */}
        {items.length > 0 && (
          <div
            style={{
              padding: '20px 24px',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid var(--color-border)'
            }}
          >
            {/* Promo Code Form */}
            <form
              onSubmit={handleApplyPromo}
              style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}
            >
              <input
                type="text"
                placeholder="Discount code (try MORROW10)"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--color-border)',
                  fontSize: 'var(--text-xs)',
                  textTransform: 'uppercase'
                }}
              />
              <button
                type="submit"
                className="btn btn-secondary btn-sm"
                style={{ padding: '8px 14px' }}
              >
                Apply
              </button>
            </form>

            {discountCode && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 12px',
                  backgroundColor: 'var(--color-sage-light)',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: 'var(--text-xs)',
                  marginBottom: '14px',
                  color: 'var(--color-sage-dark)'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Tag size={12} /> Code <strong>{discountCode}</strong> applied
                </span>
                <button
                  onClick={removeDiscountCode}
                  style={{
                    color: 'var(--color-terracotta)',
                    fontSize: '11px',
                    fontWeight: 600
                  }}
                >
                  Remove
                </button>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)' }}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--color-sage-dark)' }}>
                  <span>Promotional Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)' }}>
                <span>Estimated Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)' }}>
                <span>Estimated Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 'var(--text-base)',
                  fontWeight: 700,
                  color: 'var(--color-charcoal)',
                  paddingTop: '8px',
                  borderTop: '1px dashed var(--color-border)'
                }}
              >
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={openCheckout}
              className="btn btn-primary btn-full"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 20px',
                fontSize: 'var(--text-sm)'
              }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                marginTop: '12px',
                fontSize: '11px',
                color: 'var(--color-charcoal-muted)'
              }}
            >
              <ShieldCheck size={14} color="var(--color-sage)" />
              <span>30-Day Ritual Satisfaction Guarantee · Free Returns</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
