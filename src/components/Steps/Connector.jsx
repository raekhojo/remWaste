import React from 'react';
import { motion } from 'framer-motion';

const Connector = ({ isCompleted }) => (
  <div className="absolute right-[-18px] top-1/2 transform -translate-y-1/2 w-4 h-1 z-0">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`h-full rounded-sm ${
        isCompleted ? 'bg-green-500' : 'bg-gray-300'
      }`}
    />
  </div>
);

export default Connector;
