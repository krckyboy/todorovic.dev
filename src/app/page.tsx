import React from 'react';
import { NextPage } from 'next';
import ImageAndText from '@/components/image-and-text/ImageAndText';
import styles from './styles.module.scss';
import gStyles from '@/styles/global.module.scss';
import BlogPostItem from '@/components/blog-post-item/BlogPostItem';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <main>
      <section className={`${styles.section} ${gStyles.paddingInline}`}>
        <ImageAndText />
      </section>
      <section className={`${styles.section} ${gStyles.paddingInline}`}>
        <h2 className={styles.featuredPostsHeading}>Featured posts</h2>
        <div className={styles.featuredPosts}>
          {[0, 1, 2].map((item) => <BlogPostItem key={item} />)}
          <Link href={'/blog'} className={styles.checkAllPosts}>Check all</Link>
        </div>
      </section>
    </main>
  );
};

export default Page;