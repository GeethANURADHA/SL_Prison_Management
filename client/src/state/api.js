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
  tagTypes: ["User", "listPrisoners", "addPrisoners", "updatePrisoner","statusPrisoner","prisonerDashboard","deletePrisoner"],

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
    getstatusPrisoner: build.query({
      query: () => "status/statusPrisoner",
      providesTags: ["Status"],
    }),
    getprisonerDashboardStats: build.query({
      query: () => "general/prisonerDashboard",
      providesTags: ["Dashboard"],
    }),
    getdeletePrisoner: build.query({
      query: () => "prisoner/deletePrisoner",
      providesTags: ["deletePrisoner"],
    }),
  }),
});


   

export const { useGetUserQuery, useGetallPrisonersQuery, useGetaddPrisonersQuery, useGetstatusPrisonerQuery, useGetupdatePrisonerQuery, useGetprisonerDashboardStatsQuery, useGetdeletePrisonerQuery} = api;
