import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import styles from '@/components/categories/styles.module.scss';
import { Category } from '@/components/categories/types';

interface Props {
  name: string;
  activeCategory?: Category['attributes']['name'];
}

const CategoryLink: FunctionComponent<Props> = ({ activeCategory, name }) => {
  const isActiveCategory = name === activeCategory;

  const setActiveCategory = isActiveCategory ? styles.active : '';
  const setHref = isActiveCategory ? '/blog' : `/blog?category=${name}`;

  return (
    <Link className={setActiveCategory} href={setHref}>#{name}</Link>
  );
};

export default CategoryLink;