import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}`,
    credentials: "include",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": `${process.env.REACT_APP_BASE_URL}`,
    },
  }),

  
  reducerPath: "adminApi",
  tagTypes: ["User", "listPrisoners", "addPrisoners", "updatePrisoner","Status","Dashboard","deletePrisoner"],

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
    getDashboardStats: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
    getdeletePrisoner: build.query({
      query: () => "prisoner/deletePrisoner",
      providesTags: ["deletePrisoner"],
    }),
  }),
});


   

export const { useGetUserQuery, useGetallPrisonersQuery, useGetaddPrisonersQuery, useGetStatusQuery, useGetupdatePrisonerQuery, useGetDashboardStatsQuery, useGetdeletePrisonerQuery} = api;
