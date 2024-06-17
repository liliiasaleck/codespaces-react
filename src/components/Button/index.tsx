import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({ onClick, disabled = false, className = '' }: ButtonProps) => {
  return (
    <button
      className={`mt-6 px-4 py-4 font-semibold bg-button text-white rounded-lg w-full text-center ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      Continue
    </button>
  );
};

export default Button;
