import React, { FunctionComponent } from 'react';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import { Post } from '@/components/blog-post-item/types';
import Categories from '@/components/categories/Categories';
import { convertToHumanReadableDate } from '@/components/blog-post-item/scripts';
import Link from 'next/link';

interface Props {
  post: Post;
}

const BlogHeader: FunctionComponent<Props> = ({ post }) => {
  const categories = post.attributes.categories?.data;
  const humanReadablePublishDate = convertToHumanReadableDate(post.attributes.publishedAt);

  return (
    <header>
      <div className={styles.breadCrumbs}>
        <Link href={'/blog'}>Blogs</Link> <span className={styles.separator}>/</span> <Link
        href={`/blog/${post.attributes.slug}`}>{post.attributes.title}</Link>
      </div>
      <h1 className={`${gStyles.pageHeading} ${styles.heading}`}>{post.attributes.title}</h1>
      <time className={styles.date}>{humanReadablePublishDate}</time>
      <Categories categories={categories} />
    </header>
  );
};

export default BlogHeader;