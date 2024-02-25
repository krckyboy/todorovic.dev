'use client';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import type { PostsFetchResponse } from '@/components/blog-post-item/types';
import { db } from '@/scripts/fetch';
import Link from 'next/link';
import { useDebounce } from '@/app/blog/(search-bar)/useDebounce';

const SearchBar: FunctionComponent = () => {
  const [isActive, setFormActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<PostsFetchResponse['data'] | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const fetchPosts = async () => {
    const posts = await db.getPostsBySearchTerm(debouncedSearchQuery);
    setSearchResults(posts.data);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const { currentTarget, relatedTarget } = event;

    if (currentTarget.contains(relatedTarget)) {
      return;
    }

    setFormActive(false);
  };

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      searchInputRef.current?.blur();
      setSearchQuery('');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  useEffect(() => {
    if (!debouncedSearchQuery || debouncedSearchQuery.length < 2) {
      setSearchResults([]);
      return;
    }

    fetchPosts();
  }, [debouncedSearchQuery]);

  return (
    <section className={styles.container} onBlur={handleBlur}>
      <label className={styles.label}>
        <Image src={'/images/search/icon.svg'}
               priority
               alt={'Search bar'}
               width={16}
               height={16}
               className={styles.image}
        />
        <input className={styles.input}
               type="text"
               placeholder={'Search blog posts'}
               onClick={() => setFormActive(true)}
               ref={searchInputRef}
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
      {Boolean(searchResults?.length && isActive) && (
        <ul className={styles.results}>
          {searchResults?.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.attributes.slug}`}>{post.attributes.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SearchBar;