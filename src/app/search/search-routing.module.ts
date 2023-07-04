import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CameraComponent } from './camera/camera.component';
import { AccessGuard } from '../service/Guard/access.guard';

const routes: Routes = [
  {path:"searchUser",component:SearchComponent, canActivate:[AccessGuard]},
  {path:"cam",component:CameraComponent, canActivate:[AccessGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
