import { apiSlice } from "./apiSlice";


const API = import.meta.env.VITE_BASE_URL;
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
                url: `${API}/auth/register`,
                method: "POST",
                body: userData
            })
        })
    })
})


export const { useLoginMutation, useRegisterMutation } = authApiSlice;