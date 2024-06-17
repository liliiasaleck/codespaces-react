export const calculateBMI = (height: number, weight: number): number => {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };

  export const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return '0-18.4';
    if (bmi < 25) return '18.5-24.9';
    if (bmi < 30) return '25-29.9';
    if (bmi < 35) return '30-34.9';
    if (bmi < 40) return '35-39.9';
    return '40+';
  };
  