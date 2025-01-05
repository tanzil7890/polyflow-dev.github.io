

interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language = 'text' }: CodeBlockProps) {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 px-4 py-2 text-xs text-gray-500">
        {language}
      </div>
      <pre className="bg-gray-900 rounded-lg p-4 text-gray-300 text-sm overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
}