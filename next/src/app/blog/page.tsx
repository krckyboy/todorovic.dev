import { NextPage } from 'next';
import gStyles from '../../styles/global.module.scss';
import BlogPostItem from '../../components/blog-post-item/BlogPostItem';
import React from 'react';
import { db } from '@/scripts/fetch';

const Page: NextPage = async () => {
  const posts = await db.getPosts();

  return (
    <main>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>Blog</h1>
        <div className={gStyles.blogs}>
          {posts.data.map((post) => <BlogPostItem post={post} key={post.id} />)}
        </div>
      </section>
    </main>
  );
};

export default Page;