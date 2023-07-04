import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreatePostComponent } from 'src/app/home/create-post/create-post.component';
import { MoreOptionsComponent } from '../more-options/more-options.component';
import { environment } from 'src/app/environments/environment';
import { NotificationComponent } from 'src/app/notification/notification/notification.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public show = false;
  public imgRetrival = environment.profilePicRetrival;
  public userDp!: string;
  public userId = sessionStorage.getItem('userId');
  public userRole: any;
  public clickElement!: string;

  constructor(
    public dialog: MatDialog,
    private route: Router,
    private notification: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userDp = sessionStorage.getItem('userDp')!;
    this.userRole = sessionStorage.getItem('role');
    // this.role();
  }

  admin(element: string) {
    this.clickElement = element;
  }

  public openCreatePostComponent(): void {
    const dialogRef = this.dialog.open(CreatePostComponent, {
      panelClass: 'center-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  public openMoreOptionsComponent() {
    const dialogRef = this.dialog.open(MoreOptionsComponent, {
      panelClass: 'center-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  public openNotifications() {
    const dialogRef = this.dialog.open(NotificationComponent, {
      panelClass: 'center-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  public routeToHome() {
    this.route.navigateByUrl('home');
  }
  public routeToNotification() {
    this.route.navigateByUrl('notification');
  }
  public routeToExplore() {
    this.route.navigateByUrl('explore');
  }
  public routeToMessage() {
    this.route.navigateByUrl('message');
  }
  public routeToSearch() {
    this.route.navigateByUrl('search/searchUser');
  }
  public routeToProfile() {
    this.route.navigate([`/profile/home/`,sessionStorage.getItem('userId')]);
  }
  public toggleNotification() {
    this.route.navigateByUrl('/notification');
  }
  public role() {
    if (sessionStorage.getItem('role') === 'admin') {
      this.route.navigateByUrl('/admin/statistic');
      this.show = true;
    } else {
      this.route.navigateByUrl('home');
    }
  }
  public logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.notification.open('Logout successfull', 'Close', {
      duration: 2000
    });
    this.dialog.closeAll();
    this.route.navigate(['/auth/signin']);
    window.location.reload();
  }

}
