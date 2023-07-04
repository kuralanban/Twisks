import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  showOtp = true;
  showPassword = false;
  showFail = false;
  showFailed = false;
  showOtpFail = false;
  public emailForm!: FormGroup;
  public passwordForm!: FormGroup;
  email: any;
  otp: any;
  constructor(
    public userService: UserService,
    private formBuilder: FormBuilder,
    public router: Router,
    private notification: MatSnackBar
  ) {}

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      otp: [''],
    });
    this.passwordForm = this.formBuilder.group({
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+'),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+'),
        ],
      ],
    });
  }
  public sendOtp() {
    this.userService
      .findUserDetails(this.emailForm.value.email)
      .subscribe((res: any) => {
        if (res.message == true) {
          this.showFailed = false;
          this.userService.generateOtp(this.emailForm.value).subscribe({
            next: (res: any) => {
              this.showOtp = false;
            },
            error: (err: any) => {
            },
          });
        } else {
          this.showFailed = true;
          this.notification.open('User not found', 'Close', { duration: 2000 });
        }
      });
  }
  public verifyOtp() {
    this.userService.verifyOtp(this.emailForm.value).subscribe({
      next: (res: any) => {
        if (res.message == true) {
          this.notification.open('Otp verified succesfully', 'Close', {
            duration: 2000,
          });
          this.showPassword = true;
          this.showOtpFail = false;
        } else {
          this.showOtpFail = true;
        }
      },
      error: (err: any) => {
        this.notification.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }
  public changePassword() {
    if (
      this.passwordForm.value.newPassword ==
      this.passwordForm.value.confirmPassword
    ) {
      this.userService
        .updatePassword(this.emailForm.value.email, this.passwordForm.value)
        .subscribe({
          next: (res: any) => {
            this.notification.open('Password updated successfully', 'Close', {
              duration: 2000,
            });
            this.router.navigate(['/auth/signin']);
          },
          error:(err)=>{
            this.notification.open('Something went wrong !', 'Close', {
              duration: 2000,
            });
          }
        });
    } else {
      this.showFail = true;
    }
  }
}
