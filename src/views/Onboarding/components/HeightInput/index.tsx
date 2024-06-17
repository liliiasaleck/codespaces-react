import React, { useState } from 'react';
import Header from '../../../../components/Header';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

interface HeightInputProps {
  onContinue: (height: number) => void;
}

const HeightInput = ({ onContinue }: HeightInputProps) => {
  const [height, setHeight] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);

  const handleContinue = () => {
    if (typeof height === 'number' && height > 0) {
      setError(null);
      onContinue(height);
    } else {
      setError('Please enter a valid height');
    }
  };

  return (
    <div className="p-4 text-white">
      <Header text="How tall are you?" />
      <Input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : '')}
        placeholder="0"
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <Button onClick={handleContinue} />
    </div>
  );
};

export default HeightInput;
