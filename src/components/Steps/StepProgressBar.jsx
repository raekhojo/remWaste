import React from 'react';
import StepItem from './StepItem';

const StepProgressBar = ({ steps }) => {
  const currentIndex = steps.findIndex((step) => step.status === 'current');

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md px-4 md:px-10 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 overflow-x-auto">
        {steps.map((step, index) => {
          const isVisibleOnMobile = index >= currentIndex - 2 && index <= currentIndex;
          const isLast = index === steps.length - 1;
          const nextStep = steps[index + 1];
          const isConnectorComplete = step.status === 'completed' || nextStep?.status === 'completed';

          return (
            <StepItem
              key={index}
              step={step}
              index={index}
              isLast={isLast}
              isVisible={isVisibleOnMobile}
              isConnectorComplete={isConnectorComplete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StepProgressBar;
