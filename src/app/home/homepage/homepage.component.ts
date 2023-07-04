import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/service/home.service';
import { WebsocketService } from 'src/app/service/websocket.service';
import { ViewPostComponent } from '../view-post/view-post.component';
import { environment } from 'src/app/environments/environment';
import { ReportComponent } from 'src/app/profile/report/report.component';
import { HMemoriesComponent } from '../h-memories/h-memories.component';
import { LoadingService } from '../../service/loading/loading.service';


import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(
    public homeService: HomeService,
    private webSocket: WebsocketService,
    private matDialog: MatDialog,
    private notification: MatSnackBar,
    private loadingService: LoadingService
  ) {}

  public username: string='';
  public postDetails: Array<any> = [];
  public imgRetrivalPath: string = environment.imgRetrivalPath;
  public isVideoFile: Boolean = false;
  public commentDetails: Array<object> = [];
  public memoriesData: Array<any> = [];
  public profileRetrival = environment.profilePicRetrival;
  public userDp: string =environment.profilePicRetrival + sessionStorage.getItem('userDp')!;
  public isLoading: boolean = false;

  ngOnInit() {
    this.loadingService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.fetchUserFollowingPosts();
    this.fetchUserProfileDetails();
    this.webSocket.connectSockets();
    this.showLikesOfEachPost();
    this.showSavedPosts();
    this.likeNotification();
    this.commentNotification();
    this.userMemories();
  }


  private fetchUserProfileDetails() {
    this.homeService.userDetailService().subscribe({
      next: (data: any) => {
        this.username = data.userDetails.userName;
        sessionStorage.setItem('userDp', data.userDetails.profilePhoto);
      },
      error: () => {
       this.notification.open(`Sorry,Can't Fetch your data`);
      }
    });
  }

  public fetchUserFollowingPosts() {


    this.homeService.userPostsService().subscribe({
      next: (data: any) => {
        this.postDetails = data.fetchedPosts;
        this.postDetails.map((a: any) => {
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
      },
      error: errorMessage => {
        this.notification.open('Network error !', 'Close', { duration: 3000 });
      }
    });
  }

  public likePost(post: any): void {
    this.webSocket.likePost(
      environment.userId!,
      post._id,
      post.userId,
      environment.username!,
      post.fileName
    );
    this.fetchUserFollowingPosts();
  }

  public showLikesOfEachPost() {
    this.webSocket.onPostLiked().subscribe((data: any) => {
      const index = this.postDetails.findIndex(
        (post: any) => post._id === data._id
      );

      if (index !== -1) {
        this.postDetails[index].likes = data.likes;
      }
    });
  }

  public viewPost(data: Object) {
    this.matDialog
      .open(ViewPostComponent, { data: data })
      .afterClosed()
      .subscribe();
  }
  public onSavingPost(user: any) {
    this.webSocket.onSavingPost({
      postId: user._id,
      userId: environment.userId
    });
    const config = {
      duration: 3000, // Duration in milliseconds
      verticalPosition: 'top', // Vertical position of the notification
      panelClass: ['custom-snackbar'], // Custom CSS class for styling
      data: { image: `${user.fileName}` } // Additional data, in this case, the path to the image
    };
    this.notification.open('')
    this.fetchUserFollowingPosts();
  }

  public showSavedPosts() {
    this.webSocket.onRetrivingSavedPosts().subscribe({
      next: data => {
        const index = this.postDetails.findIndex(
          (post: any) => post._id === data._id
        );
        if (index !== -1) {
          this.postDetails[index].savedby = data.savedBy;
        }
      },
      error: errorMessage => {
        this.notification.open('Network error !', 'Close', { duration: 3000 });
      }
    });
  }
  public getTimeTaken(postTime: string): string {
    return this.homeService.calculateCurrentTime(postTime);
  }

  public commentNotification() {
    this.webSocket.noticeCheck().subscribe({
      next: data => {
      },
      error: () => {}
    });
  }
  public likeNotification() {
    this.webSocket.LikenoticeCheck().subscribe((data: any) => {
      // Handle the received notification data
      this.webSocket.onlikeNotifications(data);
    });
  }

  public openMoreOption(data: any) {
    this.matDialog
      .open(ReportComponent, {
        data: {
          user: false,
          post: true,
          postId: data
        }
      })
      .afterClosed()
      .subscribe(() => {});
  }

  public userMemories() {
    this.homeService.fetchUserMemories().subscribe({
      next: (data: any) => {
        this.memoriesData = data.fetchMemories;
      },
      error: () => {
        this.notification.open('Sorry !,Cant fetch memories');
      }
    });
  }

  public onClickMemories(data: any) {
    this.matDialog.open(HMemoriesComponent, {
      data: {
        memories: data
      }
    });
    setTimeout(() => {
      this.matDialog.closeAll();
    }, 8000);
  }
}
