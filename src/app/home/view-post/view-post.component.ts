import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  inject
} from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { WebsocketService } from 'src/app/service/websocket.service';
import { environment } from 'src/app/environments/environment';
import { ReportComponent } from 'src/app/profile/report/report.component';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  public commentDetails: Array<any> = [];
  public imgRetrivalPath: string = environment.imgRetrivalPath;
  public postId: string = this.data._id;
  public postUserId: string = this.data.userId;
  public postImage: string = this.data.fileName;
  public username: string = sessionStorage.getItem('username')!;
  public postDetails: Array<any> = [];
  public profileRetrival: string = environment.profilePicRetrival;
  public commentForm = this.fb.group({
    comment: new FormControl('')
  });

  constructor(
    public homeService: HomeService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public webSocket: WebsocketService,
    private matDialog:MatDialog
  ) {}

  ngOnInit(): void {
    // Emits to get Post Comments
    this.onGettingInitalComments();
    // Retrive comments Initially
    this.getInitalComments();
    // Show Comment Notification
    this.getComments();
  }

  public getComments() {
    this.webSocket.onPostGetComment().subscribe({
      next: (data: Array<Object>) => {
        this.commentDetails = data;
        this.commentForm.reset();
      },
      error: () => {}
    });
  }
  public onSubmitingComment() {
    this.webSocket.onPostComment(
      this.postId,
      this.postUserId,
      sessionStorage.getItem('userId')!,
      this.commentForm.value.comment,
      this.username,
      this.postImage
    );
  }
  public onGettingInitalComments() {
    this.webSocket.retriveInitalComments(this.postId);
  }
  public getInitalComments() {
    this.webSocket.onViewPostComments().subscribe({
      next: (data: Array<Object>) => {
        this.commentDetails = data;
      },
      error: () => {}
    });
  }
  public getTimeTaken(postTime: string): string {
    return this.homeService.calculateCurrentTime(postTime);
   }

    public openMoreOption(data:any){
      this.matDialog
        .open(ReportComponent, {
          data: {
            user: false,
            post:true,
            delete:true,
            postId:data._id
          },
        })
        .afterClosed()
        .subscribe(() => {
          this.matDialog.closeAll()
        });
    }
  }

