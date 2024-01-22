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

const sortByPublishedAt = 'sort=publishedAt:desc';

export const db = {
  getPosts: async () => {
    return await fetchWrapper<PostsFetchResponse>(`/posts?${sortByPublishedAt}`);
  },
  getPostBySlug: async (slug: string) => {
    return await fetchWrapper<PostsFetchResponse>(`/posts/?&filters[slug]=${slug}`);
  },
  getPostSlugs: async () => {
    return await fetchWrapper<PostsFetchResponse>('/posts?fields[0]=slug');
  },
  getFeaturedPosts: async () => {
    return await fetchWrapper<PostsFetchResponse>(`/posts?&filters[isFeatured][$eq]=true&${sortByPublishedAt}&fields[0]=slug&fields[1]=title&fields[2]=content&fields[3]=publishedAt`);
  },
  getCategories: async () => {
    return await fetchWrapper<CategoriesFetchResponse>('/categories');
  }
};