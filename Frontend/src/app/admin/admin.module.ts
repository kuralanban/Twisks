import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { SharedModule } from '../shared/shared.module';
import { BarChartUserComponent } from './bar-chart-user/bar-chart-user.component';
import { NgChartsModule } from 'ng2-charts';
import { AllUsersComponent } from './all-users/all-users.component';
import { FormsModule } from '@angular/forms';
import { PostWithPopularityComponent } from './post-with-popularity/post-with-popularity.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatisticComponent } from './statistic/statistic.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActiveUserComponent } from './active-user/active-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ReportComponent } from './report/report.component';
import { ManageReportsComponent } from './manage-reports/manage-reports.component';import { UnblockComponent } from './unblock/unblock.component';


@NgModule({
  declarations: [
    UserDetailPageComponent,
    BarChartUserComponent,
    AllUsersComponent,
    PostWithPopularityComponent,
    StatisticComponent,
    ActiveUserComponent,
    NewUserComponent,
    ReportComponent,
    ManageReportsComponent,
    UnblockComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgChartsModule,
    FormsModule,
    NgbModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
})
export class AdminModule {}
