import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { PostWithPopularityComponent } from './post-with-popularity/post-with-popularity.component';
import { BarChartUserComponent } from './bar-chart-user/bar-chart-user.component';
import { StatisticComponent } from './statistic/statistic.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { ReportComponent } from './report/report.component';
import { ManageReportsComponent } from './manage-reports/manage-reports.component';
import { AdminGuard } from '../service/Guard/admin.guard';

const routes: Routes = [
  {path:"statistic",component:StatisticComponent , canActivate:[AdminGuard]},
  {path:"active-user",component:ActiveUserComponent , canActivate:[AdminGuard]},
  {path:"manageReports",component:ManageReportsComponent , canActivate:[AdminGuard]},
  {path:"report/:data",component:ReportComponent , canActivate:[AdminGuard]},
  {path:"allUsers",component:AllUsersComponent , canActivate:[AdminGuard]},
  {path:"barChart",component:BarChartUserComponent , canActivate:[AdminGuard]},
  {path:"userDetail/:id",component:UserDetailPageComponent , canActivate:[AdminGuard]},
  {path:"postWithPopularity",component:PostWithPopularityComponent , canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
