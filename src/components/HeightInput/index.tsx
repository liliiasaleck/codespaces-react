import React, { useState } from 'react';

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
      <h2 className="text-2xl font-bold mb-4">How tall are you?</h2>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : '')}
        className="mt-4 p-4 border rounded-lg w-full bg-black text-grey600"
        placeholder="0"
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <button
        className="mt-6 px-4 py-4 font-semibold bg-button text-white rounded-lg w-full text-center"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default HeightInput;
