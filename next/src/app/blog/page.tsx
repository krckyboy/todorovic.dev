import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import BlogPostItem from '@/components/blog-post-item/BlogPostItem';
import React from 'react';
import { db } from '@/scripts/fetch';
import Categories from '@/components/categories/Categories';

interface Props {
  searchParams: {
    category?: string;
  };
}

const Page: NextPage<Props> = async ({ searchParams: { category } }) => {
  const posts = category ? await db.getPostsByCategory(category) : await db.getPosts();
  const categories = await db.getCategories();

  return (
    <main>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>Blog</h1>
        <Categories categories={categories.data} activeCategory={category} />
        <div className={`${gStyles.blogs} ${styles.blogs}`}>
          {posts.data.map((post) => <BlogPostItem post={post} key={post.id} />)}
        </div>
      </section>
    </main>
  );
};

export default Page;