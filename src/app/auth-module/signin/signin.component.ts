import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public signInForm!: FormGroup;
  public report: Array<any> = [];
  public reports: Array<any> = [];
  public id: Array<any> = [];
  user: any;
  public daysLeft: Number = 1;
  public show: boolean = false;
  @ViewChild('googleButton') googleButton: any;
  constructor(
    private formbuilder: FormBuilder,
    public router: Router,
    private authService: SocialAuthService,
    public userService: UserService,
    private notification: MatSnackBar
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loginGoogle();

    });
    this.signInForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+'),
        ],
      ],
    });
  }
  public login() {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    } else {
      let jwt = {};

     this.userService.login(this.signInForm.value).subscribe({
        next: (res: any) => {
          if (res.message == false) {
            this.notification.open('User not found', 'Close', {
              duration: 2000,
            });
          } else if (res.password == false) {
            this.notification.open('Invalid password', 'Close', {
              duration: 2000,
            });
          } else if (res.blocked == true) {
            this.show = true;
            const currentTime = new Date();
            const givenTime = new Date(res.blockedAt);

            const timeDiff = currentTime.getTime() - givenTime.getTime();
            const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            this.daysLeft = 7 - daysDiff;

            this.notification.open('User has been blocked', 'Close', {
              duration: 2000,
            });
          } else {
            this.notification.open('Login successfull', 'Close', {
              duration: 2000,
            });
            localStorage.setItem('token', res.token);
            jwt = jwt_decode(res.token);
            sessionStorage.setItem(
              'userDp',
              `${Object.values(jwt)[2]}`
            );
            // localStorage.setItem('role',res.role);
            sessionStorage.setItem('role', res.role);
            sessionStorage.setItem('userId', res.userId);
            sessionStorage.setItem('username', res.userName);
            this.signInForm.reset();
            if (sessionStorage.getItem('role') === 'user') {
              this.router.navigate(['/home']);
            } else if (sessionStorage.getItem('role') === 'admin') {
              this.router.navigate(['/admin/statistic']);
            }
          }
       },
       error:(err)=>{
        this.notification.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
       }
      });
    }
  }

  public loginGoogle() {
    this.userService.loginGoogle(this.user).subscribe({
      next: (res: any) => {
        let jwt = {};
        sessionStorage.setItem('username', res.userName);
        jwt = jwt_decode(res.token);
        sessionStorage.setItem('userDp', JSON.stringify(Object.values(jwt)[2]));
        localStorage.setItem('token', res.token);
        sessionStorage.setItem('role', res.role);
        sessionStorage.setItem('userId', res.userId);
        this.userService.reportsForUser().subscribe({
          next: (res: any) => {
            this.report = res.allUsers;
            const blockedUser = this.report.filter(
              (res: any) => res.blocked == true
            );
            if (blockedUser.length > 0) {
              this.reports = blockedUser.map((user) => user._id);
            } else {
            }
            if (this.reports.includes(sessionStorage.getItem('userId'))) {

            this.notification.open('User has been blocked', 'Close', {
              duration: 2000,
            });
            } else {
              this.notification.open('Login successfull', 'Close', {
                duration: 2000,
              });

              this.router.navigate(['/home']);
            }
          },
          error: (err: any) => {
            this.notification.open('Something went wrong with login , please try again', 'Close', {
              duration: 2000,
            });
          },
        });
      },
      error: (err: any) => {
        this.notification.open('Something went wrong with login , please try again', 'Close', {
          duration: 2000,
        });
      },
    });
  }
}
