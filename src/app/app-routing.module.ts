import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PayrollComponent} from "./payroll/payroll.component";
import {ProfileComponent} from "./profile/profile.component";
import {HrhelpdeskComponent} from "./hrhelpdesk/hrhelpdesk.component";
import {LearningComponent} from "./learning/learning.component";
import {TechComponent} from "./tech/tech.component";


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "payroll", component: PayrollComponent},
  {path: "profile", component: ProfileComponent},
  {path: "hr", component: HrhelpdeskComponent},
  {path: "learning", component: LearningComponent},
  {path: "learning/:technology", component: TechComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
