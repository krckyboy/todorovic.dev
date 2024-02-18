import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { Category } from '@/components/categories/types';
import Link from 'next/link';
import CategoryLink from '@/components/categories/CategoryLink';

interface Props {
  categories: Category[] | undefined;
  activeCategory?: Category['attributes']['name'];
}

const Categories: FunctionComponent<Props> = ({ categories, activeCategory }) => {
  if (!categories || !categories.length) {
    return null;
  }

  return (
    <ul className={`${styles.categories}`}>
      {categories.map((category) => (
        <li key={category.id}>
          <CategoryLink activeCategory={activeCategory} name={category.attributes.name} />
        </li>
      ))}
    </ul>
  );
};

export default Categories;