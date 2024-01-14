import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { convertToHumanReadableDate } from '@/components/blog-post-item/scripts';
import { Post } from '@/components/blog-post-item/types';

interface Props {
  post: Post;
  featured?: boolean;
}

const BlogPostItem: FunctionComponent<Props> = ({ post, featured }) => {
  const humanReadableDate = convertToHumanReadableDate(post.attributes.publishedAt);
  const categories = post?.attributes?.categories?.data;

  return (
    <Link href={`/blog/${post.attributes.slug}`} className={`${styles.container} ${featured ? styles.featured : ''}`}>
      <h1 className={styles.heading}>{post.attributes.title}</h1>
      <time className={styles.date}>{humanReadableDate}</time>
      <p className={styles.text}>{post.attributes.summary}</p>
      <meta name="description" content={post.attributes.summary} />
      {categories && (
        <ul>
          {categories.map((category) => (
            <li key={category.id}>#{category.attributes.name}</li>
          ))}
        </ul>
      )}
    </Link>
  );
};

export default BlogPostItem;