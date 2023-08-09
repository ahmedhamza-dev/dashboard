export interface CategoryRequest {
  page: number;
  size: number;
  sort?: string[];
}
export interface CategoryResponse {
  data: { packageCategories: CategoryData[] };
  message: string;
  status: string;
  statusCode: number;
}
export interface CategoryData {
  createdBy: string | null;
  createdDate: number | string;
  id: number;
  lastModifiedBy: string | null;
  lastModifiedDate: string | null;
  name: string;
  nameAr: string;
}
