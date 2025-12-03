// src/components/LocationButton.tsx
import React from 'react';

interface LocationButtonProps {
  onClick: () => void;
  loading: boolean;
}

const LocationButton: React.FC<LocationButtonProps> = ({ onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={{
        position: 'absolute',
        bottom: '100px',
        right: '10px',
        zIndex: 1000,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'white',
        border: 'none',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        cursor: loading ? 'wait' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => {
        if (!loading) {
          e.currentTarget.style.transform = 'scale(1.1)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      title="現在地に移動"
    >
      {loading ? '⏳' : '📍'}
    </button>
  );
};

export default LocationButton;
