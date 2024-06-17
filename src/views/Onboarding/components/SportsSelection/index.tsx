import React, { useState } from 'react';
import { sportsOptions } from './const';
import Button from '../../../../components/Button';
import Header from '../../../../components/Header';

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
      <Header text="What sports do you like" />
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
      <Button
        onClick={() => onContinue(selectedSports)}
        disabled={selectedSports.length === 0}
        className={`${
          selectedSports.length > 0 ? 'bg-button text-white' : 'bg-gray-400 text-gray-600'
        }`}
      />
    </div>
  );
};

export default SportsSelection;
