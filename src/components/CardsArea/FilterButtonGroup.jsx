// components/FilterButtonGroup.jsx
import React from 'react';

const FilterButtonGroup = ({ filters, activeFilter, onFilterChange }) => (
  <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-7 px-2">
    {filters.map((filter) => {
      const isActive = activeFilter === filter.id;
      return (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition
            ${isActive
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-[#2A2A2A] text-gray-400 hover:bg-blue-500 hover:text-white'}
          `}
        >
          {filter.label}
        </button>
      );
    })}
  </div>
);

export default FilterButtonGroup;
