import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../../utils/constants';
import { HealPackageResponse } from './models/HealPackage.model';

type params = {
  id?: number | string;
  size?: number;
  page?: number;
  sort?: string[];
};
// Define your API service
export const HealPackageApi = createApi({
  reducerPath: 'HealPackageApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), // Replace with your API base URL
  endpoints: (builder) => ({
    getHealPackages: builder.query<HealPackageResponse, params>({
      query: (args) => {
        const { size, page } = args;
        return {
          url: '/heal-packages',
          params: { size, page },
          cacheTime: 0
        };
      },
    }),
    createHealPackage: builder.mutation<HealPackageResponse, params>({
      query: (healPackage) => ({
        url: '/heal-packages',
        method: 'POST',
        body: healPackage,
      }),
    }),
  }),
});

// Export hooks for usage in components
export const { useGetHealPackagesQuery, useCreateHealPackageMutation } = HealPackageApi;
