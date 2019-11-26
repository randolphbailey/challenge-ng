import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { Role } from "src/app/models/Role";
import { User } from "src/app/models/User";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  usernameField: string;
  passwordField: string;
  studentRole = new Role(2, "Student");

  constructor(private us: UserService) {}

  ngOnInit() {}

  register() {
    this.us
      .addUser(
        new User(0, this.usernameField, this.passwordField, this.studentRole)
      )
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
