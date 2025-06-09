import React from 'react';
import {
  Truck,
  PoundSterling,
  Clock,
  Trash2,
  BadgeCheck,
} from 'lucide-react';

const ItemDetails = ({ selectedSkip }) => {
  if (!selectedSkip) {
    return (
      <div className="mt-4 text-gray-400 bg-[#0F0F0F] p-4 rounded-xl text-sm sm:text-base">
        No skip selected.
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center bg-[#0F0F0F] text-white py-10 px-4 sm:px-8">
      <div className="md:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="md:rounded-2xl overflow-hidden md:h-[460px] bg-[#0F0F0F]">
          <img
            src={selectedSkip.image}
            alt={`${selectedSkip.size}-yard skip`}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between h-[460px] md:p-6 rounded-2xl bg-transparent">

          {/* Title + Subtitle */}
          <div>
            <p className="text-sm text-gray-400 mb-1">Skip Service</p>
            <h2 className="text-4xl font-semibold mb-2">{selectedSkip.size}-Yard Skip</h2>
            <p className=" text-white font-medium text-2xl mb-4">{`£${selectedSkip.price_before_vat}`}</p>
          <p className="text-sm text-gray-500 mb-3">
                        {selectedSkip.hire_period_days}-day hire ·{' '}
                        {selectedSkip.allows_heavy_waste ? 'Heavy waste allowed' : 'Light waste only'}
                      </p>
          </div>
            <button className="w-full py-3 mt-2 rounded-lg bg-white text-black hover:bg-gray-100 text-base">
              Continue
            </button>

            <p className=' text-sm text-gray-400 mt-4'>Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>

          {/* Info Grid */}
          <div className="space-y-3 text-sm mt-6">
            {[
              {
                icon: <Clock size={16} className="text-white" />,
                label: 'Hire Period',
                value: `${selectedSkip.hire_period_days} days`,
              },
              {
                icon: <Trash2 size={16} className="text-white" />,
                label: 'Waste Type',
                value: selectedSkip.allows_heavy_waste ? 'Heavy waste allowed' : 'Light waste only',
              },
              {
                icon: (
                  <BadgeCheck
                    size={16}
                    className={selectedSkip.allowed_on_road ? 'text-green-400' : 'text-red-400'}
                  />
                ),
                label: 'Road Permission',
                value: selectedSkip.allowed_on_road ? 'Allowed on road' : 'Off-road only',
              },
              {
                icon: <Truck size={16} className="text-white" />,
                label: 'Skip Size',
                value: `${selectedSkip.size} yard`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-sm"
              >
                <div className="flex items-center gap-2 text-gray-300">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <span className="text-white font-medium">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          {/* <div className="flex gap-3 mt-6">
            <button className="w-1/2 py-2 rounded-lg bg-[#333333] hover:bg-[#444] text-white text-sm">
              Back
            </button>
            <button className="w-1/2 py-2 rounded-lg bg-white text-black hover:bg-gray-100 text-sm">
              Continue
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
