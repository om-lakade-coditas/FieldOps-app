export interface JobsFormState {
  isFormOpen: boolean;
} 


export type actionType = {
    type: string;
    
}

export interface jobDetails {
        id: string,
        customerId: string,
        "technicianId": null,
        "category": string,
        "description": string,
        "urgency": string,
        "status": string,
        "scheduledFor": null,
        "completionSummary": null,
        "createdAt": string,
        "updatedAt":string,
        "customer": {
            "id": "cmqruvrsf000a3vrxebysls84",
            "name": "Bruce Wayne",
            "email": "bruce@gmail.com"
        },
        "technician": null
    }
