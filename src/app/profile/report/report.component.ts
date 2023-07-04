import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { environment } from 'src/app/environments/environment';
import { HomeService } from 'src/app/service/home.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  public showSuccess: Boolean = false;
  public showDelete: Boolean = false || this.data.delete;
  public showDeleteNext: Boolean = false;
  public showAgeSuccess: Boolean = false;
  public showUserReports: Boolean = false;
  public aboutReportingPost: Boolean = false;
  public showPretendingSomeone: Boolean = false;
  public accountReportingPage: Boolean = false;
  public showMain: Boolean = true;
  public user: Boolean = false;
  public post: Boolean = false;
  public userDetails: any;
  public postDetails: any;
  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    public homeService: HomeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit() {
    this.fetchUserDetails();
  }
  public fetchUserDetails() {
    this.userService.getFollowersDetails(this.data.userId).subscribe({
      next: (res: any) => {
        this.userDetails = res.userDetails;
      },
    });
    this.homeService.fetchIndividualPost(this.data.postId).subscribe({
      next: (res: any) => {
        this.postDetails = res.post;
      },
    });
  }

  postReports = [
    "It's spam",
    'Nudity or sexual activity',
    'Hate speech or symbols',
    'Violence or dangerous organisations',
    'Sale of illegal or regulated goods',
    'Bullying or harashment',
    'Intellectual property violation',
    'Sucide or self-injury',
    'Eating disorders',
    'Scam or fraud',
    'False information',
    "I just don't like it",
  ];
  userReports = [
    "It's spam",
    "I just don't like it",
    'Sucide or self-injury or eating disorders',
    'Sale of illegal or regulated goods',
    'Nudity or sexual activity',
    'Hate speech or symbols',
    'Violence or dangerous organisations',
    'Bullying or harashment',
    'Intellectual property violation',
    'Scam or fraud',
    'False information',
  ];
  public close() {
    this.dialog.closeAll();
  }
  public reportPost(data: any) {
    this.postDetails.reports.push({
      reportedUserId: environment.userId,
      reportType: data,
    });
    this.homeService
      .updateIndividualPost(this.data.postId, this.postDetails)
      .subscribe({
        next: (res: any) => {
          this.showSuccess = true;
        },
        error: (error: any) => {},
      });
  }
  public reportAccount(data: any) {
    this.userDetails.reportsUser.push({
      reportedUserId: environment.userId,
      reportType: data,
    });
    this.userService
      .updateUserDetails(this.data.userId, this.userDetails)
      .subscribe({
        next: (res: any) => {
          this.showSuccess = true;
        },
        error: (err: any) => {},
      });
  }
  public reportAgeAccount(data: any) {
    this.userDetails.reportsUser.push({
      reportedUserId: environment.userId,
      reportType: data,
    });
    this.userService
      .updateUserDetails(this.data.userId, this.userDetails)
      .subscribe({
        next: () => {
          this.showAgeSuccess = true;
        },
      });
  }
  public openAboutReportingPost() {
    this.aboutReportingPost = true;
  }
  public openAccountReportingPage() {
    this.accountReportingPage = true;
  }
  public openUserReports() {
    this.showUserReports = true;
  }
  public prentendingSomeone() {
    this.showPretendingSomeone = true;
  }
  public openReports() {
    this.showMain = false;
    this.user = this.data.user;
    this.post = this.data.post;
  }
  public openDeletePost(){
    this.showMain=false;
    this.showDeleteNext=true;
  }
  public deletePost(){
    this.homeService.deletePost(this.data.postId).subscribe({
      next:()=>{
        this.dialog.closeAll()
      }
    })
  }
}
