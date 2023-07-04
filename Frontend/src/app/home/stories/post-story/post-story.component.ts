import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StoriesService } from '../../../service/stories.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-story',
  templateUrl: './post-story.component.html',
  styleUrls: ['./post-story.component.css'],
})
export class PostStoryComponent implements OnInit {
  public selectedImage: any;
  public fileName: any;
  public formData = new FormData();
  public userId: any;
  public username: any;

  constructor(
    private storyService: StoriesService,
    public dialogRef: MatDialog,
    private noti:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchUserProfileDetails();
  }

  private fetchUserProfileDetails() {
    this.storyService.uploadStoryDetails().subscribe({
      next: (data: any) => {
        this.userId = data.userDetails._id;
        this.username = data.userDetails.name;
      },
      error: () => {
        (' Error in fetching User data  Homepage ');
      },
    });
  }

  public onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileName = file.name;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
    };
    reader.readAsDataURL(file);
    this.formData.append('file', event.target.files[0]);
  }

  public discardStory() {
    this.selectedImage = null;
  }

  public onSharingTheStory() {
    this.formData.append('userId', this.userId);
    this.formData.append('username', this.username);
    this.storyService.createNewStory(this.formData).subscribe({
      next: (data: any) => {
      },
      error: (err) => {
        this.noti.open('Error in posting story ');
      },
    });
    this.dialogRef.closeAll();
  }


}
