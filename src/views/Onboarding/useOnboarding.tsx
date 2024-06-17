import React, { useState } from 'react';

export const useOnboarding = () => {
    const [step, setStep] = useState<number>(1);
    const [selectedSports, setSelectedSports] = useState<string[]>([]);
    const [height, setHeight] = useState<number | null>(null);
    const [weight, setWeight] = useState<number | null>(null);
  
    const handleContinue = (data: any) => {
      switch (step) {
        case 1:
          setSelectedSports(data);
          break;
        case 2:
          setHeight(data);
          break;
        case 3:
          setWeight(data);
          break;
        default:
          break;
      }
      setStep(step + 1);
    };
  
    return { step, height, weight, handleContinue };
  };