import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { AccessGuard } from '../service/Guard/access.guard';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'', component: NotificationComponent, canActivate:[AccessGuard]}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
