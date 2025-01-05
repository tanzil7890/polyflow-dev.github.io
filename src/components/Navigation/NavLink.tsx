import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  const isExternal = href.startsWith('http');
  const baseClasses = 'text-gray-600 hover:text-gray-900 transition-colors';
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  if (isExternal) {
    return (
      <a 
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={combinedClasses}>
      {children}
    </Link>
  );
}