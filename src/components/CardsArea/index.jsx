import React, { useEffect, useState } from 'react';
import SkipCard from './SkipCard';
import SearchInput from './SearchInput';
import FilterButtonGroup from './FilterButtonGroup'
import SkeletonCard from './SkeletonCard';
import skipImages from '../../utils/skipImages';

const CardArea = ({ onSelectSkip }) => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then((res) => res.json())
      .then((data) => {
        setSkips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch skips:', err);
        setLoading(false);
      });
  }, []);

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
        case 'road': return skip.allowed_on_road === true;
        case 'offroad': return skip.allowed_on_road === false;
        case 'heavy': return skip.allows_heavy_waste === true;
        default: return true;
      }
    });

  const handleSelect = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      onSelectSkip(null);
    } else {
      setSelectedIndex(index);
      onSelectSkip(filteredSkips[index]);
    }
  };

  return (
    <div className="max-w-4xl py-5 mx-auto">
      <div className="text-center mb-4">
        <h1 className="text-white text-2xl font-semibold">Choose Your Skip Size</h1>
        <p className="text-[#9CA3AF] mt-1.5">Select the skip size that best suits your needs</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="my-4">
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Skip Sizes..."
        />
      </form>

      <div className="flex flex-wrap justify-center gap-3 mb-7 px-2">
        <FilterButtonGroup
  filters={filterOptions}
  activeFilter={activeFilter}
  onFilterChange={(filterId) => {
    setActiveFilter(filterId);
    setSelectedIndex(null);
    onSelectSkip(null);
  }}
/>
      </div>

      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 mb-32 lg:grid-cols-2 gap-4 mx-auto max-w-3xl px-1">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        ) : filteredSkips.length > 0 ? (
          filteredSkips.map((skip, idx) => (
            <SkipCard
              key={idx}
              skip={skip}
              image={skipImages[skip.size] || skipImages[4]}
              isSelected={selectedIndex === idx}
              onSelect={() => handleSelect(idx)}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center mt-10">No skips found.</p>
        )}
      </div>
    </div>
  );
};

export default CardArea;
