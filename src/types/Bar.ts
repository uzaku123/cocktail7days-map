// src/types/Bar.ts

export interface Location {
  lat: number;
  lng: number;
}

export interface Cocktail {
  id: string;
  name: string;
  description: string;
  image_url?: string;
}

export interface ParticipationYear {
  year: number;
  theme: string;
  cocktails: Cocktail[];
}

export interface Bar {
  id: string;
  name: string;
  address: string;
  location: Location;
  participation_years: ParticipationYear[];
  area: string;
  website?: string; 
  image_url?: string;
  opening_hours?: string;
  phone?: string;
}
