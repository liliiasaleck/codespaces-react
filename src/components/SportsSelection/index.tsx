import React, { useState } from 'react';
import { sportsOptions } from './const';

interface SportsSelectionProps {
  onContinue: (selectedSports: string[]) => void;
}

const SportsSelection = ({ onContinue }: SportsSelectionProps) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const handleSelect = (sport: string) => {
    setSelectedSports((prev) =>
      prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
    );
  };

  return (
    <div className="p-4 min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">What sports do you like</h2>
      <div className="flex flex-col gap-4">
        {sportsOptions.map((sport) => (
          <button
            key={sport.name}
            className={`flex items-center justify-between px-4 py-3 rounded-lg transition bg-grey800`}
            onClick={() => handleSelect(sport.name)}
          >
            <div className="flex items-center">
              {sport.icon && <img src={sport.icon} alt={sport.name} className="h-10 w-10 mr-4" />}
              <div className="flex flex-col items-start">
                <div className="text-lg font-semibold">{sport.name}</div>
                <div className="text-sm text-gray-400">{sport.description}</div>
              </div>
            </div>
            <div
              className={`h-6 w-6 border-2 rounded-full ${
                selectedSports.includes(sport.name) ? 'border-green500 bg-green500' : 'border-gray-700'
              }`}
            />
          </button>
        ))}
      </div>
      <button
        className={`mt-6 px-4 py-4 font-semibold rounded-lg w-full text-center transition ${
          selectedSports.length > 0 ? 'bg-button text-white' : 'bg-gray-400 text-gray-600'
        }`}
        onClick={() => onContinue(selectedSports)}
        disabled={selectedSports.length === 0}
      >
        Continue
      </button>
    </div>
  );
};

export default SportsSelection;
