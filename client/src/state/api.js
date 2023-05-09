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
  tagTypes: ["User", "Jails", "Jailing", "Category", "Psychologist", "Situation", "Dashboard"],

  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    getJails: build.query({
      query: () => "client/jailings/",
      providesTags: ["Jails"],
    }),

    getJailing: build.query({
      query: () => "client/jailings",
      providesTags: ["Jailing"],
    }),

    getCategories: build.query({
      query: () => "client/categories",
      providesTags: ["Category"],
    }),

    getPsychologist: build.query({
      query: () => "client/psychologists",
      providesTags: ["Psychologist"],
    }),

    getSituation: build.query({
      query: () => "situation/situations",
      providesTags: ["Situation"],
    }),

    getDashboardJail: build.query({
      query: () => "general/jail dashboard",
      providesTags: ["Jail Dashboard"],
    }),
  }),
});


   

export const { useGetUserQuery, useGetPsychologistQuery, useGetJailsQuery, useGetJailingQuery, useGetCategoriesQuery, useGetSituationQuery, useGetDashboardJailQuery } = api;
