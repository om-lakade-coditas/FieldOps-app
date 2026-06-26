import type { UserDetails } from "../../components/UI-Components/Login-Form/Login.types";
import type { RegisterData } from "../../components/UI-Components/Register-Form/Register.types";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userData:UserDetails) => ({
                url: "/auth/login",
                method: "POST",
                body: userData
            })
        }),
        register: builder.mutation({
            query: (userData:RegisterData) => ({
                url: `/auth/register`,
                method: "POST",
                body: userData
            })
        })
    })
})


export const { useLoginMutation, useRegisterMutation } = authApiSlice;