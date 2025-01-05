
import { Github, Package } from 'lucide-react';
import { NavLink } from './NavLink';

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <NavLink href="/">
              <div className="flex items-center">
                <Package className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold">PolyFlow</span>
              </div>
            </NavLink>
          </div>
          <div className="flex items-center space-x-6">
            <NavLink href="/docs">Docs</NavLink>
            <NavLink href="/user-guide">User Guide</NavLink>
           {/*  <NavLink href="/api">API Reference</NavLink> */}
            <NavLink href="https://github.com/tanzil7890/polyflow">
              <Github className="h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}