import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export function SidebarLink({ href, children, isActive }: SidebarLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
        isActive
          ? 'bg-blue-50 text-blue-700'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <ChevronRight className={`h-4 w-4 mr-2 ${
        isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-600'
      }`} />
      {children}
    </a>
  );
}