import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface FormulaProps {
  content: string;
  className?: string;
}

export const Formula: React.FC<FormulaProps> = ({ content, className = "" }) => {
  return (
    <div className={`markdown-body inline-block ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
