export interface HealPackageRequest {
  page: number;
  size: number;
  sort?: string[];
}
export interface HealPackageResponse {
  data: { healPackages: HealPackageData[] };
  message: string;
  status: string;
  statusCode: number;
}
export interface HealPackageData {
  createdBy: string | null;
  createdDate: number | string;
  id: number;
  lastModifiedBy: string | null;
  lastModifiedDate: string | null;
  name: string;
  nameAr: string;
}
