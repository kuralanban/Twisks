import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HomeService } from 'src/app/service/home.service';
import { NotificationService } from 'src/app/service/notification.service';
import { SeoService } from 'src/app/service/seo.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public commentNotifications: Array<any> = [];
  public followerNotification: Array<any> = [];
  public likeNotification: Array<any> = [];
  public imgRetrival: string = environment.imgRetrivalPath;
  public profileRetrival: string = environment.profilePicRetrival;
  public showlikes: boolean = true;
  public showComments: boolean = false;
  public showFollowrequests: boolean = false;

  constructor(
    public notiService: NotificationService,
    public homeService: HomeService,
    private route: ActivatedRoute,
    private seoService: SeoService,
  ) {}

  ngOnInit(): void {
    this.setSeoData();
    this.getAllNotifications();
  }

  private getAllNotifications() {
    this.notiService.fetchnotifications().subscribe({
      next: (data: any) => {
        this.commentNotifications = data.userNotification.comments.map(
          (a: any) => {
            a.videoFile = a.postImage.split('.').pop() === 'mp4';
            return a;
          }
        );
        this.followerNotification = data.userNotification.followerNotification;

        this.likeNotification = data.userNotification.likeNotification.map(
          (a: any) => {
            a.videoFile = a.likedPostImage.split('.').pop() === 'mp4';
            return a;
          }
        );
      },
      error: () => {}
    });
  }

  public likeToggle() {
    this.showlikes = true;
    this.showComments = false;
    this.showFollowrequests = false;
  }
  public commentToggle() {
    this.showComments = true;
    this.showlikes = false;
    this.showFollowrequests = false;
  }
  public FollowRequestToggle() {
    this.showFollowrequests = true;
    this.showComments = false;
    this.showlikes = false;
  }
  public setSeoData() {
    const routeData = this.route.snapshot.data;
    const title = routeData['title'] || 'Twisks | Home'; // Set a default title if necessary
    const description = routeData['description'] || 'Welcome to Twisks'; // Set a default description if necessary
    this.seoService.setSeoData(title, description);
  }

}
