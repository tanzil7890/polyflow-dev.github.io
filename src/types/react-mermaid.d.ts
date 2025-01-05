declare module 'react-mermaid' {
  interface MermaidProps {
    chart: string;
    config?: {
      theme?: string;
      themeVariables?: {
        primaryColor?: string;
        primaryTextColor?: string;
        primaryBorderColor?: string;
        lineColor?: string;
        secondaryColor?: string;
        tertiaryColor?: string;
      };
    };
  }

  const Mermaid: React.FC<MermaidProps>;
  export default Mermaid;
} 