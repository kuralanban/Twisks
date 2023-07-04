import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExploreService } from 'src/app/service/explore.service';
import { HomeService } from 'src/app/service/home.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/app/environments/environment';


@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent {
   constructor(
    public exploreService: ExploreService,
    public homeService: HomeService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:any

  ) {}
 public explore: any;
  public postDetails: any;
  public imageUrl:any
  public video:any;
  public retrival=environment.imgRetrivalPath
  ngOnInit() {
    this.imageUrl= this.data.imageUrl;
    this.video=this.data.videoFile
  }

}
