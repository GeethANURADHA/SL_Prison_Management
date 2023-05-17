import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Staff", "Attendance", "Staff Dashboard"],

  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getStaffs: build.query({
      query: () => "client/staffs/",
      providesTags: ["Staff"],
    }),
    getAttendance: build.query({
      query: () => "client/attendances",
      providesTags: ["Attendance"],
    }),
    getDashboardStaffStats: build.query({
      query: () => "general/dashboard",
      providesTags: ["Staff Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetStaffsQuery,
  useGetAttendanceQuery,
  useGetDashboardStaffStatsQuery,
} = api;
