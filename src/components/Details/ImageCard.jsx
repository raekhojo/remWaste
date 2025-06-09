// components/Common/ImageCard.jsx
import React from 'react';

const ImageCard = ({ src, alt, className = '' }) => (
  <div className={`rounded-2xl overflow-hidden bg-[#0F0F0F] ${className}`}>
    <img src={src} alt={alt} className="object-cover w-full h-full" />
  </div>
);

export default ImageCard;
