// components/SearchInput.jsx
import React from 'react';

const SearchInput = ({ value, onChange, placeholder }) => (
  <div className="relative max-w-lg mx-auto">
    <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      value={value}
      onChange={onChange}
      className="block w-full p-4 ps-10 text-sm text-gray-400 border rounded-full bg-[#1C1C1C] border-[#2A2A2A] placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
    />
  </div>
);

export default SearchInput;
