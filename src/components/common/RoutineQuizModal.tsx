import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { Link } from 'react-router-dom';

interface RoutineQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RoutineQuizModal: React.FC<RoutineQuizModalProps> = ({ isOpen, onClose }) => {
  const { addToCart, applyDiscountCode } = useCart();
  const { showToast } = useToast();

  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>('barrier');
  const [skinType, setSkinType] = useState<string>('sensitive');
  const [routineFocus, setRoutineFocus] = useState<string>('simple');

  if (!isOpen) return null;

  const resetQuiz = () => {
    setStep(1);
    setGoal('barrier');
    setSkinType('sensitive');
    setRoutineFocus('simple');
  };

  // Determine recommended routine based on answers
  const getRecommendations = (): Product[] => {
    let recs: Product[] = [];
    const cleanser = PRODUCTS.find((p) => p.id === 'dew-point-cleanser')!;
    const mist = PRODUCTS.find((p) => p.id === 'botanic-calming-mist')!;
    const serum = PRODUCTS.find((p) => p.id === 'cellular-radiance-serum')!;
    const cream = PRODUCTS.find((p) => p.id === 'bio-squalane-cloud-cream')!;
    const spf = PRODUCTS.find((p) => p.id === 'mineral-silk-spf')!;
    const elixir = PRODUCTS.find((p) => p.id === 'midnight-bakuchiol-elixir')!;

    if (goal === 'barrier' || skinType === 'sensitive') {
      recs = [cleanser, cream, spf];
    } else if (goal === 'radiance') {
      recs = [cleanser, serum, cream, spf];
    } else if (goal === 'hydration') {
      recs = [mist, cream, elixir];
    } else {
      recs = [cleanser, serum, cream];
    }

    if (routineFocus === 'complete' && recs.length < 4) {
      if (!recs.includes(mist)) recs.push(mist);
    }

    return recs;
  };

  const recommendedProducts = getRecommendations();
  const routineBundlePrice = recommendedProducts.reduce((sum, p) => sum + p.price, 0);
  const bundleDiscountPrice = Math.round(routineBundlePrice * 0.85); // 15% off bundle discount

  const handleAddBundleToCart = () => {
    recommendedProducts.forEach((product) => {
      addToCart(product, 1);
    });
    applyDiscountCode('ROUTINE15');
    showToast(
      'Custom Routine Added to Bag!',
      '15% routine bundle savings applied automatically',
      'success'
    );
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-title"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(24, 28, 25, 0.65)',
          backdropFilter: 'blur(6px)'
        }}
      />

      {/* Modal Card */}
      <div
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-ivory)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-modal)',
          maxWidth: '620px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: '1px solid var(--color-border)',
          padding: '36px 32px'
        }}
        className="animate-fade-in"
      >
        <button
          onClick={onClose}
          aria-label="Close Quiz"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'var(--color-charcoal-muted)',
            padding: '6px',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-cream)'
          }}
        >
          <X size={18} />
        </button>

        {step <= 3 ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="eyebrow" style={{ margin: 0 }}>
                Question {step} of 3
              </span>
              <div
                style={{
                  height: '4px',
                  flex: 1,
                  backgroundColor: 'var(--color-border)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${(step / 3) * 100}%`,
                    backgroundColor: 'var(--color-sage)',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>
            </div>

            {step === 1 && (
              <div>
                <h2 id="quiz-title" style={{ fontSize: 'var(--text-2xl)', marginBottom: '8px' }}>
                  What is your primary skin focus?
                </h2>
                <p className="lead" style={{ marginBottom: '24px' }}>
                  Select the condition you would most like to support with your daily routine.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { id: 'barrier', title: 'Barrier Repair & Calming', desc: 'Soothe sensitivity, redness, and tight or irritated skin' },
                    { id: 'hydration', title: 'Deep Moisture & Plumpness', desc: 'Relieve dull, parched skin with multi-layer hydration' },
                    { id: 'radiance', title: 'Even Tone & Radiance', desc: 'Fade post-blemish shadows, brighten tone and smooth pores' },
                    { id: 'firmness', title: 'Elasticity & Smoothing', desc: 'Promote gentle renewal, bounce, and fine line softening' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setGoal(opt.id)}
                      style={{
                        padding: '16px 20px',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'left',
                        border: `1.5px solid ${goal === opt.id ? 'var(--color-sage)' : 'var(--color-border)'}`,
                        backgroundColor: goal === opt.id ? 'var(--color-sage-light)' : '#FFFFFF',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div style={{ fontWeight: 600, color: 'var(--color-charcoal)', fontSize: 'var(--text-base)' }}>
                        {opt.title}
                      </div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-muted)', marginTop: '4px' }}>
                        {opt.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 id="quiz-title" style={{ fontSize: 'var(--text-2xl)', marginBottom: '8px' }}>
                  How does your skin typically behave?
                </h2>
                <p className="lead" style={{ marginBottom: '24px' }}>
                  Knowing your baseline helps us match the right lipid-to-water ratio.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { id: 'sensitive', title: 'Sensitive & Easily Flushed', desc: 'Reacts easily to fragrances, temperature changes, or harsh products' },
                    { id: 'dry', title: 'Dry & Flaky', desc: 'Constantly thirsts for rich emollients and feels tight after cleansing' },
                    { id: 'combination', title: 'Combination / Oily T-Zone', desc: 'Prone to forehead or nose shine with normal to dry cheeks' },
                    { id: 'balanced', title: 'Balanced / Normal', desc: 'Generally comfortable with occasional seasonal dehydration' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSkinType(opt.id)}
                      style={{
                        padding: '16px 20px',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'left',
                        border: `1.5px solid ${skinType === opt.id ? 'var(--color-sage)' : 'var(--color-border)'}`,
                        backgroundColor: skinType === opt.id ? 'var(--color-sage-light)' : '#FFFFFF',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div style={{ fontWeight: 600, color: 'var(--color-charcoal)', fontSize: 'var(--text-base)' }}>
                        {opt.title}
                      </div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-muted)', marginTop: '4px' }}>
                        {opt.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 id="quiz-title" style={{ fontSize: 'var(--text-2xl)', marginBottom: '8px' }}>
                  What is your routine rhythm preference?
                </h2>
                <p className="lead" style={{ marginBottom: '24px' }}>
                  We believe the best skincare routine is the one you actually enjoy doing.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { id: 'simple', title: 'Minimalist Essentials (3 Steps)', desc: 'Cleanse, fortify, protect. Straightforward and high-impact in 3 minutes' },
                    { id: 'complete', title: 'Elevated Daily Ritual (4-5 Steps)', desc: 'Incorporates essences, targeted serums, and restorative bedtime oils' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setRoutineFocus(opt.id)}
                      style={{
                        padding: '16px 20px',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'left',
                        border: `1.5px solid ${routineFocus === opt.id ? 'var(--color-sage)' : 'var(--color-border)'}`,
                        backgroundColor: routineFocus === opt.id ? 'var(--color-sage-light)' : '#FFFFFF',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div style={{ fontWeight: 600, color: 'var(--color-charcoal)', fontSize: 'var(--text-base)' }}>
                        {opt.title}
                      </div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-muted)', marginTop: '4px' }}>
                        {opt.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
              {step > 1 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="btn btn-secondary btn-sm"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={() => setStep((s) => s + 1)}
                className="btn btn-primary btn-sm"
              >
                {step === 3 ? 'Reveal My Routine' : 'Next Step'}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ) : (
          /* Step 4: Results & Recommendations */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--color-terracotta-light)',
                  color: 'var(--color-terracotta)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '10px'
                }}
              >
                <Sparkles size={14} />
                Your Formulated Ritual
              </div>
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '6px' }}>
                The Barrier Harmony Protocol
              </h2>
              <p style={{ color: 'var(--color-charcoal-muted)', fontSize: 'var(--text-sm)', maxWidth: '460px', margin: '0 auto' }}>
                Tailored for {skinType} skin focusing on {goal} recovery. Designed to strengthen without sensory overload.
              </p>
            </div>

            {/* Recommended Products List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {recommendedProducts.map((p, idx) => (
                <div
                  key={p.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px 14px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    style={{
                      width: '56px',
                      height: '56px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-xs)'
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          color: 'var(--color-sage-dark)'
                        }}
                      >
                        Step 0{idx + 1}
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--color-charcoal-light)' }}>
                        {p.routineStep}
                      </span>
                    </div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-charcoal)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {p.name}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)' }}>
                      ${p.price} · {p.volume}
                    </div>
                  </div>
                  <Link
                    to={`/product/${p.id}`}
                    onClick={onClose}
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-sage-hover)',
                      textDecoration: 'underline',
                      fontWeight: 500,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    View
                  </Link>
                </div>
              ))}
            </div>

            {/* Bundle Savings Card */}
            <div
              style={{
                backgroundColor: 'var(--color-sage-light)',
                border: '1px solid var(--color-sage-border)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-sage-dark)', fontSize: 'var(--text-sm)' }}>
                  Complete Routine Bundle Offer
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-muted)', marginTop: '2px' }}>
                  Includes free express shipping and 15% automatic discount with code <strong>ROUTINE15</strong>.
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span
                  style={{
                    textDecoration: 'line-through',
                    color: 'var(--color-charcoal-light)',
                    fontSize: 'var(--text-xs)',
                    marginRight: '6px'
                  }}
                >
                  ${routineBundlePrice}
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    color: 'var(--color-charcoal)'
                  }}
                >
                  ${bundleDiscountPrice}
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={resetQuiz}
                className="btn btn-secondary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <RotateCcw size={14} />
                Retake
              </button>
              <button
                onClick={handleAddBundleToCart}
                className="btn btn-sage btn-full"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <ShoppingBag size={16} />
                Add Full Routine to Bag · ${bundleDiscountPrice}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
