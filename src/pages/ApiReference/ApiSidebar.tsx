import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ApiSidebarLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

function ApiSidebarLink({ href, children, isActive }: ApiSidebarLinkProps) {
  return (
    <a
      href={href}
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

export function ApiSidebar() {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-20">
        <nav className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Getting Started</h3>
            <div className="space-y-1">
              <ApiSidebarLink href="#installation">Installation</ApiSidebarLink>
              <ApiSidebarLink href="#configuration">Configuration</ApiSidebarLink>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Core API</h3>
            <div className="space-y-1">
              <ApiSidebarLink href="#dataframe">DataFrame</ApiSidebarLink>
              <ApiSidebarLink href="#series">Series</ApiSidebarLink>
              <ApiSidebarLink href="#expressions">Expressions</ApiSidebarLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
