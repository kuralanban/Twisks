import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowerComponent } from './follower/follower.component';
import { FollowingComponent } from './following/following.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { SwitchAccountComponent } from './switch-account/switch-account.component';
import { ChangeProfileComponent } from './change-profile/change-profile.component';
import { ReportComponent } from './report/report.component';
import { AccessGuard } from '../service/Guard/access.guard';

const routes: Routes = [
  { path: 'follower', component: FollowerComponent , canActivate:[AccessGuard]},
  { path: 'following', component: FollowingComponent , canActivate:[AccessGuard]},
  { path: 'edit-profile', component: EditProfileComponent , canActivate:[AccessGuard]},
  { path: 'home/:id', component: ProfileComponent , canActivate:[AccessGuard]},
  { path: 'switch-account', component: SwitchAccountComponent , canActivate:[AccessGuard]},
  { path: 'reports', component: ReportComponent , canActivate:[AccessGuard]},
  { path: 'changePhoto', component: ChangeProfileComponent , canActivate:[AccessGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
