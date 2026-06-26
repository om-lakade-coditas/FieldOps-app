export interface JobsFormState {
  isFormOpen: boolean;
} 


export type actionType = {
    type: string;
    
}

export interface jobDetails {
        id: string,
        customerId: string,
        "technicianId": string,
        "category": string,
        "description": string,
        "urgency": string,
        "status": string,
        "scheduledFor": string,
        "completionSummary": string,
        "createdAt": string,
        "updatedAt":string,
        "customer": {
            "id": string,
            "name": string,
            "email": string
        },
        "technician": string
    }
