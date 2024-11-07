import Link from 'next/link';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { Category } from '@/components/categories/types';

interface Props {
  name: string;
  activeCategory?: Category['attributes']['name'];
}

const CategoryLink: FunctionComponent<Props> = ({ activeCategory, name }) => {
  const isActiveCategory = name === activeCategory;

  const setActiveClassName = isActiveCategory ? styles.active : '';
  const setHref = isActiveCategory ? '/blog' : `/blog?category=${name}`;

  return (
    <Link className={`${styles.link} ${setActiveClassName}`} href={setHref}>
      <span className={styles.text}>#{name}</span>
      {isActiveCategory && (
        <Image src={'/images/category/x.svg'}
               priority
               alt={'Unselect tag'}
               width={12}
               height={12}
               className={styles.cross}
        />
      )}
    </Link>
  );
};

export default CategoryLink;