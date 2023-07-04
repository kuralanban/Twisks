import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { AccessGuard } from '../service/Guard/access.guard';

const routes: Routes = [
  {

  path: '',
    children: [
      { path: '', component: ExploreComponent , canActivate:[AccessGuard] },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
