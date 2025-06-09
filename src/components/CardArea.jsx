import React, { useEffect, useState } from 'react';
import { Plus, Check } from 'lucide-react';
import skipImages from '../utils/skipImages';

const CardArea = ({ onSelectSkip }) => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then(res => res.json())
      .then(data => {
        setSkips(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch skips:', err);
        setLoading(false);
      });
  }, []);

  const handleSelect = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      onSelectSkip(null);
    } else {
      setSelectedIndex(index);
      onSelectSkip(filteredSkips[index]);
    }
  };

  const filterOptions = [
    { id: 'all', label: 'All Skips' },
    { id: 'road', label: 'Road OK' },
    { id: 'offroad', label: 'Off-road Only' },
    { id: 'heavy', label: 'Heavy Waste Allowed' },
  ];

  const filteredSkips = skips
    .filter((skip) => `${skip.size}`.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((skip) => {
      switch (activeFilter) {
        case 'road':
          return skip.allowed_on_road === true;
        case 'offroad':
          return skip.allowed_on_road === false;
        case 'heavy':
          return skip.allows_heavy_waste === true;
        case 'light':
          return skip.allows_heavy_waste === false;
        case 'small':
          return skip.size <= 8;
        case 'medium':
          return skip.size >= 10 && skip.size <= 16;
        case 'large':
          return skip.size >= 20;
        case 'all':
        default:
          return true;
      }
    });

  const renderSkeletons = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <div key={idx} className="bg-[#1C1C1C] rounded-3xl shadow-md animate-pulse">
        <div className="w-full h-48 bg-[#2A2A2A]" />
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-24 bg-[#2A2A2A] rounded" />
            <div className="h-4 w-20 bg-[#2A2A2A] rounded-full" />
          </div>
          <div className="h-6 w-28 bg-[#2A2A2A] rounded" />
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-4xl py-5 mx-auto">
      <div className="flex justify-center items-center flex-col mb-4">
        <h1 className="text-white text-2xl font-semibold">Choose Your Skip Size</h1>
        <p className="text-[#9CA3AF] mt-1.5">Select the skip size that best suits your needs</p>
      </div>

      <form
        className="w-full max-w-4xl mx-auto flex-1 mb-4 mt-9"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="default-search" className="sr-only">Search</label>
        <div className="relative max-w-lg mx-auto">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
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
            id="default-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-400 border rounded-full bg-[#1C1C1C] border-[#2A2A2A] placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Skip Sizes..."
          />
        </div>
      </form>

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-7 px-2">
        {filterOptions.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setSelectedIndex(null);
                onSelectSkip(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition
                ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-[#2A2A2A] text-gray-400 hover:bg-blue-500 hover:text-white'
                }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="px-1">
        <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 mb-32 lg:grid-cols-2 gap-4 mx-auto max-w-3xl">
          {loading ? (
            renderSkeletons()
          ) : filteredSkips.length > 0 ? (
            filteredSkips.map((skip, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(idx)}
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
                        {skip.hire_period_days}-day hire ·{' '}
                        {skip.allows_heavy_waste ? 'Heavy waste allowed' : 'Light waste only'}
                      </p>
                      <button
                        className={`w-5 h-5 rounded-full flex items-center justify-center border border-gray-600 ${
                          isSelected ? 'bg-green-700 text-white' : 'bg-white text-black'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(idx);
                        }}
                      >
                        {isSelected ? <Check size={10} /> : <Plus size={10} />}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 col-span-full text-center mt-10">
              No skips found for that size.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardArea;
