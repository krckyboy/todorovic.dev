import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  markdown: string;
}

const BlogContent: FunctionComponent<Props> = async ({ markdown }) => {
  return (
    <ReactMarkdown>{markdown}</ReactMarkdown>
  );
};

export default BlogContent;