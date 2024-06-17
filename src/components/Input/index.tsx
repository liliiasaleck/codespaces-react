import React from 'react';

interface InputProps {
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ type, value, onChange, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="mt-4 p-4 border rounded-lg w-full bg-black text-grey600 text-2xl font-bold"
      placeholder={placeholder}
    />
  );
};

export default Input;
