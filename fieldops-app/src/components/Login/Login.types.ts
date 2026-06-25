export interface UserDetails {
    email: string;
    password : string;
}

export interface JwtPayload {
    role: string;
}