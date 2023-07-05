import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { LoginGuard } from '../service/Guard/login.guard';

const routes: Routes = [
      {path:'signup', component: SignupComponent ,canActivate:[LoginGuard]},
      {path:'signin',component:SigninComponent,canActivate:[LoginGuard]},
      {path:"forgotPassword",component:ForgotPasswordComponent,canActivate:[LoginGuard]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
