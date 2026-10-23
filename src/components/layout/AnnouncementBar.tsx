import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ANNOUNCEMENTS = [
  {
    text: 'Complimentary Express Carbon-Neutral Shipping on all orders over $60',
    highlight: 'Shop Essentials',
    link: '/shop'
  },
  {
    text: 'Try the Morrow Barrier Diagnostic Quiz to find your 3-step routine',
    highlight: 'Take Diagnostic',
    isQuiz: true
  },
  {
    text: 'Use code MORROW10 for 10% off your introductory skincare ritual',
    highlight: 'Copy Code',
    code: 'MORROW10'
  }
];

interface AnnouncementBarProps {
  onOpenQuiz: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenQuiz }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = ANNOUNCEMENTS[index];

  return (
    <aside
      aria-label="Announcement"
      style={{
        backgroundColor: 'var(--color-sage-dark)',
        color: '#FFFFFF',
        height: 'var(--announcement-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
        fontSize: 'var(--text-xs)',
        letterSpacing: '0.02em',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textAlign: 'center',
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
        key={index}
        className="animate-fade-in"
      >
        <Sparkles size={12} color="var(--color-gold)" style={{ flexShrink: 0 }} />
        <span>{current.text}</span>
        {current.isQuiz ? (
          <button
            onClick={onOpenQuiz}
            style={{
              textDecoration: 'underline',
              fontWeight: 600,
              color: '#FFFFFF',
              marginLeft: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px'
            }}
          >
            {current.highlight} <ArrowRight size={10} />
          </button>
        ) : current.link ? (
          <Link
            to={current.link}
            style={{
              textDecoration: 'underline',
              fontWeight: 600,
              color: '#FFFFFF',
              marginLeft: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px'
            }}
          >
            {current.highlight} <ArrowRight size={10} />
          </Link>
        ) : null}
      </div>
    </aside>
  );
};
