import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import BlogPostItem from '@/components/blog-post-item/BlogPostItem';
import React from 'react';
import { db } from '@/scripts/fetch';

const Page: NextPage = async () => {
  const posts = await db.getPosts();
  const categories = await db.getCategories();

  return (
    <main>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>Blog</h1>
        <ul className={styles.categories}>
          {categories.data.map((category) => (
            <li key={category.id}>#{category.attributes.name}</li>
          ))}
        </ul>
        <div className={`${gStyles.blogs} ${styles.blogs}`}>
          {posts.data.map((post) => <BlogPostItem post={post} key={post.id} />)}
        </div>
      </section>
    </main>
  );
};

export default Page;