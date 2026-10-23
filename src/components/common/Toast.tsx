import React from 'react';
import { useToast } from '../../context/ToastContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '380px',
        width: 'calc(100% - 48px)',
        pointerEvents: 'none'
      }}
    >
      {toasts.map((toast) => {
        let icon = <CheckCircle2 size={18} color="var(--color-sage)" />;
        let borderColor = 'var(--color-sage-border)';

        if (toast.type === 'warning') {
          icon = <AlertCircle size={18} color="var(--color-terracotta)" />;
          borderColor = 'var(--color-terracotta-border)';
        } else if (toast.type === 'info') {
          icon = <Info size={18} color="var(--color-charcoal)" />;
          borderColor = 'var(--color-border)';
        }

        return (
          <div
            key={toast.id}
            style={{
              pointerEvents: 'auto',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-hover)',
              border: `1px solid ${borderColor}`,
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              animation: 'fadeIn 0.25s ease-out'
            }}
          >
            <div style={{ marginTop: '2px', flexShrink: 0 }}>{icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-charcoal)'
                }}
              >
                {toast.message}
              </div>
              {toast.subMessage && (
                <div
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-charcoal-muted)',
                    marginTop: '2px'
                  }}
                >
                  {toast.subMessage}
                </div>
              )}
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss notification"
              style={{
                color: 'var(--color-charcoal-light)',
                padding: '2px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <X size={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
