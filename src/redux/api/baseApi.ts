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

    // Query to get a product by ID
    fetchProjectById: builder.query({
      query: (projectId) => ({
        url: `/projects/${projectId}`,
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    // Mutation for creating a new skill
    addNewSkills: builder.mutation({
      query: (skillData) => ({
        url: "/skills",
        method: "POST",
        body: skillData,
      }),
      invalidatesTags: ["skills"],
    }),

    // Mutation to remove skills
    deleteSkills: builder.mutation({
      query: (skillId) => ({
        url: `/skills/${skillId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skills"],
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
  useFetchProjectByIdQuery,
  useFetchAllSkillsQuery,
  useAddNewSkillsMutation,
  useDeleteSkillsMutation,
} = baseApi;
