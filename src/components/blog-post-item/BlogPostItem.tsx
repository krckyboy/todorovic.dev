import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

interface Props {
  id: string | number;
  featured?: boolean;
}

const BlogPostItem: FunctionComponent<Props> = ({ id, featured }) => {
  return (
    <Link href={`/blog/${id}`} className={`${styles.container} ${featured ? styles.featured : ''}`}>
      <h1 className={styles.heading}>How I created this website</h1>
      <time className={styles.date}>08.01.2024.</time>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur dolor
        dolorum ducimus inventore
        laborum.</p>
      <meta name="description" content="This is a description of the blog post." />
    </Link>
  );
};

export default BlogPostItem;