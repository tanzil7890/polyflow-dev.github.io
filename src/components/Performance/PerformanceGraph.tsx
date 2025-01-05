import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export function PerformanceGraph() {
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      themeVariables: {
        primaryColor: '#3B82F6',
        primaryTextColor: '#1F2937',
        primaryBorderColor: '#60A5FA',
        lineColor: '#93C5FD',
        secondaryColor: '#EFF6FF',
        tertiaryColor: '#DBEAFE'
      }
    });

    if (graphRef.current) {
      const graphDefinition = `
        graph LR
          A[Raw Data] --> B[Vector Index]
          B --> C[Semantic Cache]
          C --> D[Query Engine]
          D --> E[Results]
          style A fill:#f9f,stroke:#333,stroke-width:2px
          style E fill:#bbf,stroke:#333,stroke-width:2px
      `;

      mermaid.render('performance-graph', graphDefinition).then((result) => {
        if (graphRef.current) {
          graphRef.current.innerHTML = result.svg;
        }
      });
    }
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div ref={graphRef} className="w-full" />
    </div>
  );
} 