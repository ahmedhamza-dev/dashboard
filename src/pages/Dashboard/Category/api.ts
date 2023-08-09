import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CategoryResponse } from './models/Category.model';
import { BASE_URL } from '../../../utils/constants';

type params = {
  id?: number | string;
  size?: number;
  page?: number;
  sort?: string[];
};
// Define your API service
export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), // Replace with your API base URL
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryResponse, params>({
      query: (args) => {
        const { size, page } = args;
        return {
          url: '/package-categories',
          params: { size, page },
        };
      },
    }),
    createCategory: builder.mutation<CategoryResponse, params>({
      query: (category) => ({
        url: '/package-categories',
        method: 'POST',
        body: category,
      }),
    }),
  }),
});

// Export hooks for usage in components
export const { useGetCategoriesQuery, useCreateCategoryMutation } = categoryApi;
