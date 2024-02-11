import type { CategoriesFetchResponse, PostsFetchResponse } from '@/components/blog-post-item/types';
import qs from 'qs';

export const fetchWrapper = async <T>(url: string | URL) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`, {
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
      }
    });

    if (!response.ok) {
      const txt = await response.text();
      throw new Error(txt);
    }

    return await response.json() as T;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const db = {
  getPosts: async () => {
    const queryParams = qs.stringify({ sort: 'publishedAt:desc' });
    return await fetchWrapper<PostsFetchResponse>(`/posts?${queryParams}`);
  },
  getPostBySlug: async (slug: string) => {
    const queryParams = qs.stringify({
      'filters[slug]': slug,
      'populate[0]': 'categories'
    });
    return await fetchWrapper<PostsFetchResponse>(`/posts?${queryParams}`);
  },
  getPostSlugs: async () => {
    const queryParams = qs.stringify({ fields: ['slug'] });
    return await fetchWrapper<PostsFetchResponse>(`/posts?${queryParams}`);
  },
  getFeaturedPosts: async () => {
    const queryParams = qs.stringify({
      'filters[isFeatured][$eq]': true,
      sort: 'publishedAt:desc',
      fields: ['slug', 'title', 'content', 'publishedAt']
    });
    return await fetchWrapper<PostsFetchResponse>(`/posts?${queryParams}`);
  },
  getCategories: async () => {
    return await fetchWrapper<CategoriesFetchResponse>('/categories');
  }
};
