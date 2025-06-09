import React from 'react';
import StepIndicator from './StepIndicator';
import Connector from './Connector';

const StepItem = ({ step, index, isLast, isVisible, isConnectorComplete }) => {
  return (
    <div
      className={`flex items-center gap-2 relative ${
        isVisible ? 'block' : 'hidden'
      } md:flex`}
    >
      <StepIndicator step={step} index={index} />
      {!isLast && <Connector isCompleted={isConnectorComplete} />}
    </div>
  );
};

export default StepItem;
