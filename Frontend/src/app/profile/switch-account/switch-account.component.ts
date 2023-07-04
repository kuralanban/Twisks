import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/app/environments/environment';
import { FollowService } from 'src/app/service/follow.service';

@Component({
  selector: 'app-switch-account',
  templateUrl: './switch-account.component.html',
  styleUrls: ['./switch-account.component.css'],
})
export class SwitchAccountComponent {
  public accountType!: Boolean;
  public profilePicRetrival = environment.profilePicRetrival;
  constructor(
    public userService: UserService,
    private followService: FollowService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SwitchAccountComponent>
  ) {}
  show: boolean = this.data.show;
  updateUserDetail: any = this.data.updateUser;
  activeUserDetails: any;
  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((res: any) => {
      this.activeUserDetails = res.userDetails;
      if (res.userDetails.accountType == 'private') {
        this.accountType = true;
      } else {
        this.accountType = false;
      }
    });
  }
  public switchAccount(data: any) {
    this.userService.getUserDetails().subscribe((res: any) => {
      res.accountType = data;
      this.userService
        .updateUserDetails(environment.userId, res)
        .subscribe(() => {
          this.closeDialog();
        });
    });
  }
  public closeDialog() {
    this.dialogRef.close();
  }
  public unfollow(data: any) {
    const object = {
      activeUser: environment.userId,
      followUser: data,
    };
    this.followService.unfollowUser(object).subscribe({
      next: () => {
        this.ngOnInit();
        this.dialog.closeAll();
      },
    });
  }
}
