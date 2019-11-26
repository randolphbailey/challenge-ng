import { Component, OnInit } from "@angular/core";
import { Role } from "src/app/models/Role";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usernameField: string;
  passwordField: string;
  studentRole = new Role(2, "Student");

  constructor(private us: UserService) {}

  ngOnInit() {}

  login() {
    this.us.getByUsername(this.usernameField).subscribe(
      data => {
        console.log(data);
        console.log("Hello");
      },
      err => console.log(err)
    );
  }
}
