import React, { useEffect } from 'react';
import { calculateBMI, getBMICategory } from './helper';

interface BMIResultProps {
  height: number;
  weight: number;
}

const BMIResult = ({ height, weight }: BMIResultProps) => {
  const bmi = calculateBMI(height, weight).toFixed(1);
  const bmiNumber = parseFloat(bmi);

  useEffect(() => {
    const heightRange = Math.floor(height / 10) * 10;
    const weightRange = Math.floor(weight / 10) * 10;
    const bmiRange = getBMICategory(bmiNumber);

    console.log(`height: ${heightRange}-${heightRange + 9}, weight: ${weightRange}-${weightRange + 9}, BMI: ${bmiRange}`);
  }, [height, weight, bmiNumber]);

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Your BMI is {bmi}</h2>
    </div>
  );
};

export default BMIResult;
