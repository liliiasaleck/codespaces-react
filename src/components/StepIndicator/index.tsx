import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: totalSteps }, (_, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex items-center justify-center w-4 h-4 rounded-full ${
              index + 1 <= currentStep ? 'bg-green500' : 'bg-grey800'
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full ${
                index + 1 <= currentStep ? 'bg-green500' : 'bg-grey800'
              }`}
            ></div>
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`flex-grow h-1.5 mx-0.5 ${
                index + 1 < currentStep ? 'bg-green500' : 'bg-grey800'
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
