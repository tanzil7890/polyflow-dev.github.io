import React from 'react';
import { Sidebar } from './Sidebar';
import { Content } from './Content';

export default function UserGuidePage() {
  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}