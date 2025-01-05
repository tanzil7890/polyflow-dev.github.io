
import { ApiSidebar } from './ApiSidebar';
import { ApiContent } from './ApiContent';

export default function ApiReferencePage() {
  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          <ApiSidebar />
          <ApiContent />
        </div>
      </div>
    </div>
  );
}