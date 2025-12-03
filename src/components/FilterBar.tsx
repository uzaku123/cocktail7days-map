// src/components/FilterBar.tsx
import React from 'react';

interface FilterBarProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  availableYears: number[];
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  selectedYear, 
  onYearChange, 
  availableYears 
}) => {
  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      backgroundColor: 'white',
      padding: '15px 20px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    }}>
      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
        開催年度:
      </label>
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(Number(e.target.value))}
        style={{
          padding: '8px 12px',
          fontSize: '14px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          cursor: 'pointer'
        }}
      >
        {availableYears.map(year => (
          <option key={year} value={year}>
            {year}年
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
