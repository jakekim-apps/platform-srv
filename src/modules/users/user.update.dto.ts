export enum Role {
    ADMIN,
    MANAGER,
    GUEST
}

export class UserUpdateDto {
    name: string;
    password: string;
    phone: string;
    role: Role;
}