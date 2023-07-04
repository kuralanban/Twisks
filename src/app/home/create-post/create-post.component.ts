import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/service/home.service';
import { Router } from '@angular/router';
import { CameraComponent } from 'src/app/search/camera/camera.component';
import { CameraService } from 'src/app/service/camera.service';
import { environment } from 'src/app/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  public selectedImage!: string; //To potray the Uploaded IMG by the user
  public fileName: string='';
  public userId: string='';
  public username: string='';
  public userProfile: string='';
  public next!: boolean;
  public formData = new FormData();
  public isVideoFile: boolean = false;
  public profilePicRetrival=environment.profilePicRetrival;
  public isFileSizeBig:boolean=false;
  public postForm = this.fb.group({
     caption: new FormControl(''),
   });

  constructor(
    public dialogRef: MatDialog,
    private fb: FormBuilder,
    private homeService: HomeService,
    private route: Router,
    private cameraService:CameraService,
    private notification:MatSnackBar
  ) {}


  ngOnInit(): void {
    this.fetchUserProfileDetails();
  }

  private fetchUserProfileDetails() {
    this.homeService.userDetailService().subscribe({
      next: (data: any) => {
        this.userId = data.userDetails._id;
        this.username = data.userDetails.userName;
        this.userProfile=data.userDetails.profilePhoto;
      },
      error: () => {
        this.notification.open(`Can't fetch Your data `);
      },
    });
  }

  public onNoClick(): void {
    this.dialogRef.closeAll();
  }

  public onFileSelected(event: any) {

    const file: File = event.target.files[0];
    if (file.type == 'video/mp4') {
      this.isVideoFile = true;
      if(file.size/ 1048576 >= 50){
        this.isFileSizeBig=true;
        this.notification.open('Please upload files below 10 mb !', 'Close', { duration: 4000 });
      }
    }

    const fileName: string = file.name;
    this.fileName = file.name;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
    };
    reader.readAsDataURL(file);
    this.formData.append('file', event.target.files[0]);

  }

  public discardPost() {
    this.selectedImage = '';
  }

  public triggerPostInfoDiv() {
    this.next = true;
  }

  public onSharingThePost() {
    const postObj = this.postForm.value;

    this.formData.append('userId', this.userId);
    this.formData.append('caption', this.postForm.value.caption!);

    this.homeService.createNewPost(this.formData).subscribe({
      next: (data: any) => {
        window.location.reload();
      },
      error: (err) => {
        this.notification.open(err);
      },
    });

  }
  public camera(){
    this.dialogRef.open(CameraComponent).afterClosed().subscribe({
      next:()=>{
        this.selectedImage=this.cameraService.webcamImage.imageAsDataUrl;
        this.formData.append('file', this.cameraService.formData);
      }
    })
  }
}
