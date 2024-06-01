import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import BlogPostItem from '@/components/blog-post-item/BlogPostItem';
import { db } from '@/scripts/fetch';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';

const FeaturedPosts: FunctionComponent = async () => {
  const posts = await db.getFeaturedPosts();

  if (!posts || !posts.data.length) {
    return null;
  }

  return (
    <section className={`${gStyles.section}`}>
      <h2 className={`${styles.featuredPostsHeading}`}>Featured posts</h2>
      <div className={`${gStyles.blogs} ${styles.blogs}`}>
        {posts.data.map((post) => <BlogPostItem post={post} key={post.id} featured />)}
        <Link href={'/blog'} className={gStyles.button}>Check all</Link>
      </div>
    </section>
  );
};

export default FeaturedPosts;