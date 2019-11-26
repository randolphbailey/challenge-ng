import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getByUsername(username: string) {
    return this.http.get<User>(
      "http://localhost:8085/users/getByUsername/" + username
    );
  }

  addUser(user: User) {
    return this.http.post<User>("http://localhost:8085/users/create", user);
  }
}
