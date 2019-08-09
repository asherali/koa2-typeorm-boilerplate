export interface IUserSignUpRequest {
    name: string;
    email: string;
    password: string;
}

export interface IUserLoginRequest {
    email: string;
    password: string;
}