export interface IUser {
    id?: number | string,
    name?: string,
    email: string,
    password: string,
    user?: Object,
    position?: string,
    about?: string,
    cv?: string,
    // user: name, position, about, cv
}