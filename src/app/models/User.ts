import { Role } from "./Role";

export class User {
  constructor(id: number, username: string, password: string, role: Role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }
  id: number;
  username: string;
  password: string;
  role: Role;
}
