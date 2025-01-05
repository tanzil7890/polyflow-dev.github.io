import React from 'react';
import { Link } from 'react-router-dom';

interface HeroButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  to?: string;
  onClick?: () => void;
}

export function HeroButton({ children, primary, href, to, onClick }: HeroButtonProps) {
  if (to) {
    return (
      <Link
        to={to}
        className={`
          inline-flex items-center px-6 py-3 rounded-lg text-base font-medium
          transition-all duration-200 shadow-sm cursor-pointer
          ${primary 
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-blue-200'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }
        `}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center px-6 py-3 rounded-lg text-base font-medium
        transition-all duration-200 shadow-sm cursor-pointer
        ${primary 
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-blue-200'
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        }
      `}
    >
      {children}
    </a>
  );
}