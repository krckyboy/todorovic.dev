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
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <ImageAndText />
      </section>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h2 className={`${styles.featuredPostsHeading} ${gStyles.pageHeadingMini}`}>Featured posts</h2>
        <div className={gStyles.blogs}>
          {[0, 1, 2].map((item) => <BlogPostItem id={item} key={item} featured />)}
          <Link href={'/blog'} className={styles.checkAllPosts}>Check all</Link>
        </div>
      </section>
    </main>
  );
};

export default Page;