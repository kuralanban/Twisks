import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-more-options',
  templateUrl: './more-options.component.html',
  styleUrls: ['./more-options.component.css']
})
export class MoreOptionsComponent implements OnInit {
  public isToggled!: boolean;

  constructor(
    public route: Router,
    public dialog: MatDialog,
    public notification: MatSnackBar,
    private userService: UserService
  ) {}


  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('darkMode')!)) {
      this.isToggled = true;
    }
  }
  public darkMode() {
    this.isToggled = !this.isToggled;
    if (this.isToggled == true) {
      localStorage.setItem('darkMode', `${this.isToggled}`);
    } else if (!this.isToggled) {
      localStorage.removeItem('darkMode');
    }
    window.location.reload();
  }

  public logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.notification.open('Logout successfull', 'Close', {
          duration: 2000
        });
        localStorage.clear();
        sessionStorage.clear();
        this.dialog.closeAll();
        this.route.navigate(['/auth/signin']);
      },
      error: err => {
      this.notification.open(err.message);
      }
    });
  }
  public routeToSavedPosts() {
    this.route.navigateByUrl('home/savedPosts');
    this.dialog.closeAll();
  }
}
