import React, { useState } from 'react';
import { X, CheckCircle2, ShieldAlert, Truck, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const CheckoutModal: React.FC = () => {
  const {
    items,
    isCheckoutOpen,
    closeCheckout,
    clearCart,
    subtotal,
    discountAmount,
    shipping,
    tax,
    total
  } = useCart();

  const navigate = useNavigate();

  const [step, setStep] = useState<'details' | 'confirmation'>('details');
  const [orderNumber, setOrderNumber] = useState<string>('');

  const [form, setForm] = useState({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 234-5678',
    address: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'OR',
    zip: '97477',
    deliveryMethod: 'standard'
  });

  if (!isCheckoutOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceDemoOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const randomOrder = `MRW-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(randomOrder);
    setStep('confirmation');
  };

  const handleFinishAndReturn = () => {
    clearCart();
    closeCheckout();
    setStep('details');
    navigate('/shop');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
    >
      {/* Backdrop */}
      <div
        onClick={step === 'details' ? closeCheckout : undefined}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(24, 28, 25, 0.65)',
          backdropFilter: 'blur(6px)'
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-ivory)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-modal)',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          border: '1px solid var(--color-border)',
          padding: '32px'
        }}
        className="animate-fade-in"
      >
        {step === 'details' && (
          <button
            onClick={closeCheckout}
            aria-label="Close Checkout"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              padding: '6px',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-charcoal-muted)',
              backgroundColor: 'var(--color-cream)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        )}

        {step === 'details' ? (
          <div>
            {/* Design Project Disclaimer Banner */}
            <div
              style={{
                backgroundColor: 'var(--color-sage-light)',
                border: '1px solid var(--color-sage-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 16px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <ShieldAlert size={20} color="var(--color-sage-dark)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-sage-dark)' }}>
                <strong>Design Demonstration Notice:</strong> This is a portfolio prototype for ShadowFox.
                No credit card information or real payments are accepted or stored.
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <span className="eyebrow" style={{ margin: 0 }}>Final Step</span>
              <h2 id="checkout-title" style={{ fontSize: 'var(--text-2xl)', marginTop: '4px' }}>
                Complete Your Skincare Order
              </h2>
            </div>

            <form onSubmit={handlePlaceDemoOrder}>
              {/* Shipping Information */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Truck size={16} color="var(--color-sage)" />
                  Shipping Destination
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '4px' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '4px' }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '4px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '4px' }}>
                      Phone (For delivery updates)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '4px' }}>
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '4px' }}>
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '4px' }}>
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '4px' }}>
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={form.zip}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Order Items Preview */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  border: '1px solid var(--color-border)',
                  marginBottom: '20px'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: '12px' }}>
                  Order Summary ({items.reduce((s, i) => s + i.quantity, 0)} items)
                </div>

                <div style={{ maxHeight: '140px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                  {items.map((item) => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)' }}>
                      <span>
                        {item.quantity}x {item.product.name} ({item.selectedSize.volume})
                      </span>
                      <span style={{ fontWeight: 600 }}>
                        ${(item.selectedSize.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: 'var(--text-xs)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-charcoal-muted)' }}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-sage-dark)' }}>
                      <span>Promotional Discount</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-charcoal-muted)' }}>
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-charcoal-muted)' }}>
                    <span>Taxes</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-charcoal)', paddingTop: '6px', borderTop: '1px dashed var(--color-border)' }}>
                    <span>Total Due</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-primary btn-full"
                style={{ padding: '14px', fontSize: 'var(--text-sm)' }}
              >
                Place Demo Order (${total.toFixed(2)})
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Step */
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-sage-light)',
                color: 'var(--color-sage)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <span className="eyebrow" style={{ marginBottom: '6px' }}>Order Confirmed</span>
            <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: '8px' }}>
              Thank You for Your Order
            </h2>
            <p style={{ color: 'var(--color-charcoal-muted)', fontSize: 'var(--text-base)', maxWidth: '440px', margin: '0 auto 20px' }}>
              We've registered your demo order <strong>#{orderNumber}</strong>. A confirmation has been simulated for {form.email}.
            </p>

            {/* Estimated Delivery Box */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                maxWidth: '440px',
                margin: '0 auto 28px',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Sparkles size={16} color="var(--color-sage)" />
                <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                  Estimated Arrival
                </span>
              </div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-body)', marginBottom: '6px' }}>
                3–5 Business Days · Carbon-Neutral Ground Dispatch
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)' }}>
                Shipping to: {form.firstName} {form.lastName}, {form.address}, {form.city}, {form.state} {form.zip}
              </div>
            </div>

            <button
              onClick={handleFinishAndReturn}
              className="btn btn-sage btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Continue Exploring Morrow</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
