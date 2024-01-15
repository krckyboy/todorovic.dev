import React from 'react';
import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import { db } from '@/scripts/fetch';
import './styles.scss';
import BlogContent from '@/app/blog/[slug]/BlogContent';

interface Props {
  params: {
    slug: string;
  };
}

const Page: NextPage<Props> = async (props) => {
  const { slug } = props.params;
  const { data: [post] } = await db.getPostBySlug(slug);
  const categories = post?.attributes?.categories?.data;

  return (
    <main>
      <article className={`${gStyles.section} ${gStyles.paddingInline} ${gStyles.text} blog-post`}>
        <h1 className={gStyles.pageHeadingMini}>{post.attributes.title}</h1>
        {categories && (
          <ul>
            {categories.map((category) => (
              <li key={category.id}>{category.attributes.name}</li>
            ))}
          </ul>
        )}
        <BlogContent markdown={post.attributes.content} />
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

export default Page;