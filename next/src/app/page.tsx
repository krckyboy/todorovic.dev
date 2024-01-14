import React from 'react';
import { NextPage } from 'next';
import ImageAndText from '../components/image-and-text/ImageAndText';
import styles from './styles.module.scss';
import gStyles from '../styles/global.module.scss';
import BlogPostItem from '@/components/blog-post-item/BlogPostItem';
import Link from 'next/link';
import { db } from '@/scripts/fetch';

const Page: NextPage = async () => {
  const posts = await db.getFeaturedPosts();

  return (
    <main>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <ImageAndText />
      </section>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h2 className={`${styles.featuredPostsHeading} ${gStyles.pageHeadingMini}`}>Featured posts</h2>
        <div className={gStyles.blogs}>
          {posts.data.map((post) => <BlogPostItem post={post} key={post.id} featured />)}
          <Link href={'/blog'} className={styles.checkAllPosts}>Check all</Link>
        </div>
      </section>
    </main>
  );
};

export default Page;