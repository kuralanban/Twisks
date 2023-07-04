import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { FollowerComponent } from './follower/follower.component';
import { FollowingComponent } from './following/following.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SwitchAccountComponent } from './switch-account/switch-account.component';
import { ChangeProfileComponent } from './change-profile/change-profile.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ReportComponent } from './report/report.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [
    FollowerComponent,
    FollowingComponent,
    EditProfileComponent,
    ProfileComponent,
    SwitchAccountComponent,
    ChangeProfileComponent,
    ReportComponent,
  ],
  entryComponents: [
    FollowerComponent,
    FollowingComponent,
    SwitchAccountComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ProfileRoutingModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    WebcamModule,
  ],
})
export class ProfileModule {}
