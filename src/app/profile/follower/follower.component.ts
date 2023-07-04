import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { environment } from 'src/app/environments/environment';
import { FollowService } from 'src/app/service/follow.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css'],
})
export class FollowerComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    public userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public followService: FollowService
  ) {}

  public followersDetails: any;
  public followersId: any = [];
  public followingId: any = [];
  public activeUser = sessionStorage.getItem('userId');
  public activeUserDetail: any;
  public profilePicRetrival = environment.profilePicRetrival;
  
  ngOnInit(): void {
    this.followersDetails = [];
    this.userService
      .fetchSearchedUserDetails(this.data.userId)
      .subscribe((res: any) => {
        this.followersId = res.userDetails.followers;
        this.getFollowingDetails();
        this.getFollowersDetails();
        this.fetchActiveUserDetails();
      });
  }
  public getFollowersDetails() {
    for (const id of this.followersId) {
      this.userService.getFollowersDetails(id.id).subscribe((res: any) => {
        if (
          this.followingId.some(
            (follower: any) => follower.id === res.userDetails._id
          )
        ) {
          res.userDetails.follow = true;
          this.followersDetails.push(res.userDetails);
        } else {
          res.userDetails.follow = false;
          this.followersDetails.push(res.userDetails);
        }
      });
    }
  }
  public getFollowingDetails() {
    this.userService
      .fetchSearchedUserDetails(this.data.userId)
      .subscribe((res: any) => {
        this.followingId = res.userDetails.following;
      });
  }
  public fetchActiveUserDetails() {
    this.userService.fetchSearchedUserDetails(this.activeUser).subscribe({
      next: (res: any) => {
        this.activeUserDetail = res.userDetails;
      },
    });
  }
  public close() {
    this.dialog.closeAll();
  }
  public remove(data: any) {
    const object = {
      activeUser: environment.userId,
      followUser: data,
    };
    this.followService.removeFollower(object).subscribe({
      next: () => {
        this.ngOnInit();
      },
    });
  }
  public follow(data: any) {
    const object = {
      activeUser: environment.userId,
      followUser: data,
    };
    this.followService.followUser(object).subscribe({
      next: () => {
        this.ngOnInit();
      },
    });
  }
}
