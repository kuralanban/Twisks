import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { environment } from 'src/app/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ViewPostComponent } from '../view-post/view-post.component';
import { WebsocketService } from 'src/app/service/websocket.service';
@Component({
  selector: 'app-saved-posts',
  templateUrl: './saved-posts.component.html',
  styleUrls: ['./saved-posts.component.css']
})
export class SavedPostsComponent implements OnInit {
  public imgRetrival = environment.imgRetrivalPath;
  public savedPosts: Array<any> = [];

  constructor(
    public homeService: HomeService,
    public matDialog: MatDialog,
    private webSocket: WebsocketService
  ) {}

  ngOnInit(): void {
    this.webSocket.connectSockets();
    this.RetriveAllSavedPosts();
  }

  private RetriveAllSavedPosts() {
    this.homeService.getAllSavedPosts().subscribe({
      next: (data: any) => {
        this.savedPosts = data.savedPosts;
        this.savedPosts.map((a: any) => {
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
      error: () => {}
    });
  }
  public viewPost(data: Object) {
    this.matDialog
      .open(ViewPostComponent, { data: data })
      .afterClosed()
      .subscribe();
  }
}
