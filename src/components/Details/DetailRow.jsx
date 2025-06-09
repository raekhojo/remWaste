// components/Details/DetailRow.jsx
import React from 'react';

const DetailRow = ({ icon, label, value }) => (
  <div className="flex justify-between items-center text-sm">
    <div className="flex items-center gap-2 text-gray-300">
      {icon}
      <span>{label}</span>
    </div>
    <span className="text-white font-medium">{value}</span>
  </div>
);

export default DetailRow;
