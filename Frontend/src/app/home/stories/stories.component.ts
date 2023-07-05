import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostStoryComponent } from './post-story/post-story.component';
import { ViewStoryComponent } from './view-story/view-story.component';
import { StoriesService } from 'src/app/service/stories.service';
import { HomeService } from 'src/app/service/home.service';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent {
  constructor(
    public dialog: MatDialog,
    public storyService: StoriesService,
    public homeService: HomeService
  ) {}
  public imgRetrivalPath: string = 'http://localhost:3000/story/';
  public profileRetrival=environment.profilePicRetrival;
  public userDp!:string;
  public storyDetails: any;
  public viewed = false;

  ngOnInit() {
    this.fetchUserFollowingStory();
    this.userDp=sessionStorage.getItem("userDp")!;

  }
  openCreateStoryComponent(): void {
    const dialogRef = this.dialog.open(PostStoryComponent, {
      panelClass: 'center-dialog',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.fetchUserFollowingStory()
    });
  }

  openViewStoryComponent(data: any) {
    data.viewed= true;
    this.dialog.open(ViewStoryComponent, {
      data: {
        story: data,
      },
    });
    const length=data.file.length;
    setTimeout(() => {
      this.dialog.closeAll();
    }, 5000*length);
  }

  private fetchUserFollowingStory() {
    this.storyService.viewStory().subscribe({
      next: (data: any) => {
        this.storyDetails = data.fetchedStory;
      },
    });
  }

}
