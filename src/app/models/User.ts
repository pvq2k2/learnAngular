export interface IUser {
    id?: number | string,
    name?: string,
    email: string,
    password?: string,
    user?: Object,
    position?: string,
    about?: string,
    cv?: string,
    img?: string | null,
    // user: name, position, about, cv
}