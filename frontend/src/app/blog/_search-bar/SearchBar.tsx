'use client';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDebounce } from '@/app/blog/_search-bar/useDebounce';
import type { PostsFetchResponse } from '@/components/blog-post-item/types';
import { db } from '@/scripts/fetch';
import styles from './styles.module.scss';

const SearchBar: FunctionComponent = () => {
  const router = useRouter();

  const [isActive, setFormActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<PostsFetchResponse['data'] | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [hasSearched, setHasSearched] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const fetchPosts = async () => {
    const posts = await db.getPostsBySearchTerm(debouncedSearchQuery);
    setHasSearched(true);

    if (!posts?.data) {
      return;
    }

    setSearchResults(posts.data);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const { currentTarget, relatedTarget } = e;

    if (currentTarget.contains(relatedTarget)) {
      return;
    }

    setFormActive(false);
    setHasSearched(false);
  };

  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      searchInputRef.current?.blur();
      setSearchQuery('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setFormActive(true);
    setHasSearched(false);
  };

  const handleCrossClick = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();

      if (!searchResults) {
        return;
      }

      setFocusedIndex((prevIndex) => Math.min(prevIndex + 1, searchResults?.length - 1 ?? 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();

      setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter' && focusedIndex !== -1) {
      const postToGoTo = searchResults?.find((post, index) => focusedIndex === index);

      if (!postToGoTo) {
        return;
      }

      router.push(`/blog/${postToGoTo.attributes.slug}`);
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

  const showResultsNoGames = hasSearched && isActive && !searchResults?.length;
  const showResultsWithGames = Boolean(searchResults?.length && isActive);

  return (
    <section className={styles.container} onBlur={handleBlur} onKeyDown={handleKeyDown}>
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
               onFocus={() => setFormActive(true)}
               ref={searchInputRef}
               value={searchQuery}
               onChange={handleChange}
        />
        <Image src={'/images/category/x.svg'}
               alt={'Reset search'}
               priority
               width={12}
               height={12}
               onClick={handleCrossClick}
               className={`${styles.cross} ${searchQuery.length > 1 ? styles.active : ''}`}
        />
      </label>
      {showResultsNoGames && (
        <div className={styles.results}>
          <p className={styles.noResults}>No posts found!</p>
        </div>
      )}
      {showResultsWithGames && (
        <ul className={styles.results}>
          {searchResults?.map((post, index) => (
            <li key={post.id} className={index === focusedIndex ? styles.focused : ''}>
              <Link href={`/blog/${post.attributes.slug}`}>{post.attributes.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SearchBar;