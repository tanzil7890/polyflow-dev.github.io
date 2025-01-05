import { ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  number: string;
  label: ReactNode;
}

export function StatsCard({ icon, number, label }: StatsCardProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-blue-100 hover:border-blue-200 transition-all hover:shadow-lg">
      <div className="flex items-center justify-center mb-3">
        {icon}
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}