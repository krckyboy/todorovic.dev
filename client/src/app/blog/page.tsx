import { NextPage } from 'next';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import BlogPostItem from '@/components/blog-post-item/BlogPostItem';
import React from 'react';
import { db } from '@/scripts/fetch';
import Categories from '@/components/categories/Categories';
import SearchBar from '@/app/blog/(search-bar)/SearchBar';
import Navigation from '@/app/blog/_navigation/Navigation';

interface Props {
  searchParams: {
    category?: string;
    page?: string;
  };
}

const Page: NextPage<Props> = async ({ searchParams: { category, page } }) => {
  const pageNumber = parseInt(page ?? '1');

  const posts = category ? await db.getPostsByCategory(category, pageNumber) : await db.getPosts(pageNumber);
  const categories = await db.getCategories();

  return (
    <main>
      <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
        <h1 className={gStyles.pageHeading}>Blog</h1>
        <SearchBar />
        <Categories categories={categories.data} activeCategory={category} />
        <div className={`${gStyles.blogs} ${styles.blogs}`}>
          {posts.data.map((post) => <BlogPostItem post={post} key={post.id} />)}
        </div>
        {Boolean(posts.meta.pagination.pageCount > 1) && (
          <Navigation pageNumber={pageNumber} currentPageCount={posts.meta.pagination.pageCount} category={category} />
        )}
      </section>
    </main>
  );
};

export default Page;