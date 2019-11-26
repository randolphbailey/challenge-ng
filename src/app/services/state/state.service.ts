import { Injectable } from "@angular/core";
import { User } from "src/app/models/User";

@Injectable({
  providedIn: "root"
})
export class StateService {
  currentUser: User;
  constructor() {}

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
