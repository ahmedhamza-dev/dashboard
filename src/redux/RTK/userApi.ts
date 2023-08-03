import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserData } from "../../models/user.model";

const BASE_URL = "http://localhost:5000/";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserById: builder.query<UserData, any>({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});
export const { useGetUserByIdQuery } = userApi;
