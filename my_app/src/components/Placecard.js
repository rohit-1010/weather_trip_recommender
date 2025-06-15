import React from 'react';
import './PlaceCard.css';

const PlaceCard = ({ place }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <span key={i} className={i < place.rating ? 'star filled' : 'star'}>
        ★
      </span>
    ));

  return (
    <div className="place-shadow-wrapper">
      <div className="place-card">
        <div
          className="place-image"
          style={{ backgroundImage: `url(${place.image})` }}
        >
          <div className="overlay">
            <h3 className="place-name">{place.name}</h3>
            <div className="rating">{stars}</div>
            <button className="read-more">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
