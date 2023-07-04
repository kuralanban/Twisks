import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AccessGuard {
  private token: any;

  constructor(private notification: MatSnackBar, private router: Router) {}
  canActivate() {
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      this.token = jwtDecode(this.token);
      if (this.token.role == 'user') {
        return true;
      } else if (this.token.role != 'user') {
        this.notification.open('Access denied', 'Close', { duration: 2000 });
        this.router.navigate(['/admin/statistic']);
        return false;
      } else {
        this.notification.open('Please login before continue', 'Close', {
          duration: 2000,
        });
        this.router.navigate(['/auth/signin']);
        return false;
      }
    } else {
      this.notification.open('Please login before continue', 'Close', {
        duration: 2000,
      });
      this.router.navigate(['/auth/signin']);
      return false;
    }
  }
}
