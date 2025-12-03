// src/App.tsx
import React, { useState } from 'react';
import Map from './components/Map';
import FilterBar from './components/FilterBar';
import LocationButton from './components/LocationButton';
import { bars } from './data/bars';
import { useGeolocation } from './hooks/useGeolocation';
import './App.css';

function App() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [centerPosition, setCenterPosition] = useState<[number, number] | null>(null);
  
  const { position, loading, error, accuracy, refreshPosition } = useGeolocation();

  // 利用可能な年度を取得
  const availableYears = Array.from(
    new Set(
      bars.flatMap(bar => 
        bar.participation_years.map(py => py.year)
      )
    )
  ).sort((a, b) => b - a);

  // 現在地ボタンがクリックされた時
  const handleLocationButtonClick = () => {
    if (position) {
      setCenterPosition(position);
    } else {
      refreshPosition();
    }
  };

  return (
    <div className="App">
      <FilterBar
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        availableYears={availableYears}
      />
      
      {/* GPS エラー表示 */}
      {error && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          backgroundColor: '#ff4444',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '14px'
        }}>
          ⚠️ {error}
        </div>
      )}
      
      <Map 
        bars={bars} 
        selectedYear={selectedYear}
        userPosition={position}
        accuracy={accuracy}
        centerPosition={centerPosition}
      />
      
      <LocationButton 
        onClick={handleLocationButtonClick}
        loading={loading}
      />
    </div>
  );
}

export default App;
