// src/data/bars.ts
import { Bar } from '../types/Bar';

export const bars: Bar[] = [
  {
    id: 'bar001',
    name: 'Bar High Five',
    address: '東京都中央区銀座4-5-9',
    location: {
      lat: 35.6717,
      lng: 139.7638
    },
    area: 'ginza',
    participation_years: [
      {
        year: 2025,
        theme: 'IF',
        cocktails: [
          {
            id: 'cocktail001',
            name: 'IF Tokyo Dream',
            description: '東京の夜をイメージしたジンベースのカクテル'
          },
          {
            id: 'cocktail002',
            name: 'IF Ginza Lights',
            description: '銀座の煌めきを表現したスパークリングカクテル'
          }
        ]
      },
      {
        year: 2024,
        theme: 'w/ MUSIC',
        cocktails: [
          {
            id: 'cocktail003',
            name: 'Jazz Night',
            description: 'ジャズをイメージしたウイスキーベース'
          }
        ]
      }
    ],
    opening_hours: '18:00-26:00',
    phone: '03-3571-5815'
  },
  {
    id: 'bar002',
    name: 'Bar Trench',
    address: '東京都渋谷区恵比寿西1-5-8',
    location: {
      lat: 35.6474,
      lng: 139.7099
    },
    area: 'shibuya',
    participation_years: [
      {
        year: 2025,
        theme: 'IF',
        cocktails: [
          {
            id: 'cocktail004',
            name: 'IF Future Garden',
            description: 'ハーブとフルーツの未来を想像させるカクテル'
          }
        ]
      }
    ],
    opening_hours: '19:00-02:00',
    phone: '03-3780-5291'
  },
  {
    id: 'bar003',
    name: 'Star Bar Ginza',
    address: '東京都中央区銀座1-5-13',
    location: {
      lat: 35.6733,
      lng: 139.7656
    },
    area: 'ginza',
    participation_years: [
      {
        year: 2025,
        theme: 'IF',
        cocktails: [
          {
            id: 'cocktail005',
            name: 'IF Star Light',
            description: '星空をイメージしたブルーのカクテル'
          }
        ]
      }
    ],
    opening_hours: '17:30-24:00'
  },
  {
    id: 'bar004',
    name: 'Bar Benfiddich',
    address: '東京都新宿区西新宿1-13-7',
    location: {
      lat: 35.6938,
      lng: 139.6993
    },
    area: 'shinjuku',
    participation_years: [
      {
        year: 2025,
        theme: 'IF',
        cocktails: [
          {
            id: 'cocktail006',
            name: 'IF Herb Garden',
            description: '自家製ハーブを使った革新的なカクテル'
          }
        ]
      }
    ],
    opening_hours: '18:00-03:00',
    phone: '03-6258-1995'
  },
  {
    id: 'bar005',
    name: 'Bar Gen Yamamoto',
    address: '東京都港区六本木6-6-9',
    location: {
      lat: 35.6627,
      lng: 139.7308
    },
    area: 'roppongi',
    participation_years: [
      {
        year: 2025,
        theme: 'IF',
        cocktails: [
          {
            id: 'cocktail007',
            name: 'IF Seasonal Essence',
            description: '季節のフルーツを使った究極のカクテル'
          }
        ]
      }
    ],
    opening_hours: '19:00-24:00'
  }
];
