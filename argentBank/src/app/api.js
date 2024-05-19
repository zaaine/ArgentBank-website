import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Api setup from RTK Query
 *
 * Phase 1 : Authentication
 * Three endpoints are provided, based on the Swagger API documentation (backend/swagger.yaml)
 * The token is provided by Redux Store and add to the Header of HTTP requests
 */
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token || localStorage.getItem("token");
      if (!headers.has("Authorization") && token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // Phase 1 : Authentication endpoints
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: "/user/login",
          method: "POST",
          body,
        };
      },
    }),
    getUser: builder.mutation({
      query: () => {
        return {
          url: "/user/profile",
          method: "POST",
        };
      },
    }),
    setUserName: builder.mutation({
      query: (body) => {
        return {
          url: "/user/profile",
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useGetUserMutation, useSetUserNameMutation } =
  api;
