import type { FormDetails } from "../../components/UI-Components/CreateJobsForm/CreateJobs.types";
import { apiSlice } from "./apiSlice";


interface JobsType {
    jobData: FormDetails;
    token: string
}

export const jobsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query<[], string>({
            query: (token:string) => ({
                url: "/jobs",
                method: "GET",
                headers: {
                            'Authorization': `Bearer ${token}`  
                        }
            })
        }),
        uploadJobs: builder.mutation({
            query: ( data: JobsType) => ({
                url: "/jobs",
                method: "POST",
                body: data.jobData,
                headers: {
                    'Authorization': `Bearer ${data.token}` 
                }
            })
        }),
    })
})


export const { useGetJobsQuery, useUploadJobsMutation } = jobsApiSlice