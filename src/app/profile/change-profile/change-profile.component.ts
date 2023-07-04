import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/app/environments/environment';
import { CameraComponent } from 'src/app/search/camera/camera.component';
import { CameraService } from 'src/app/service/camera.service';
import { UserInterface } from 'src/app/interface/user.interface';
@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css'],
})
export class ChangeProfileComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public userService: UserService,
    private cameraService: CameraService
  ) {}
  fileName!: string;
  show: boolean = this.data.showGender;
  gender: String = this.data.gender;
  userDetails!: UserInterface;
  public profilePhoto!: string;
  public formData = new FormData();
  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((res: any) => {
      this.userDetails = res.userDetails;
    });
  }
  public closeDialog() {
    this.dialog.closeAll();
  }

  public submit(form: NgForm) {
    this.userDetails.gender = form.value.gender;
    this.userService
      .updateUserDetails(environment.userId, this.userDetails)
      .subscribe(() => {
        this.dialog.closeAll();
      });
  }
  public removePhoto() {
    this.userDetails.profilePhoto = '';
    this.userService
      .updateUserDetails(environment.userId, this.userDetails)
      .subscribe(() => {
        this.dialog.closeAll();
      });
  }
  public imageUpload(event: any) {
    const file: File = event.target.files[0];
    this.fileName = file.name;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.profilePhoto = e.target.result;
    };
    reader.readAsDataURL(file);

    this.formData.append('profile', event.target.files[0]);
  }
  public uploadProfileImage() {
    this.formData.append('userId', this.userDetails._id);
    this.formData.append('userName', this.userDetails.userName);
    this.userService.uploadProfileImage(this.formData).subscribe({
      next: () => {
        this.ngOnInit();
        this.closeDialog();
      },
    });
  }
  public takePhoto() {
    this.dialog
      .open(CameraComponent)
      .afterClosed()
      .subscribe({
        next: () => {
          this.profilePhoto = this.cameraService.webcamImage.imageAsDataUrl;
          this.formData.append('profile', this.cameraService.formData);
        },
      });
  }
}
