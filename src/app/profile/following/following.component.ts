import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { SwitchAccountComponent } from '../switch-account/switch-account.component';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css'],
})
export class FollowingComponent implements OnInit {
  public followingId: any = [];
  public followingDetails: any = [];
  public activeUser = sessionStorage.getItem('userId');
  public profilePicRetrival = environment.profilePicRetrival;
  constructor(
    private dialog: MatDialog,
    public userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.followingDetails = [];
    this.userService
      .fetchSearchedUserDetails(this.data.userId)
      .subscribe((res: any) => {
        this.followingId = res.userDetails.following;
        this.getFollowingDetails();
      });
  }
  public getFollowingDetails() {
    for (const id of this.followingId) {
      this.userService.getFollowersDetails(id.id).subscribe((res: any) => {
        this.followingDetails.push(res.userDetails);
      });
    }
  }
  public close() {
    this.dialog.closeAll();
  }
  public unfollow(data: any) {
    this.dialog
      .open(SwitchAccountComponent, {
        data: {
          show: true,
          updateUser: data,
        },
        disableClose: true 
      })
      .afterClosed()
      .subscribe({
        next: () => {
          this.ngOnInit();
        },
      });
  }
}
