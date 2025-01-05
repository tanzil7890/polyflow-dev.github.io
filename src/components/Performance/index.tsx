import { ArrowRight, Zap, Cpu, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PerformanceGraph } from './PerformanceGraph';

export default function Performance() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {/* Built by developers for developers to achieve up to 50x performance */}Built by AI Researchers for Data Scientists to Achieve up to 100x Faster Semantic Processing
          </h2>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Why use PolyFlow?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {/* PolyFlow was benchmarked against several other solutions in real-world scenarios. 
            Our solution excels due to its parallel execution engine, efficient algorithms, 
            and use of vectorization with SIMD (Single Instruction, Multiple Data). */}

            PolyFlow was benchmarked against traditional LLM+DataFrame pipelines and manual semantic 
            processing approaches. The framework achieves significant performance gains through:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">30x Faster Than Pandas</h4>
                  <p className="text-gray-600">
                    Achieve more than 30x performance gains compared to traditional DataFrame libraries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Parallel Processing</h4>
                  <p className="text-gray-600">
                    Leverages multi-core processing and SIMD operations for maximum efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Gauge className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Optimized Memory Usage</h4>
                  <p className="text-gray-600">
                    Efficient memory management for handling large datasets with minimal overhead.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn more about our benchmarks
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-sm text-gray-500 mb-4">
              Performance Illustration
            </h4>
            <PerformanceGraph />
            <p className="text-sm text-gray-500 mt-4 text-center">
              PolyFlow's optimized data processing pipeline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 