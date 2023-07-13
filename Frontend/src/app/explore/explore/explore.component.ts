import { Component } from '@angular/core';
import { ExploreService } from 'src/app/service/explore.service';
import { HomeService } from 'src/app/service/home.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { ViewPostComponent } from 'src/app/home/view-post/view-post.component';
import { WebsocketService } from 'src/app/service/websocket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/service/seo.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent {
  constructor(
    public exploreService: ExploreService,
    public homeService: HomeService,
    public dialog: MatDialog,
    private websocket:WebsocketService,
    private notification:MatSnackBar,
    private router: ActivatedRoute,
    private seoService: SeoService,
  ) {}

  public explore: any;
  public postDetails: any;
    public imgRetrival: string = 'http://localhost:3000/uploads/';


  ngOnInit() {
    this.setSeoData();
    this.websocket.connectSockets();
    this.exploreDetails();
    this.explore;
  }

   public exploreDetails() {
    this.exploreService.exploreServicePage().subscribe({
      next: (data: any) => {
        this.explore = data.fetchedPosts;
        this.explore.map((a: any) => {
          a.videoFile= a.fileName.split('.').pop()==='mp4'
      })
    },
      error: () => {
        this.notification.open('Something went Wrong')
      },
    });
  }


  public openImageDialog(data:any) {

    this.dialog.open(ViewPostComponent, {
      data: data,
    });
  }
  public setSeoData() {
    const routeData = this.router.snapshot.data;
    const title = routeData['title'] || 'Twisks | Home'; // Set a default title if necessary
    const description = routeData['description'] || 'Welcome to Twisks'; // Set a default description if necessary
    this.seoService.setSeoData(title, description);
  }
}
