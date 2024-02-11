import React, { FunctionComponent } from 'react';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import { Post } from '@/components/blog-post-item/types';

interface Props {
  post: Post;
}

const BlogHeader: FunctionComponent<Props> = ({ post }) => {
  const categories = post.attributes.categories?.data;

  return (
    <header>
      <h1 className={`${gStyles.pageHeading} ${styles.heading}`}>{post.attributes.title}</h1>
      {categories && (
        <ul className={`${gStyles.categories} ${styles.categories}`}>
          {categories.map((category) => (
            <li key={category.id}>#{category.attributes.name}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default BlogHeader;