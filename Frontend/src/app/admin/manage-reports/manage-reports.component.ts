import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HomeService } from 'src/app/service/home.service';
import { UserService } from 'src/app/service/user.service';
import { UnblockComponent } from '../unblock/unblock.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-reports',
  templateUrl: './manage-reports.component.html',
  styleUrls: ['./manage-reports.component.css'],
})
export class ManageReportsComponent implements OnInit {
  public report: Array<any> = [];
  public post: Array<any> = [];
  public show = false;
  public unblocked: Array<any> = [];
  public isReportedClicked = false;
  public clickedElement: string = '';

  public reportIndex: any;
  public profilePicRetrival = environment.profilePicRetrival;
  constructor(
    private userService: UserService,
    private router: Router,
    private homeService: HomeService,
    private matDialog: MatDialog,
    private matSnackBar:MatSnackBar
  ) {}
  ngOnInit(): void {
    this.reportUser('reportedAccount');
  }

  reportUser(element: string) {
    this.clickedElement = element;
    this.show = true;
    this.userService.reportsForUser().subscribe({
      next: (res: any) => {
        this.report = res.allUsers;
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }

  id(data: any) {
    this.router.navigate(['/admin/report', data]);
  }

  reportPost(element: string) {
    this.clickedElement = element;
    this.show = false;
    this.homeService.postGotReported().subscribe({
      next: (res: any) => {
        this.post = res.reportedPost;
      },
      error:(err)=>{
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      }
    });
  }

  block(data: any) {
    this.matDialog
      .open(UnblockComponent, {
        data: {
          show: true,
          user: data,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.reportUser('reportedAccount');
      });
  }

  blocked(data: any) {
    this.matDialog
      .open(UnblockComponent, {
        data: {
          show: false,
          user: data,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.reportUser('reportedAccount');
      });
  }

  blockPost(data: any) {
    this.matDialog
      .open(UnblockComponent, {
        data: {
          display: true,
          post: data,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.reportPost('reportedPost');
      });
  }
  unblockPost(data: any) {
    this.matDialog
      .open(UnblockComponent, {
        data: {
          display: false,
          post: data,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.reportPost('reportedPost');
      });
  }
}
