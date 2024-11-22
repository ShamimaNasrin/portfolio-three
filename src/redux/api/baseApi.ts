import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// base API configuration
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  tagTypes: ["skills", "projects", "blogs"],
  endpoints: (builder) => ({
    // Query to fetch all products
    fetchAllProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),
    // Query to fetch all products
    fetchAllSkills: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
      providesTags: ["skills"],
    }),
    // Query to fetch all products
    fetchAllBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
  }),
});

// Export hooks for API endpoints
export const {
  useFetchAllBlogsQuery,
  useFetchAllProjectsQuery,
  useFetchAllSkillsQuery,
} = baseApi;
