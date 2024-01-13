export interface Post {
  id: number,
  attributes: {
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    title: string,
    summary: string,
    featured: boolean,
    slug: string;
    content: string;
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