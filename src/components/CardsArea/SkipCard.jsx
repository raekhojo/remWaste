import React from 'react';
import { Plus, Check } from 'lucide-react';
import skipImages from '../../utils/skipImages';

const SkipCard = ({ skip, isSelected, onSelect }) => (
  <div
    onClick={onSelect} // whole card clickable
    className={`relative bg-[#1C1C1C] rounded-3xl shadow-md overflow-hidden transition hover:shadow-xl cursor-pointer ${
      isSelected ? 'ring-2 ring-blue-600 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : ''
    }`}
  >
    <img
      src={skipImages[skip.size] || skipImages[4]}
      alt={`${skip.size}-yard skip`}
      className="w-full h-48 object-cover"
    />
    <div className="p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-300">{skip.size}-yarder</span>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full 
            ${skip.allowed_on_road ? 'bg-blue-900 text-blue-200' : 'bg-red-900 text-red-300'}`}
        >
          {skip.allowed_on_road ? 'Road OK' : 'Off-road Only'}
        </span>
      </div>
      <h2 className="text-2xl font-semibold text-white mb-1">£{skip.price_before_vat}</h2>
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-500 mb-3">
          {skip.hire_period_days}-day hire · {skip.allows_heavy_waste ? 'Heavy waste allowed' : 'Light waste only'}
        </p>
        <button
          className={`w-5 h-5 rounded-full flex items-center justify-center border border-gray-600 ${
            isSelected ? 'bg-green-700 text-white' : 'bg-white text-black'
          }`}
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering card onClick
            onSelect();
          }}
        >
          {isSelected ? <Check size={10} /> : <Plus size={10} />}
        </button>
      </div>
    </div>
  </div>
);

export default SkipCard;
