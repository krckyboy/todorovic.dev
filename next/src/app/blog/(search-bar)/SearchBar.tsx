'use client';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import type { PostsFetchResponse } from '@/components/blog-post-item/types';
import { db } from '@/scripts/fetch';
import Link from 'next/link';
import { useDebounce } from '@/app/blog/(search-bar)/useDebounce';
import { useRouter } from 'next/navigation';

const SearchBar: FunctionComponent = () => {
  const router = useRouter();

  const [isActive, setFormActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<PostsFetchResponse['data'] | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const fetchPosts = async () => {
    const posts = await db.getPostsBySearchTerm(debouncedSearchQuery);
    setSearchResults(posts.data);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const { currentTarget, relatedTarget } = e;

    if (currentTarget.contains(relatedTarget)) {
      return;
    }

    setFormActive(false);
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
      </label>
      {Boolean(searchResults?.length && isActive) && (
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