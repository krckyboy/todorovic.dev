import React, { FunctionComponent } from 'react';
import gStyles from '@/styles/global.module.scss';
import styles from './styles.module.scss';
import SearchBar from '@/app/blog/_search-bar/SearchBar';
import Link from 'next/link';

const BlogNotFound: FunctionComponent = () => {
  return (
    <section className={`${gStyles.section} ${gStyles.paddingInline}`}>
      <span className={styles.status}>404</span>
      <h1 className={`${gStyles.pageHeading} ${styles.heading}`}>Oops!</h1>
      <p className={styles.text}>Couldn't find that blog for you, sorry! </p>
      <SearchBar />
      <Link className={gStyles.button} href={'/blog'}>All posts</Link>
    </section>
  );
};

export default BlogNotFound;