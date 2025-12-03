// src/components/LocationMarker.tsx
import React from 'react';
import { CircleMarker, Popup, Circle } from 'react-leaflet';

interface LocationMarkerProps {
  position: [number, number];
  accuracy: number | null;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({ position, accuracy }) => {
  return (
    <>
      {/* 精度範囲を示す円 */}
      {accuracy && (
        <Circle
          center={position}
          radius={accuracy}
          pathOptions={{
            color: '#4285F4',
            fillColor: '#4285F4',
            fillOpacity: 0.1,
            weight: 1
          }}
        />
      )}
      
      {/* 現在地マーカー */}
      <CircleMarker
        center={position}
        radius={8}
        pathOptions={{
          color: '#fff',
          weight: 2,
          fillColor: '#4285F4',
          fillOpacity: 1
        }}
      >
        <Popup>
          <div>
            <strong>📍 現在地</strong>
            {accuracy && (
              <p style={{ margin: '5px 0 0 0', fontSize: '12px' }}>
                精度: 約{Math.round(accuracy)}m
              </p>
            )}
          </div>
        </Popup>
      </CircleMarker>
    </>
  );
};

export default LocationMarker;
