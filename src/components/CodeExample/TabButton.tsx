import React from 'react';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        active 
          ? 'bg-gray-800 text-white' 
          : 'text-gray-400 hover:text-gray-300'
      }`}
    >
      {children}
    </button>
  );
}