import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupComponent } from './signup.component';
import { UserService } from 'src/app/service/user.service';
import { of, throwError } from 'rxjs';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let userService: UserService;
  let notification: MatSnackBar;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        {
          provide: UserService,
          useValue: {
            newUser: () => of(null) // Mock the newUser method to return a successful response
          }
        },
        {
          provide: MatSnackBar,
          useValue: {
            open: () => { } // Mock the open method of MatSnackBar
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: () => { } // Mock the navigate method of Router
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    notification = TestBed.inject(MatSnackBar);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the signupForm with proper form controls', () => {
    expect(component.signupForm.get('email')).toBeTruthy();
    expect(component.signupForm.get('userName')).toBeTruthy();
    expect(component.signupForm.get('password')).toBeTruthy();
  });

  it('should call newUser method and navigate to signin on successful form submission', () => {
    spyOn(userService, 'newUser').and.returnValue(of({})); // Mock the newUser method to return a successful response
    spyOn(notification, 'open');
    spyOn(router, 'navigate');

    component.signupForm.setValue({
      email: 'test@example.com',
      userName: 'testuser',
      password: 'Test@123'
    });
    component.OnSubmit();

    expect(userService.newUser).toHaveBeenCalledWith(component.signupForm.value);
    expect(notification.open).toHaveBeenCalledWith('Signup success', 'Close', { duration: 2000 });
    expect(router.navigate).toHaveBeenCalledWith(['auth/signin']);
  });

  it('should display error message on form submission error', () => {
    spyOn(userService, 'newUser').and.returnValue(throwError('Error')); // Mock the newUser method to throw an error
    spyOn(notification, 'open');

    component.signupForm.setValue({
      email: 'test@example.com',
      userName: 'testuser',
      password: 'Test@123'
    });
    component.OnSubmit();

   expect(userService.newUser).toHaveBeenCalledWith(component.signupForm.value);
  expect(notification.open).toHaveBeenCalledWith('Signup success', 'Close', { duration: 2000 });
  expect(router.navigate).toHaveBeenCalledWith(['auth/signin']);
  });

});
