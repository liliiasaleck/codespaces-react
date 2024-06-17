import React, { useState } from 'react';
import SportsSelection from '../../components/SportsSelection';
import HeightInput from '../../components/HeightInput';
import WeightInput from '../../components/WeightInput';
import BMIResult from '../../components/BMIResult';
import StepIndicator from '../../components/StepIndicator';
import { useOnboarding } from './useOnboarding';

const Onboarding = () => {
  const { step, height, weight, handleContinue } = useOnboarding();

  return (
    <div className="p-6 rounded shadow-md w-full max-w-md">
      <StepIndicator currentStep={step} totalSteps={4} />
      {step === 1 && <SportsSelection onContinue={handleContinue} />}
      {step === 2 && <HeightInput onContinue={handleContinue} />}
      {step === 3 && <WeightInput onContinue={handleContinue} />}
      {step === 4 && height !== null && weight !== null && <BMIResult height={height} weight={weight} />}
    </div>
  );
};

export default Onboarding;
