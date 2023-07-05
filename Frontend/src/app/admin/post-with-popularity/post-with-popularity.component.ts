import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/app/environments/environment';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-post-with-popularity',
  templateUrl: './post-with-popularity.component.html',
  styleUrls: ['./post-with-popularity.component.css'],
})
export class PostWithPopularityComponent implements OnInit {
  public popular: Array<any> = [];
  public postPic = environment.imgRetrivalPath;
  constructor(private homeService: HomeService,private matSnackBar:MatSnackBar) {}

  ngOnInit(): void {
    this.topPost();
  }
  topPost() {
    this.homeService.popularPost().subscribe({
      next: (res: any) => {
        this.popular = res.morePost;
        this.popular.map((a: any) => {
          a.videoFile = a.fileName.split('.').pop() === 'mp4';
        });
      },
      error:(err)=>{
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      }
    });
  }
}
