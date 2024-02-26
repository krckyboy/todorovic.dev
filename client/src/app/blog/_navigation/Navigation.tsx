import React, { FunctionComponent, useMemo } from 'react';
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
  const maxPagesToShow = 3;

  const generateQueryString = (page: number) => {
    const queryParams = {
      category,
      page
    };
    return qs.stringify(queryParams);
  };

  const generatePageLinks = () => {
    const links = [];
    let start = Math.max(rangeStart, pageNumber - Math.floor(maxPagesToShow / 2));
    let end = Math.min(rangeEnd, start + maxPagesToShow - 1);

    if (end - start < maxPagesToShow - 1) {
      start = Math.max(rangeStart, end - maxPagesToShow + 1);
    }

    if (start > rangeStart) {
      links.push(
        <Link key="start" href={`/blog?${generateQueryString(rangeStart)}`}>
          {rangeStart}
        </Link>
      );

      if (start > rangeStart + 1) {
        links.push(<span key="ellipsis-start">...</span>);
      }
    }

    for (let i = start; i <= end; i++) {
      links.push(
        <Link key={i} href={`/blog?${generateQueryString(i)}`} className={i === pageNumber ? styles.active : ''}>
          {i}
        </Link>
      );
    }

    if (end < rangeEnd) {
      if (end < rangeEnd - 1) {
        links.push(<span key="ellipsis-end">...</span>);
      }

      links.push(
        <Link key="end" href={`/blog?${generateQueryString(rangeEnd)}`}>
          {rangeEnd}
        </Link>
      );
    }

    return links;
  };

  const memoizedGeneratePageLinks = useMemo(() => generatePageLinks(), [rangeStart, pageNumber, rangeEnd, maxPagesToShow]);

  return (
    <div className={styles.container}>
      {pageNumber > 1 && (
        <Link href={`/blog?${generateQueryString(pageNumber - 1)}`}>
          Previous
        </Link>
      )}
      {memoizedGeneratePageLinks}
      {currentPageCount > pageNumber && (
        <Link href={`/blog?${generateQueryString(pageNumber + 1)}`}>
          Next
        </Link>
      )}
    </div>
  );
};

export default Navigation;