import React, { useState } from 'react';
import Header from '../../../../components/Header';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

interface WeightInputProps {
  onContinue: (weight: number) => void;
}

const WeightInput = ({ onContinue }: WeightInputProps) => {
  const [weight, setWeight] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);

  const handleContinue = () => {
    if (typeof weight === 'number' && weight > 0) {
      setError(null);
      onContinue(weight);
    } else {
      setError('Please enter a valid weight');
    }
  };

  return (
    <div className="p-4 text-white">
      <Header text="What is your current weight?" />
      <Input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : '')}
        placeholder="0"
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <Button onClick={handleContinue} />
    </div>
  );
};

export default WeightInput;

