import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import qs from 'qs';

interface Props {
  pageNumber: number;
  currentPageCount: number;
  category: string | undefined;
}

const Navigation: FunctionComponent<Props> = ({ currentPageCount, pageNumber, category }) => {
  const rangeStart = 1;
  const rangeEnd = currentPageCount;

  // Function to generate query string for a specific page
  const generateQueryString = (page: number) => {
    const queryParams = {
      category,
      page
    };
    return qs.stringify(queryParams);
  };

  return (
    <div className={styles.container}>
      {pageNumber > 1 && (
        <Link href={`/blog?${generateQueryString(pageNumber - 1)}`}>
          Previous
        </Link>
      )}
      {Array.from({ length: rangeEnd - rangeStart + 1 }, (_, i) => rangeStart + i).map((page) => (
        <Link key={page}
              href={`/blog?${generateQueryString(page)}`}
              className={page === pageNumber ? styles.active : ''}>
          {page}
        </Link>
      ))}
      {currentPageCount > pageNumber && (
        <Link href={`/blog?${generateQueryString(pageNumber + 1)}`}>
          Next
        </Link>
      )}
    </div>
  );
};

export default Navigation;