import React from 'react';

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return <h2 className="text-2xl font-bold mb-4">{text}</h2>;
};

export default Header;
