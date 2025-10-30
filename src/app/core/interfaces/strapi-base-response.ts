export interface StrapiBaseModel {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface StrapiGenericResponse<T> {
  data: T;
  meta: any;
}
