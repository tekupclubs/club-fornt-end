export class user{
  id?:number;
  userName: string;
    email: string;
    password: string;
    telephone:number;
    roles: any[];
    constructor( userName: string,email: string,password: string, telephone:number,roles: any[]){
this.userName=userName
this.email=email
this.password=password
this.telephone=telephone
this.roles=roles
 }
}
