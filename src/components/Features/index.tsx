
import { Zap, Clock, Cpu, Database, Code, Shield, Sparkles, Workflow, Brain } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: <Brain />,
    title: 'AI-Powered Analysis',
    description: 'Natural language queries and semantic analysis powered by state-of-the-art LLMs.',
  },
  {
    icon: <Sparkles />,
    title: 'Semantic Processing',
    description: 'Intelligent data understanding and contextual analysis of both structured and unstructured data.',
  },
  {
    icon: <Workflow />,
    title: 'Intuitive Workflows',
    description: 'Combine traditional DataFrame operations with natural language processing seamlessly.',
  },
  {
    icon: <Zap />,
    title: 'High Performance',
    description: 'BLightning-fast execution optimized for both traditional and AI-powered operations.',
  },
  {
    icon: <Clock />,
    title: 'Efficient Memory',
    description: 'Optimized memory layout and zero-copy operations where possible.',
  },
  {
    icon: <Cpu />,
    title: 'Multi-threaded',
    description: 'Parallel execution of queries for maximum performance.',
  },
  {
    icon: <Database />,
    title: 'Smart Data Operations',
    description: 'Automated data cleaning, transformation, and enrichment using AI capabilities.',
  },
  {
    icon: <Code />,
    title: 'Type Safe',
    description: 'Strong type system ensures data consistency and reliability.',
  },
  {
    icon: <Shield />,
    title: 'Production Ready',
    description: 'Battle-tested in production environments worldwide.',
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          AI-Powered Data Processing{/*  Built for Performance */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your data analysis with intelligent features that combine the power of LLMs with traditional DataFrame operations.{/* Experience the next generation of data processing with features designed for speed and efficiency. */}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}