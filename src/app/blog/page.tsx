import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import BlogPostItem from '@/components/blog-post-item/BlogPostItem';
import React from 'react';

const Page: NextPage = () => {
  return (
    <main>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>Blog</h1>
        <div className={gStyles.blogs}>
          {[0, 1, 2, 3, 4, 5].map((item) => <BlogPostItem id={item} key={item} />)}
        </div>
      </section>
    </main>
  );
};

export default Page;