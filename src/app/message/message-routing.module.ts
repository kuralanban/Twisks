import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { AccessGuard } from '../service/Guard/access.guard';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'', component: MessageComponent, canActivate:[AccessGuard]},
      {path:'group',component:CreateGroupComponent, canActivate:[AccessGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
