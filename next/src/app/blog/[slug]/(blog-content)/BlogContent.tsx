import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import 'highlight.js/styles/github-dark-dimmed.css';
import './styles.scss';

interface Props {
  markdown: string;
}

const BlogContent: FunctionComponent<Props> = async ({ markdown }) => {
  return (
    <section className={'blog-content'}>
      <ReactMarkdown rehypePlugins={[rehypeCodeTitles, rehypeHighlight]}>{markdown}</ReactMarkdown>
    </section>
  );
};

export default BlogContent;