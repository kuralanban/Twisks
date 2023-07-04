import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/app/environments/environment';
import { HomeService } from 'src/app/service/home.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-unblock',
  templateUrl: './unblock.component.html',
  styleUrls: ['./unblock.component.css'],
})
export class UnblockComponent implements OnInit {
  public unblocked: Array<any> = [];
  public userDetail: any;
  public postDetail: any;
  public profilePicRetrival = environment.imgRetrivalPath;
  constructor(
    private matdialog: MatDialog,
    private homeService: HomeService,
    private userService: UserService,
    private matSnackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.userDetail = this.data.user;
    this.postDetail = this.data.post;
  }
  unblock() {
    this.userService.unblockUser(this.userDetail._id).subscribe({
      next: (res: any) => {
        this.close();
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }
  close() {
    this.matdialog.closeAll();
  }

  block() {
    this.userService.blockUser(this.userDetail._id).subscribe({
      next: (res: any) => {
        this.close();
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }

  blockPost() {
    this.homeService.blockingPost(this.postDetail._id).subscribe({
      next: (res: any) => {
        this.close();
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }
  unblockPost() {
    this.homeService.unblockingPost(this.postDetail._id).subscribe({
      next: (res: any) => {
        this.close();
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }
}
