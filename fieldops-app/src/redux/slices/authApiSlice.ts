import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userData) => ({
                url: "/auth/login",
                method: "POST",
                body: userData
            })
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: `/auth/register`,
                method: "POST",
                body: userData
            })
        })
    })
})


export const { useLoginMutation, useRegisterMutation } = authApiSlice;