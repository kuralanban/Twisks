import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilders: FormBuilder,
    private userService: UserService,
    private notification: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilders.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
          ),
        ],
      ],
    });
  }

  OnSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    if (this.signupForm.valid) {
      this.userService.newUser(this.signupForm.value).subscribe({
        next: () => {
          this.notification.open('Signup success', 'Close', { duration: 2000 });
          this.router.navigate(['auth/signin']);
        },
        error: () => {
          this.notification.open('Something went wrong !', 'Close', {
            duration: 2000,
          });
        },
      });
    }
  }
}
