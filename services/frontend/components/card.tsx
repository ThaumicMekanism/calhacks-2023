import React, { useState } from 'react';

const Card = ({ title, text }: any) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
      <h2 className="card-heading">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default Card;