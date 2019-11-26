import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StateService } from "src/app/services/state/state.service";
import { User } from "src/app/models/User";

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.css"]
})
export class TeacherComponent implements OnInit {
  currentUser: User;
  constructor(private router: Router, public gvs: StateService) {}

  ngOnInit() {
    this.currentUser = this.gvs.getCurrentUser();
    if (this.currentUser === undefined) {
      this.router.navigateByUrl("/");
    }
    if (this.currentUser.role.id === 2) {
      this.router.navigateByUrl("/student");
    }
  }
}
