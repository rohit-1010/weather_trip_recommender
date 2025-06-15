import React from 'react';
import PlaceCard from '../components/PlaceCard';
import './Places.css';

const places = [
  {
    name: 'Santorini, Greece',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Banff, Canada',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Kyoto, Japan',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Bali, Indonesia',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Paris, France',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
  },
];



const Places = () => {
  return (
    <div className="places-page">
      <h1 className="places-title">🌍 Recommended Travel Destinations</h1>
      <div className="places-container">
        {places.map((place, idx) => (
          <PlaceCard key={idx} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Places;
