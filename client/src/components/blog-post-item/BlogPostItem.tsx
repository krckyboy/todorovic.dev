import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { convertToHumanReadableDate } from '@/components/blog-post-item/scripts';
import { Post } from '@/components/blog-post-item/types';
import readingTime from 'reading-time';

interface Props {
  post: Post;
  featured?: boolean;
}

const BlogPostItem: FunctionComponent<Props> = ({ post, featured }) => {
  const humanReadablePublishDate = convertToHumanReadableDate(post.attributes.publishedAt);
  const stats = readingTime(post.attributes.content);

  return (
    <Link href={`/blog/${post.attributes.slug}`} className={`${styles.container} ${featured ? styles.featured : ''}`}>
      <h1 className={styles.heading}>{post.attributes.title}</h1>
      <div className={styles.metadata}>
        <time className={styles.date}>{humanReadablePublishDate}</time>
        <p>{stats.text}</p>
      </div>
    </Link>
  );
};

export default BlogPostItem;