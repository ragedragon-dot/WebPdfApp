import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-full min-w-0 break-words [overflow-wrap:anywhere]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }: any) => (
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mt-6 mb-4 leading-tight border-b border-slate-100 dark:border-slate-800 pb-2 break-words" {...props} />
          ),
          h2: ({ node, ...props }: any) => (
            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-5 mb-3 leading-tight break-words" {...props} />
          ),
          h3: ({ node, ...props }: any) => (
            <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mt-4 mb-2 break-words" {...props} />
          ),
          p: ({ node, ...props }: any) => (
            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4 whitespace-pre-wrap break-words [overflow-wrap:anywhere]" {...props} />
          ),
          ul: ({ node, ...props }: any) => (
            <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 dark:text-slate-300 text-sm md:text-base" {...props} />
          ),
          ol: ({ node, ...props }: any) => (
            <ol className="list-decimal pl-6 space-y-2 mb-4 text-slate-700 dark:text-slate-300 text-sm md:text-base" {...props} />
          ),
          li: ({ node, ...props }: any) => (
            <li className="leading-relaxed break-words [overflow-wrap:anywhere]" {...props} />
          ),
          table: ({ node, ...props }: any) => (
            <div className="overflow-x-auto w-full my-6 border border-slate-200 dark:border-slate-800 rounded-xl max-w-full">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800" {...props} />
            </div>
          ),
          thead: ({ node, ...props }: any) => (
            <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300" {...props} />
          ),
          tbody: ({ node, ...props }: any) => (
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-950" {...props} />
          ),
          tr: ({ node, ...props }: any) => (
            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors" {...props} />
          ),
          th: ({ node, ...props }: any) => (
            <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider" {...props} />
          ),
          td: ({ node, ...props }: any) => (
            <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300 font-normal break-words" {...props} />
          ),
          pre: ({ node, ...props }: any) => (
            <div className="overflow-x-auto w-full my-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 custom-scrollbar max-w-full relative min-w-0">
               <pre className="p-4 overflow-x-auto whitespace-pre text-sm min-w-0 max-w-full" {...props} />
            </div>
          ),
          code: ({ node, inline, ...props }: any) => {
            if (inline) {
               return <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-xs text-indigo-600 dark:text-indigo-400 break-words" {...props} />
            }
            return <code className="font-mono text-sm text-slate-800 dark:text-slate-200" {...props} />
          },
          blockquote: ({ node, ...props }: any) => (
            <blockquote className="border-l-4 border-indigo-500 pl-4 py-1 my-4 italic text-slate-600 dark:text-slate-400 bg-indigo-50/30 dark:bg-indigo-950/10 rounded-r break-words [overflow-wrap:anywhere]" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
