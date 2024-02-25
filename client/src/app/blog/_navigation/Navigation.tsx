import React, { FunctionComponent } from 'react';
import styles from '@/app/blog/styles.module.scss';
import Link from 'next/link';
import qs from 'qs';

interface Props {
  pageNumber: number;
  currentPageCount: number;
  category: string | undefined;
}

const Navigation: FunctionComponent<Props> = ({ currentPageCount, pageNumber, category }) => {
  const queryParamsPrevious = {
    category,
    page: pageNumber - 1
  };

  const queryParamsNext = {
    category,
    page: pageNumber + 1
  };

  const queryStringPrevious = qs.stringify(queryParamsPrevious);
  const queryStringNext = qs.stringify(queryParamsNext);

  return (
    <div className={styles.pagination}>
      {Boolean(pageNumber > 1) && (
        <Link href={`/blog?${queryStringPrevious}`}>
          Previous
        </Link>
      )}
      {currentPageCount !== pageNumber && (
        <Link href={`/blog?${queryStringNext}`}>
          Next
        </Link>
      )}
    </div>
  );
};

export default Navigation;