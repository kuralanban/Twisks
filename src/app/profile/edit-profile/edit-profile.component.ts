import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwitchAccountComponent } from '../switch-account/switch-account.component';
import { ChangeProfileComponent } from '../change-profile/change-profile.component';
import { UserService } from 'src/app/service/user.service';
import { ThemePalette } from '@angular/material/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  color: ThemePalette;
  constructor(private dialog: MatDialog, public userService: UserService) {}
  public userDetails!: any;
  private: boolean = false;
  popup: boolean = false;
  selectedDate!: String;
  genderValue!: String;
  bioDetails!: String;
  name!:String;
  public profilePicRetrival=environment.profilePicRetrival;
  ngOnInit(): void {
    this.getUserDetails();
    this.color = 'primary';
  }
  public accountType() {
    this.color = 'primary';
    this.dialog
      .open(SwitchAccountComponent,{
        data:{
          show:false
        },
        disableClose: true 
      })
      .afterClosed()
      .subscribe(() => {
        this.ngOnInit();
      });
  }
  public changeProfile() {
    this.dialog
      .open(ChangeProfileComponent, {
        data: {
          showGender: false,
        },
        disableClose: true 
      })
      .afterClosed()
      .subscribe(() => {
        this.ngOnInit();
      });
  }
  public getUserDetails() {
    this.userService.getUserDetails().subscribe((data: any) => {
      this.userDetails = [data.userDetails];
      const defaultDate = data.userDetails.dateOfBirth;
      this.selectedDate = defaultDate.toString().substr(0, 10);
      this.genderValue = data.userDetails.gender;
      this.bioDetails = data.userDetails.bioDetails;
      this.name = data.userDetails.name;
      this.private = data.userDetails.accountType!='public';
    });
  }
  public gender() {
    this.dialog
      .open(ChangeProfileComponent, {
        data: {
          show: false,
          showGender: true,
          gender: this.userDetails.find((a: any) => {
            return a;
          }).gender,
        },
        disableClose: true 
      })
      .afterClosed()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  public onSubmit(form: NgForm) {
    if (form.valid) {
      this.userDetails.find((a: any) => {
        a.dateOfBirth = this.selectedDate;
        a.bioDetails = form.value.bioDetails;
        a.name = form.value.name;
        this.userService.updateUserDetails(environment.userId,a).subscribe({
          next:()=>{
            window.location.reload();
          }
        });
      });
    }
  }
}
