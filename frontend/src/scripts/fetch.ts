import qs from 'qs';
import type { PostsFetchResponse } from '@/components/blog-post-item/types';
import { CategoriesFetchResponse } from '@/components/categories/types';

interface Options {
  revalidate?: number;
  cache?: 'no-cache';
}

export const fetchWrapper = async <T>(url: string | URL, { revalidate, cache }: Options = {}): Promise<T | null> => {
  const hostname = typeof window === 'undefined'
    ? process.env.NEXT_PUBLIC_STRAPI_URL
    : process.env.NEXT_PUBLIC_STRAPI_URL_CLIENT ?? process.env.NEXT_PUBLIC_STRAPI_URL;

  try {
    const response = await fetch(`${hostname}${url}`, {
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
      },
      cache,
      next: {
        revalidate
      }
    });

    // Check if the fetch request failed due to network issues
    if (!response) {
      console.error('Network request failed. Please check your internet connection or the server status.');
      return null; // Return null if the fetch request fails
    }

    if (!response.ok) {
      const txt = await response.text();
      console.error(`An error occurred: ${txt}`);
      return null; // Return null if the response is not ok
    }

    return await response.json() as T;
  } catch (error) {
    console.error('Fetch error:', error);
    return null; // Return null if any other error occurs
  }
};

export const db = {
  getPosts: async (page: number) => {
    const queryParams = {
      sort: ['publishedAt:desc'],
      pagination: {
        pageSize: 10,
        page
      }
    };

    const queryString = qs.stringify(queryParams);
    return await fetchWrapper<PostsFetchResponse>(`/posts?${queryString}`, { revalidate: 900 });
  },
  getPostsByCategory: async (category: string, page: number) => {
    const queryParams = {
      sort: ['publishedAt:desc'],
      filters: {
        categories: {
          name: {
            $eq: category
          }
        }
      },
      pagination: {
        pageSize: 10,
        page
      }
    };

    const queryString = qs.stringify(queryParams);
    return await fetchWrapper<PostsFetchResponse>(`/posts?${queryString}`, { revalidate: 900 });
  },
  getPostBySlug: async (slug: string) => {
    const queryParams = {
      filters: {
        slug: slug
      },
      populate: ['categories']
    };

    const queryString = qs.stringify(queryParams);
    return await fetchWrapper<PostsFetchResponse>(`/posts?${queryString}`, { revalidate: 1800 });
  },
  getPostsBySearchTerm: async (searchValue: string) => {
    const queryParams = {
      filters: {
        title: {
          $containsi: searchValue
        }
      },
      pagination: {
        pageSize: 10,
        page: 1
      }
    };

    const queryString = qs.stringify(queryParams);
    return await fetchWrapper<PostsFetchResponse>(`/posts?${queryString}`, { cache: 'no-cache' });
  },
  getPostSlugs: async () => {
    const queryParams = {
      fields: ['slug']
    };

    const queryString = qs.stringify(queryParams);
    return await fetchWrapper<PostsFetchResponse>(`/posts?${queryString}`, { revalidate: 900 });
  },
  getFeaturedPosts: async () => {
    const queryParams = {
      filters: {
        isFeatured: {
          $eq: true
        }
      },
      sort: ['publishedAt:desc'],
      fields: ['slug', 'title', 'content', 'publishedAt']
    };

    const queryString = qs.stringify(queryParams);
    return await fetchWrapper<PostsFetchResponse>(`/posts?${queryString}`, { revalidate: 900 });
  },
  getCategories: async () => {
    return await fetchWrapper<CategoriesFetchResponse>('/categories', { revalidate: 3600 });
  }
};
