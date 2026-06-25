import { apiSlice } from "./apiSlice";

export const jobsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => ({
                url: "/jobs",
                method: "GET",
            })
        }),
    })
})


export const { useGetJobsQuery } = jobsApiSlice