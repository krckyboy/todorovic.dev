import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import MarkdownImage from './_markdown-image/MarkdownImage';
import gStyles from '@/styles/global.module.scss';
import sharedStyles from '@/styles/about-and-blog-content.module.scss';
import 'highlight.js/styles/github-dark-dimmed.css';
import './styles.scss';

interface Props {
  markdown: string;
}

const BlogContent: FunctionComponent<Props> = async ({ markdown }) => {
  return (
    <section className={`blog-content ${gStyles.text} ${sharedStyles.shared}`}>
      <ReactMarkdown
        rehypePlugins={[rehypeCodeTitles, rehypeHighlight]}
        components={{
          img: ({ node, ...props }) => <MarkdownImage src={props.src} alt={props.alt} />,
          a: ({ node, ...props }) => <a href={props.href} target="_blank" rel="noopener">{props.children}</a>
        }}
      >
        {markdown}
      </ReactMarkdown>
    </section>
  );
};

export default BlogContent;