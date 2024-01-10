import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';

const BlogPostItem: FunctionComponent = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.heading}>How I created this website</h1>
      <time className={styles.date}>08.01.2024.</time>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur dolor
        dolorum ducimus inventore
        laborum.</p>
      <meta name="description" content="This is a description of the blog post." />
    </article>
  );
};

export default BlogPostItem;