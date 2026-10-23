import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  showText?: boolean;
  reviewCount?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  max = 5,
  size = 14,
  showText = false,
  reviewCount
}) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      <div style={{ display: 'flex', gap: '2px' }} aria-label={`Rated ${rating} out of ${max} stars`}>
        {Array.from({ length: max }).map((_, i) => {
          const isFilled = i < Math.floor(rating);
          const isPartial = i === Math.floor(rating) && rating % 1 >= 0.5;

          return (
            <Star
              key={i}
              size={size}
              style={{
                color: isFilled || isPartial ? 'var(--color-gold)' : 'var(--color-border-dark)',
                fill: isFilled ? 'var(--color-gold)' : isPartial ? 'rgba(212, 163, 89, 0.45)' : 'none',
                strokeWidth: 1.5
              }}
            />
          );
        })}
      </div>
      {showText && (
        <span
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 500,
            color: 'var(--color-charcoal-muted)',
            marginLeft: '4px'
          }}
        >
          {rating.toFixed(1)} {reviewCount !== undefined && `(${reviewCount})`}
        </span>
      )}
    </div>
  );
};
