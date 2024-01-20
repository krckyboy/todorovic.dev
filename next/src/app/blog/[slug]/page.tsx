import React from 'react';
import { NextPage } from 'next';
import { Metadata } from 'next';
import BlogContent from '@/app/blog/[slug]/blog-content/BlogContent';
import { db } from '@/scripts/fetch';
import gStyles from '@/styles/global.module.scss';
import './blog-content/styles.scss';
import BlogHeader from '@/app/blog/[slug]/blog-header/BlogHeader';
import BlogFooter from '@/app/blog/[slug]/blog-footer/BlogFooter';

interface Props {
  params: {
    slug: string;
  };
}

const Page: NextPage<Props> = async (props) => {
  const { slug } = props.params;
  const { data: [post] } = await db.getPostBySlug(slug);

  return (
    <main>
      <article className={`${gStyles.section} ${gStyles.paddingInline} ${gStyles.text}`}>
        <BlogHeader post={post} />
        <BlogContent markdown={post.attributes.content} />
        <BlogFooter />
      </article>
    </main>
  );
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await db.getPostSlugs();
  const slugs = posts.data.map((post) => post.attributes.slug);

  return slugs.map((slug) => ({
    slug
  }));
}

export async function generateMetadata(
  { params: { slug } }: Props
): Promise<Metadata> {
  const { data: [post] } = await db.getPostBySlug(slug);

  return {
    title: post.attributes.title,
    description: post.attributes.summary
  };
}

export default Page;