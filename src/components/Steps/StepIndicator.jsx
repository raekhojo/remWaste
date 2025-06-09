import React from 'react';
import { motion } from 'framer-motion';

const StepIndicator = ({ step, index }) => {
  const Icon = step.icon;
  const isCompleted = step.status === 'completed';
  const isCurrent = step.status === 'current';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className={`flex items-center gap-2 px-3 py-1 rounded-full border text-sm min-w-max
        ${
          isCompleted
            ? 'bg-green-500 text-white border-green-500'
            : isCurrent
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-500 border-gray-300'
        }
      `}
    >
      <Icon className="w-4 h-4" />
      <span className="whitespace-nowrap">{step.title}</span>
    </motion.div>
  );
};

export default StepIndicator;
