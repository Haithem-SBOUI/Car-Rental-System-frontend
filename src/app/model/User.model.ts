import {UserRoleModel} from "./enum/UserRole.enum";

export class UserModel {
  id?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  role?: UserRoleModel;
  createdOn?: Date;
  updatedOn?: Date;


  constructor(
    id?: string,
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string,
    role?: UserRoleModel,
    createdOn?: Date,
    updatedOn?: Date
  ) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = role;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
  }
}
