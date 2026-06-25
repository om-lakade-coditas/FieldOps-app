import { apiSlice } from "./apiSlice";

export const jobsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query<[], string>({
            query: (token) => ({
                url: "/jobs",
                method: "GET",
                headers: {
                            'Authorization': `Bearer ${token}`  
                        }
            })
        }),
        uploadJobs: builder.mutation({
            query: (data) => ({
                url: "/jobs",
                method: "POST",
                body: data,
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXFydXZyc2YwMDBhM3ZyeGVieXNsczg0Iiwicm9sZSI6IkNVU1RPTUVSIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTc4MjM4MjQ5MCwiZXhwIjoxNzgyMzgzMzkwfQ.6bSEV1S7egnWnPAhKpqWJqw5orsziW7ji0XE7d4f6znndRhvlFOeYGPp8jJyb2WBdhM9_2-2amrKOkaIE0jmK9VfpsU6OC3Nn4t7embg3eSlR0NyjE_yl5AdV40eelVzNxuZTnTWzB1odjZuJbwFvbgfU02iVH78CRoNum2cl7tXljOe4LzRuau-R22bssQ185SJKadK4e9KFn9o-aKA2gZMBC5ArQQv-SLe4mHoo4yPDPtR0Si3IiBY-62owUenMpnOKZe2Pzp-eU_oKGO2uOCPysDCHWDH-cggDHNfFmFKQYTW-r1Ysqn83Vn3u6TYg7w2bVNEeuk2Zc7AOOR-BQ` 
                }
            })
        }),
    })
})


export const { useGetJobsQuery, useUploadJobsMutation } = jobsApiSlice