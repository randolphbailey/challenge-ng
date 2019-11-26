import { Component, OnInit } from "@angular/core";
import { StateService } from "src/app/services/state/state.service";
import { User } from "src/app/models/User";
import { Router } from "@angular/router";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  currentUser: User;

  constructor(public gvs: StateService, private router: Router) {}

  ngOnInit() {
    this.currentUser = this.gvs.getCurrentUser();
    if (this.currentUser === undefined) {
      this.router.navigateByUrl("/");
    }
    if (this.currentUser.role.id === 1) {
      this.router.navigateByUrl("/teacher");
    }
  }
}
