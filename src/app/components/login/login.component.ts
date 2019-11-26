import { Component, OnInit } from "@angular/core";
import { Role } from "src/app/models/Role";
import { UserService } from "src/app/services/user/user.service";
import { StateService } from "src/app/services/state/state.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usernameField: string;
  passwordField: string;
  studentRole = new Role(2, "Student");

  constructor(
    private us: UserService,
    public gvs: StateService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.us.getByUsername(this.usernameField).subscribe(
      data => {
        this.gvs.setCurrentUser(data);
        if (data.role.id === 1) {
          this.router.navigateByUrl("/teacher");
        } else {
          this.router.navigateByUrl("/student");
        }
      },
      err => console.log(err)
    );
  }
}
