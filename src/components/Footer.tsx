import { Package } from 'lucide-react';
//import { Github, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold text-white">PolyFlow</span>
            </div>
            <p className="mt-4 text-sm">
            Turn complex data operations into natural conversations - PolyFlow brings the power of LLMs to your DataFrame workflows, making data processing as simple as asking questions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Documentation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/user-guide" className="text-sm hover:text-white">User Guide</a>
              </li>
              <li>
                <a href="/docs" className="text-sm hover:text-white">API Reference</a>
              </li>
              <li>
                <a target='_blank' href="https://github.com/tanzil7890/polyflow/blob/main/POLYFLOW_DATA_OPERATION.md" className="text-sm hover:text-white">Examples</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Community
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a target='_blank' href="https://github.com/tanzil7890/polyflow" className="text-sm hover:text-white">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">Discord</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">Twitter</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">Benchmarks</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">Releases</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PolyFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}