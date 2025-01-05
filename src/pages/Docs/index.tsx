
import { Link } from 'react-router-dom';
import { Book, Code, Compass } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Documentation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Link to="/user-guide" className="group">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-100">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Guide</h3>
              <p className="text-gray-600">
                Comprehensive guide to get started and master Polars.
              </p>
            </div>
          </Link>

          <Link to="/user-guide" className="group">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-100">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">API Reference</h3>
              <p className="text-gray-600">
                Detailed documentation of all Polars APIs and features.
              </p>
            </div>
          </Link>

          <Link to="/examples" className="group">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-100">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <Compass className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Examples</h3>
              <p className="text-gray-600">
                Real-world examples and best practices using Polars.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}