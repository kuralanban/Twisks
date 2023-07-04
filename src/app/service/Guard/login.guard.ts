import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  private token: any;
  constructor(private router: Router, private notification: MatSnackBar) {}

  canActivate() {
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      this.notification.open(
        'Already logged in please logout before continue',
        'Close',
        { duration: 2000 }
      );
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
