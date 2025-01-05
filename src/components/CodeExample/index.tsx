import React from 'react';
import { CodeBlock } from './CodeBlock';
import { TabButton } from './TabButton';

const examples = {
  python: {
    code: `import polyflow as pf

# Create a DataFrame with text data
df = pf.DataFrame({
    "documents": [
        "AI improves efficiency but raises ethical concerns",
        "Renewable energy helps mitigate climate change",
        "Quantum computing shows promise in complex problems",
        "Machine learning models require significant computing power",
        "Solar panels becoming more cost effective"
    ]
})

# Analyze AI-related content
result = df.llm_transform(
    column="documents",
    prompt="Is this about artificial intelligence or machine learning?",
    threshold=0.80,
    return_scores=True,
    return_reasoning=True,
    suffix="_ai_related"
)

print("AI Content Analysis:")
print(result)`,
    output: `AI Content Analysis:
                                              documents  documents_ai_related  documents_score  documents_reasoning
0  AI improves efficiency but raises ethical concerns              True            0.95       "This text directly discusses AI and its implications for efficiency and ethics."
1  Renewable energy helps mitigate climate change                  False           0.05       "This text is about renewable energy and climate change, not AI/ML."
2  Quantum computing shows promise in complex problems             False           0.15       "While related to computing, this focuses on quantum computing rather than AI/ML."
3  Machine learning models require significant...                  True            0.98       "Explicitly mentions machine learning and discusses computational requirements."
4  Solar panels becoming more cost effective                      False           0.02       "This text discusses solar energy technology, not AI or machine learning."`
  },

  nodejs: {
    code: `import pf from 'polyflow';

// Create a DataFrame with text data
const df = pf.DataFrame({
    documents: [
        "AI improves efficiency but raises ethical concerns",
        "Renewable energy helps mitigate climate change",
        "Quantum computing shows promise in complex problems",
        "Machine learning models require significant computing power",
        "Solar panels becoming more cost effective"
    ]
});

// Analyze AI-related content
const result = await df.llmTransform({
    column: "documents",
    prompt: "Is this about artificial intelligence or machine learning?",
    threshold: 0.80,
    returnScores: true,
    returnReasoning: true,
    suffix: "ai_related"
});

console.log("AI Content Analysis:");
console.table(result);`,
    output: `AI Content Analysis:
┌─────────┬──────────────────────────────────────────┬───────────────────┬────────────────┬────────────────────────────────────────────────────┐
│ (index) │                documents                 │ documents_ai_related │ documents_score │              documents_reasoning                   │
├─────────┼──────────────────────────────────────────┼───────────────────┼────────────────┼────────────────────────────────────────────────────┤
│    0    │ "AI improves efficiency but raises..."   │       true        │      0.95      │ "This text directly discusses AI..."               │
│    1    │ "Renewable energy helps mitigate..."     │       false       │      0.05      │ "This text is about renewable energy..."           │
│    2    │ "Quantum computing shows promise..."     │       false       │      0.15      │ "While related to computing..."                    │
│    3    │ "Machine learning models require..."     │       true        │      0.98      │ "Explicitly mentions machine learning..."          │
│    4    │ "Solar panels becoming more..."         │       false       │      0.02      │ "This text discusses solar energy..."             │
└─────────┴──────────────────────────────────────────┴───────────────────┴────────────────┴────────────────────────────────────────────────────┘`
  }
};

export default function CodeExample() {
  const [activeTab, setActiveTab] = React.useState<'python' | 'nodejs'>('python');

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Semantic Analysis Made Simple
          </h2>
          <p className="text-xl text-gray-600">
            Transform your data with natural language understanding
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex gap-2 p-4 border-b border-gray-800">
              <TabButton 
                active={activeTab === 'python'} 
                onClick={() => setActiveTab('python')}
              >
                Python
              </TabButton>
              <TabButton 
                active={activeTab === 'nodejs'} 
                onClick={() => setActiveTab('nodejs')}
              >
                Node.js
              </TabButton>
            </div>
            <CodeBlock code={examples[activeTab].code} />
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
              <p className="text-sm text-gray-600">Output</p>
            </div>
            <div className="p-4">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                {examples[activeTab].output}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}