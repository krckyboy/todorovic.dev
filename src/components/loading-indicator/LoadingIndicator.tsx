'use client';
import { FunctionComponent, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './styles.scss';

const LoadingIndicator: FunctionComponent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const prevPathnameRef = useRef(pathname);
  const prevSearchParamsRef = useRef(searchParams);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname || prevSearchParamsRef.current !== searchParams) {
      NProgress.start();
    }

    // Delay the call to NProgress.done() until after the route change has completed
    const timerId = setTimeout(() => {
      NProgress.done();
    }, 0);

    // Update the previous pathname and search params
    prevPathnameRef.current = pathname;
    prevSearchParamsRef.current = searchParams;

    // Clear the timeout when the component unmounts or when the pathname or searchParams change again
    return () => {
      clearTimeout(timerId);
    };
  }, [pathname, searchParams]);

  return null;
};

export default LoadingIndicator;
