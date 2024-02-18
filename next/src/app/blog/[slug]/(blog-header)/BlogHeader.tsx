import React, { FunctionComponent } from 'react';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import { Post } from '@/components/blog-post-item/types';
import Categories from '@/components/categories/Categories';

interface Props {
  post: Post;
}

const BlogHeader: FunctionComponent<Props> = ({ post }) => {
  const categories = post.attributes.categories?.data;

  return (
    <header>
      <h1 className={`${gStyles.pageHeading} ${styles.heading}`}>{post.attributes.title}</h1>
      <Categories categories={categories} />
    </header>
  );
};

export default BlogHeader;