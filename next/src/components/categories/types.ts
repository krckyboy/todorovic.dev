export interface Category {
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