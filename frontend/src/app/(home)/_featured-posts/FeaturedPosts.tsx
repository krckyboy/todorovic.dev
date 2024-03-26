import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import BlogPostItem from '@/components/blog-post-item/BlogPostItem';
import { db } from '@/scripts/fetch';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';

const FeaturedPosts: FunctionComponent = async () => {
  const posts = await db.getFeaturedPosts();

  if (!posts.data.length) {
    return null;
  }

  return (
    <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
      <h2 className={`${styles.featuredPostsHeading}`}>Featured posts</h2>
      <p className={gStyles.text}>Ever feel like writing about something intriguing or useful? That's me! I'm all about
        exploring topics that spark my curiosity or could help fellow developers. Always open to sharing my insights
        and experiences.</p>
      <div className={`${gStyles.blogs} ${styles.blogs}`}>
        {posts.data.map((post) => <BlogPostItem post={post} key={post.id} featured />)}
        <Link href={'/blog'} className={styles.checkAllPosts}>Check all</Link>
      </div>
    </section>
  );
};

export default FeaturedPosts;