import { apiSlice } from "./apiSlice";

interface LoginInputs {
  email: string;
  password: string;
}

interface RegisterInputs extends LoginInputs {
  name: string;
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data: RegisterInputs) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data: LoginInputs) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",

        credentials: "include",
      }),
    }),
    authCheck: builder.query({
      query: () => ({
        url: "/auth/authCheck",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useAuthCheckQuery , useLogoutMutation } =
  userApiSlice;

//The builder is an object provided by RTK Query that helps you create endpoints.
// It acts like a “factory” that gives you methods to define what kind of request each endpoint is.
