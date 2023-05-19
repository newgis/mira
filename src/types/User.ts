export type PayloadType = Omit<IUser, 'password'>


export default interface IUser {
    login: string;
    password: string;
    email: string;
    name: string;
    phone?: string
}
