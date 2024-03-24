import { Category } from '@/components/categories/types';

export interface Post {
  id: number,
  attributes: {
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    title: string,
    summary: string,
    isFeatured: boolean,
    slug: string;
    content: string;
    categories?: { data: Category[] }
  }
}

export interface PostsFetchResponse {
  data: Post[],
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number
    }
  }
}