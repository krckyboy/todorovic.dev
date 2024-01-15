import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import 'highlight.js/styles/github-dark-dimmed.css';

interface Props {
  markdown: string;
}

const BlogContent: FunctionComponent<Props> = async ({ markdown }) => {
  return (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <ReactMarkdown rehypePlugins={[rehypeCodeTitles, rehypeHighlight]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default BlogContent;