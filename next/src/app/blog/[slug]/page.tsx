import React from 'react';
import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import { PostsFetchResponse } from '@/components/blog-post-item/types';
import { fetchWrapper } from '@/scripts/fetch';
import ReactMarkdown from 'react-markdown';
import './styles.scss';

interface Props {
  params: {
    slug: string;
  };
}

const Page: NextPage<Props> = async (props) => {
  const { slug } = props.params;
  const { data: [post] } = await fetchWrapper<PostsFetchResponse>(`/posts/?filters[slug]=${slug}`);

  return (
    <article className={`${gStyles.section} ${gStyles.paddingInline} blog-post`}>
      <h1 className={gStyles.pageHeadingMini}>{post.attributes.title}</h1>
      <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
    </article>
  );
};

export async function generateStaticParams() {
  const posts = await fetchWrapper<PostsFetchResponse>('/posts');
  const slugs = posts.data.map((post) => post.attributes.slug);

  return slugs.map((slug) => ({
    slug
  }));
}

export default Page;