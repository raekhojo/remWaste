import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Step from '../components/Steps/index';
import CardArea from '../components/CardsArea/index';
import ItemDetails from '../components/Details/index';
import skipImages from '../utils/skipImages'; // Make sure you have this imported to get images by size

const Home = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const handleCardSelect = (skip) => {
    setSelectedSkip(skip);
  };

  const closeDrawer = () => {
    setSelectedSkip(null);
  };

  return (
    <div className="text-white p-4 relative h-screen">
      <Step />
      <CardArea onSelectSkip={handleCardSelect} />

      {/* AnimatePresence for mounting/unmounting with animation */}
      <AnimatePresence>
        {selectedSkip && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sliding drawer */}
            <motion.div
              key="drawer"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 bg-[#0F0F0F] rounded-t-3xl shadow-lg z-50 max-h-[100vh] overflow-y-auto md:p-5"
            >
              <button
                onClick={closeDrawer}
                className="mb-4 text-gray-400 hover:text-white md:p-0 px-6 mt-7 focus:outline-none"
              >
                Close ✕
              </button>
              {/* Pass image URL to ItemDetails */}
              <ItemDetails
                selectedSkip={{
                  ...selectedSkip,
                  image: skipImages[selectedSkip.size] || skipImages[4],
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
