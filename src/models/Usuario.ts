export class Usario {
    id!: number;
    email!: string;
    username!: string;
    password!: string;
    name!: {
        firstname: string
        lastname: string
    };
    phone!: string;

    constructor() {}
}