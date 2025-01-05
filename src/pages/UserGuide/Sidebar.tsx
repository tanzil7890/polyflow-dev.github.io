import React from 'react';
import { SidebarLink } from './SidebarLink';
import { useActiveSection } from './hooks/useActiveSection';

export function Sidebar() {
  const activeSection = useActiveSection();

  return (
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-20">
        <nav className="space-y-1">
          <SidebarSection title="Getting Started">
            <SidebarLink 
              href="#dataframes-semantic" 
              isActive={activeSection === 'dataframes-semantic'}
            >
              DataFrames with Semantic Ops
            </SidebarLink>
          </SidebarSection>
          
          <SidebarSection title="Core Features">
            <SidebarLink 
              href="#core-operators"
              isActive={activeSection === 'core-operators'}
            >
              Core Semantic Operators (In development)
            </SidebarLink>
          </SidebarSection>
          
          <SidebarSection title="Advanced Topics">
            <SidebarLink 
              href="#advanced-features"
              isActive={activeSection === 'advanced-features'}
            >
              Advanced Features
            </SidebarLink>
            <SidebarLink 
              href="#model-integration"
              isActive={activeSection === 'model-integration'}
            >
              Model Integration
            </SidebarLink>
            <SidebarLink 
              href="#setting-configuration"
              isActive={activeSection === 'setting-configuration'}
            >
              Settings Configuration
            </SidebarLink>
          </SidebarSection>
        </nav>
      </div>
    </div>
  );
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}