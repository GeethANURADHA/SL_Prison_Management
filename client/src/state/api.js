import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "listPrisoners", "addPrisoners", "updatePrisoner","Status"],

  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    getallPrisoners: build.query({
      query: () => "prisoner/prisoners",
      providesTags: ["allPrisoners"],
    }),

    getaddPrisoners: build.query({
      query: () => "prisoner/pri",
      providesTags: ["addPrisoners"],
    }),

    getupdatePrisoner: build.query({
      query: () => "prisoner/updatePrisoner",
      providesTags: ["updatePrisoner"],
    }),
    getStatus: build.query({
      query: () => "status/status",
      providesTags: ["Status"],
    }),
  }),
});


   

export const { useGetUserQuery, useGetallPrisonersQuery, useGetaddPrisonersQuery, useGetStatusQuery, useGetupdatePrisonerQuery } = api;
