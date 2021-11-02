export class user {
  userName: string;
    email: string;
    password: string;
    telephone:number;
    roles: string[];
    constructor(userName: string, email: string,telephone:number, password: string, roles: string[]) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.telephone= telephone;
        this.roles  = roles;
    }
}
