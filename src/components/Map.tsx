// src/components/Map.tsx
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Bar } from '../types/Bar';
import { calculateDistance, formatDistance } from '../utils/distance';
import LocationMarker from './LocationMarker';
import L from 'leaflet';

// Leafletのデフォルトアイコン問題を修正
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  bars: Bar[];
  selectedYear: number;
  userPosition: [number, number] | null;
  accuracy: number | null;
  centerPosition?: [number, number] | null;
}

// 地図の中心を変更するためのコンポーネント
function ChangeView({ center, zoom }: { center: [number, number]; zoom?: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom || map.getZoom());
  }, [center, zoom, map]);
  return null;
}

const Map: React.FC<MapProps> = ({ 
  bars, 
  selectedYear, 
  userPosition,
  accuracy,
  centerPosition
}) => {
  // 東京の中心座標（デフォルト）
  const defaultCenter: [number, number] = [35.6812, 139.7671];
  const mapCenter = centerPosition || userPosition || defaultCenter;

  // 選択された年度に参加しているバーのみフィルター
  const filteredBars = bars.filter(bar => 
    bar.participation_years.some(py => py.year === selectedYear)
  );

  // ユーザー位置からの距離でソート
  const barsWithDistance = filteredBars.map(bar => {
    const distance = userPosition
      ? calculateDistance(
          userPosition[0],
          userPosition[1],
          bar.location.lat,
          bar.location.lng
        )
      : null;
    return { ...bar, distance };
  }).sort((a, b) => {
    if (a.distance === null) return 1;
    if (b.distance === null) return -1;
    return a.distance - b.distance;
  });

  return (
    <MapContainer
      center={mapCenter}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
    >
      <ChangeView center={mapCenter} />
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* 現在地マーカー */}
      {userPosition && (
        <LocationMarker position={userPosition} accuracy={accuracy} />
      )}
      
      {/* バーマーカー */}
      {barsWithDistance.map(bar => (
        <Marker
          key={bar.id}
          position={[bar.location.lat, bar.location.lng]}
        >
          <Popup>
            <div style={{ minWidth: '200px' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{bar.name}</h3>
              
              {/* 現在地からの距離 */}
              {bar.distance !== null && (
                <p style={{ 
                  margin: '5px 0', 
                  fontSize: '14px', 
                  fontWeight: 'bold',
                  color: '#4285F4' 
                }}>
                  📏 現在地から {formatDistance(bar.distance)}
                </p>
              )}
              
              <p style={{ margin: '5px 0', fontSize: '12px' }}>
                📍 {bar.address}
              </p>
              <p style={{ margin: '5px 0', fontSize: '12px' }}>
                🍸 エリア: {bar.area}
              </p>
              {bar.opening_hours && (
                <p style={{ margin: '5px 0', fontSize: '12px' }}>
                  🕐 {bar.opening_hours}
                </p>
              )}
              {bar.phone && (
                <p style={{ margin: '5px 0', fontSize: '12px' }}>
                  📞 {bar.phone}
                </p>
              )}
              
              {/* Google Mapsで開く */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${bar.location.lat},${bar.location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '5px 10px',
                  backgroundColor: '#4285F4',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '12px'
                }}
              >
                🗺️ ルート案内
              </a>
              
              <hr style={{ margin: '10px 0' }} />
              <h4 style={{ margin: '5px 0', fontSize: '14px' }}>
                {selectedYear}年のカクテル:
              </h4>
              {bar.participation_years
                .filter(py => py.year === selectedYear)
                .map(py => (
                  <ul key={py.year} style={{ margin: '5px 0', paddingLeft: '20px' }}>
                    {py.cocktails.map(cocktail => (
                      <li key={cocktail.id} style={{ fontSize: '12px', marginBottom: '5px' }}>
                        <strong>{cocktail.name}</strong>
                        <br />
                        <span style={{ color: '#666' }}>{cocktail.description}</span>
                      </li>
                    ))}
                  </ul>
                ))}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
