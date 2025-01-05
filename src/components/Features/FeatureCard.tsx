import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-all hover:shadow-xl">
      <div className="absolute -top-4 -left-4 p-4 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
        <div className="text-blue-600 w-6 h-6">
          {icon}
        </div>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}