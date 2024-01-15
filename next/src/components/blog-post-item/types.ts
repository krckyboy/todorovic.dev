interface Category {
  id: number;
  attributes: {
    name: string;
    color: string;
    background: string;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
  };
}

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

export interface CategoriesFetchResponse {
  data: Category[],
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number
    }
  }
}