import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'sage' | 'terracotta' | 'charcoal' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'subtle', className = '' }) => {
  let badgeClass = 'badge-subtle';
  if (variant === 'sage') badgeClass = 'badge-sage';
  if (variant === 'terracotta') badgeClass = 'badge-terracotta';
  if (variant === 'charcoal') badgeClass = 'badge-charcoal';

  return (
    <span className={`badge ${badgeClass} ${className}`}>
      {label}
    </span>
  );
};
