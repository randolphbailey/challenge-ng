import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { TeacherComponent } from "./components/teacher/teacher.component";
import { StudentComponent } from "./components/student/student.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
  { path: "teacher", component: TeacherComponent },
  { path: "student", component: StudentComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
