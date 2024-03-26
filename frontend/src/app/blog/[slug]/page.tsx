import React from 'react';
import { NextPage } from 'next';
import { Metadata } from 'next';
import { db } from '@/scripts/fetch';
import gStyles from '@/styles/global.module.scss';
import './_blog-content/styles.scss';
import BlogContent from './_blog-content/BlogContent';
import BlogHeader from './_blog-header/BlogHeader';
import AuthorCard from '@/components/author-card/AuthorCard';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

const Page: NextPage<Props> = async (props) => {
  const { slug } = props.params;
  const { data: [post] } = await db.getPostBySlug(slug);

  if (!post) {
    // @todo Redirect to 404 page
    redirect('/');
  }

  return (
    <main>
      <article className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <BlogHeader post={post} />
        <BlogContent markdown={post.attributes.content} />
        <AuthorCard />
      </article>
    </main>
  );
};

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

  if (!post) {
    return {};
  }

  return {
    title: post.attributes.title,
    description: post.attributes.summary
  };
}

export default Page;