import React from 'react';

const SkeletonCard = () => (
  <div className="bg-[#1C1C1C] rounded-3xl shadow-md animate-pulse">
    <div className="w-full h-48 bg-[#2A2A2A]" />
    <div className="p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-4 w-24 bg-[#2A2A2A] rounded" />
        <div className="h-4 w-20 bg-[#2A2A2A] rounded-full" />
      </div>
      <div className="h-6 w-28 bg-[#2A2A2A] rounded" />
    </div>
  </div>
);

export default SkeletonCard;
