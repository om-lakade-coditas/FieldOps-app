export interface RegisterData {
    name: string;
    email: string;
    password: string;
}


export interface PassValidation {
    isPassLengthValid: boolean;
    doesIncludeUppercase: boolean;
}

export interface actionType {
    type: string;
}