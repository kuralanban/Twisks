import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FollowerComponent } from '../follower/follower.component';
import { FollowingComponent } from '../following/following.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { SwitchAccountComponent } from '../switch-account/switch-account.component';
import { ReportComponent } from '../report/report.component';
import { HomeService } from 'src/app/service/home.service';
import { environment } from 'src/app/environments/environment';
import { ViewPostComponent } from 'src/app/home/view-post/view-post.component';
import { FollowService } from 'src/app/service/follow.service';
import { WebsocketService } from 'src/app/service/websocket.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userDetails: any;
  public userId: any;
  public showFollowing!: boolean;
  public activeUser = sessionStorage.getItem('userId');
  public activeUserDetail: any;
  public imgRetrival = environment.imgRetrivalPath;
  public profilePicRetrival = environment.profilePicRetrival;
  public activeUserPosts: Array<any> = [];

  constructor(
    private dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    public userService: UserService,
    public homeService: HomeService,
    public followService: FollowService,
    private webSocket: WebsocketService
  ) {}
  ngOnInit(): void {
    this.webSocket.connectSockets();
    this.fromParams();
    this.getUserDetails();
    this.fetchActiveUserDetails();
    this.retrievePosts();
  }
  public fromParams() {
    this.userId = this.route.snapshot.params['id'];
  }
  public fetchActiveUserDetails() {
    this.userService.fetchSearchedUserDetails(this.activeUser).subscribe({
      next: (res: any) => {
        this.activeUserDetail = res.userDetails;
      }
    });
  }
  public getUserDetails() {
    this.userService
      .fetchSearchedUserDetails(this.userId)
      .subscribe((res: any) => {
        this.userDetails = res.userDetails;
        this.showFollowing = res.follow;
      });
  }
  public follower(userId: any) {
    this.dialog
      .open(FollowerComponent, {
        data: {
          userId: userId,
        },
        disableClose: true
      })
      .afterClosed()
      .subscribe(() => {
        this.ngOnInit();
      });
  }
  public following(userId: any) {
    this.dialog
      .open(FollowingComponent, {
        data: {
          userId: userId,
        },
        disableClose: true
      })
      .afterClosed()
      .subscribe(() => {
        this.ngOnInit();
      });
  }
  public editProfile() {
    this.router.navigateByUrl('profile/edit-profile');
  }
  public follow(data: any) {
    const object = {
      activeUser: sessionStorage.getItem('userId'),
      followUser: data
    };
    this.followService.followUser(object).subscribe({
      next: () => {
        this.getUserDetails();
      },
    });
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
      .subscribe(() => {
        this.ngOnInit();
      });
  }
  public openMoreOptions(data: any) {
    this.dialog
      .open(ReportComponent, {
        data: {
          user: true,
          post: false,
          userId: data,
        },
        disableClose: true
      })
      .afterClosed()
      .subscribe(() => {});
  }

  public retrievePosts() {
    this.homeService.getUserPosts(this.userId).subscribe({
      next: (data: any) => {
        this.activeUserPosts = data.activeUserPosts;
        this.activeUserPosts.map((a: any) => {
          a.saveStatus = 'bookmark';
          a.liked = a.likedBy.some(
            (likedByObj: any) => likedByObj.userId === environment.userId
          );
          a.saved = a.savedBy.includes(environment.userId);
          a.videoFile = a.fileName.split('.').pop() === 'mp4';

          if (a.liked) {
            a.likeColor = 'red';
            a.likeStatus = 'favorite';
          } else {
            a.likeColor = 'black';
            a.likeStatus = 'favorite_border';
          }
          if (a.saved) {
            a.saveStatus = 'bookmark';
          } else {
            a.saveStatus = 'bookmark_border';
          }
        });
        console.log(this.activeUserPosts);

      },
      error: () => {}
    });
  }
  public viewPost(data: Object) {
    this.dialog
      .open(ViewPostComponent, { data: data })
      .afterClosed()
      .subscribe(()=>{
        this.ngOnInit()
      });
  }
}
