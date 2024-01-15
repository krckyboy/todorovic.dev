import type { CategoriesFetchResponse, PostsFetchResponse } from '@/components/blog-post-item/types';

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
    return await fetchWrapper<PostsFetchResponse>('/posts');
  },
  getPostBySlug: async (slug: string) => {
    return await fetchWrapper<PostsFetchResponse>(`/posts/?&filters[slug]=${slug}`);
  },
  getPostSlugs: async () => {
    return await fetchWrapper<PostsFetchResponse>('/posts?fields[0]=slug');
  },
  getFeaturedPosts: async () => {
    return await fetchWrapper<PostsFetchResponse>('/posts?&filters[isFeatured][$eq]=true');
  },
  getCategories: async () => {
    return await fetchWrapper<CategoriesFetchResponse>('/categories');
  }
};