import { useEffect, useRef } from 'react';
import { ArrowRight, Terminal, BarChart2, Layers } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { HeroButton } from './HeroButton';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium animate-fade-in-up">
            <Terminal className="w-4 h-4 mr-2" />
            New: PolyFlow 1.0 Released
          </div>
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 opacity-0 transition-opacity duration-1000"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              LLM-powered DataFrame library
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Transform your data processing with the power of AI. PolyFlow seamlessly combines Language Models (LLMs) with familiar DataFrame operations, enabling intuitive semantic analysis of both structured and unstructured data. {/* Write natural language queries, perform semantic joins, and extract insights with just a few lines of code.  */}{/* Written in Python, 
            available for Python, Node.js, and more. */}
          </p>
          

          <div className="mb-10 animate-fade-in-up delay-350">
            <div className="inline-block text-left bg-gray-900 rounded-xl overflow-hidden">
              <div className="px-4 py-2 bg-gray-800/50 border-b border-gray-700">
                <p className="text-sm text-gray-400">First step: Installation</p>
              </div>
              <div className="p-4 flex items-center gap-3">
                <code className="text-sm text-gray-300 font-mono">
                  pip install polyflow-dev-ai
                </code>
                <button 
                  className="p-1.5 text-gray-400 hover:text-gray-300 transition-colors"
                  onClick={() => navigator.clipboard.writeText('pip install polyflow-dev-ai')}
                  title="Copy to clipboard"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up delay-300">
            <HeroButton 
              primary
              to="/user-guide"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </HeroButton>
            <HeroButton 
              href="https://github.com/tanzil7890/polyflow"
            >
              View on GitHub
            </HeroButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-400">
            <StatsCard
              icon={<BarChart2 className="h-6 w-6 text-blue-600" />}
              number="10x"
              label={
                <>
                  Faster Semantic Processing
                  <span className="block text-xs text-gray-500 mt-1">
                    (vs. traditional LLM+DataFrame pipelines)
                  </span>
                </>
              }
            />
            <StatsCard
              icon={<Terminal className="h-6 w-6 text-blue-600" />}
              number="50+"
              label={
                <>
                  Semantic Operators
                  <span className="block text-xs text-gray-500 mt-1">
                    (currently active only 10)
                  </span>
                </>
              }
            />
            <StatsCard
              icon={<Layers className="h-6 w-6 text-blue-600" />}
              number="3-in-1"
              label={
                <>
                  Integration
                  <span className="block text-xs text-gray-500 mt-1">
                    (LLMs, Vector DB, DataFrame APIs)
                  </span>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}