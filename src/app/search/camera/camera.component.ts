import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { CameraService } from 'src/app/service/camera.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent implements OnInit {
  userDetails: any;
  public webcamImage!: WebcamImage;
  public trigger: Subject<void> = new Subject<void>();
  constructor(
    public userService: UserService,
    private cameraService: CameraService,
    public dialogRef: MatDialogRef<CameraComponent>
  ) {}
  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((res: any) => {
      this.userDetails = res.userDetails;
    });
  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }
  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.cameraService.handleImage(this.webcamImage);
    this.dialogRef.close();
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
