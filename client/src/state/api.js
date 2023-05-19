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
  tagTypes: ["User", "Inventories", "Medicine", "Food", "Status", "Dashboard"],

  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    getInventories: build.query({
      query: () => "client/inventories",
      providesTags: ["Inventories"],
    }),

    getMedicines: build.query({
      query: () => "client/medicines",
      providesTags: ["Medicine"],
    }),

    getFoods: build.query({
      query: () => "client/foods",
      providesTags: ["Food"],
    }),

    getStatus: build.query({
      query: () => "status/status",
      providesTags: ["Status"],
    }),

    getDashboardStats: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});


   

export const { useGetUserQuery, useGetInventoriesQuery, useGetMedicinesQuery, useGetFoodsQuery, useGetStatusQuery, useGetDashboardStatsQuery } = api;
