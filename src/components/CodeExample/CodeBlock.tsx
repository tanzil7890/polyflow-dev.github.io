import React from 'react';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="p-6 text-gray-300 text-sm overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}