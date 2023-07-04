import { Component, Inject } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.css'],
})
export class ViewStoryComponent {
  public imageData!: string;
  counter: number = 0;
  file: any = [];
  constructor(
    public homeService: HomeService,
    @Inject(MAT_DIALOG_DATA) public storyData: any,
    public dialog: MatDialog
  ) {}
  public imgRetrivalPath: string = 'http://localhost:3000/story/';
  public storyImage: any;
  public creationTime: any;
  ngOnInit() {
    
    this.storyImage = this.storyData.story;
    this.file = this.storyImage.file.slice().reverse(); 
    this.imageData = this.file[this.counter].filename;
    this.creationTime = this.file[this.counter].createdAt;

    setInterval(() => {
      this.counter = (this.counter + 1) % this.file.length; 
      this.imageData = this.file[this.counter].filename; 
      this.creationTime = this.file[this.counter].createdAt;
    }, 5000);
  }
  public getCurrentTime(createtAt: any) {
    return this.homeService.calculateCurrentTime(createtAt);
  }
  public back() {
    this.counter = this.counter - 1;
    this.imageData = this.file[this.counter].filename; 
    this.creationTime = this.file[this.counter].createdAt;
  }
  public forward() {
    this.counter = this.counter + 1;
    this.imageData = this.file[this.counter].filename; 
    this.creationTime = this.file[this.counter].createdAt;
  }
}