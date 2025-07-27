import React from 'react';
import './anime.css';
import animatedImage from '../../images/videoframe_1834.png';

function AnimatedImageSection() {
 const rows = 20;
const cols = 30;
  const pieces = [];

  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
    pieces.push(
      <div
        key={`${row}-${col}`}
        className="grid-piece"
        style={{
          backgroundImage: `url(${animatedImage})`,
          backgroundPosition: `${(col * 100) / (cols - 1)}% ${(row * 100) / (rows - 1)}%`,
          backgroundSize: `${cols * 100}% ${rows * 100}%`,
          animationDelay: `${(row + col) * 0.4}s`
        }}
      />
    );
  }

  }

  return <div className="grid-container">{pieces}</div>;
}

export default AnimatedImageSection;
