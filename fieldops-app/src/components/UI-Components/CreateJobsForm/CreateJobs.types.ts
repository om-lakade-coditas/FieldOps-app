import type { ActionDispatch } from "react"
import type { actionType } from "../../Dashboard-Components/CustomerDashboard/CustomerDashboard.types"

export interface FormDetails{
    category: string,
    description: string,
    urgency: string
}

export interface CreateJobsProps {
    dispatchFn: ActionDispatch<[action: actionType]>
}