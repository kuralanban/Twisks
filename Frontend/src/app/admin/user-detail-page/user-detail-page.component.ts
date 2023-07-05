import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HomeService } from 'src/app/service/home.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css'],
})
export class UserDetailPageComponent implements OnInit {
  collection: any;
  id: any;
  individualDetail: Array<any> = [];
  public postPic = environment.imgRetrivalPath;
  public userDp = environment.profilePicRetrival;
  public isVideoFile: Boolean = false;

  constructor(
    public homeService: HomeService,
    private route: ActivatedRoute,
    private userService: UserService,
    private matSnackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.fromParams();
  }

  fromParams() {
    this.id = this.route.snapshot.params['id'];
    this.fetchPost();
    this.individualUserDetail();
  }
  fetchPost() {
    this.homeService.fetchUserPost(this.id).subscribe({
      next: (res: any) => {
        this.collection = res.post;
        this.collection.map((a: any) => {
          a.videoFile = a.fileName.split('.').pop() === 'mp4';
        });
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }

  individualUserDetail() {
    this.userService.individualUser(this.id).subscribe({
      next: (res: any) => {
        this.individualDetail = res.detailOfUser;
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }
}
