import { TestBed, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';
import {  SocialAuthService } from '@abacritt/angularx-social-login';
import { SigninComponent } from './signin.component';
import { UserService } from 'src/app/service/user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let userService :UserService;
  let notification: MatSnackBar;
  let formBuilder: FormBuilder;
  let authService: SocialAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SigninComponent],
      providers: [HttpClient , HttpHandler,SocialAuthService,FormBuilder,MatSnackBar,
        { provide: UserService, useValue: { loginGoogle: () => {} } },
        { provide: MatSnackBar, useValue: { open: () => {} } },
        { provide: SocialAuthService, useValue: { authState: of(null) } },
      ],
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    notification = TestBed.inject(MatSnackBar);
    formBuilder = TestBed.inject(FormBuilder);
    authService = TestBed.inject(SocialAuthService);
  });

  it('should call loginGoogle and set session/local storage on successful login', fakeAsync(() => {
    const mockResponse = {
      userName: 'testUser',
      token: 'testToken',
      role: 'user',
      userId: '123'
    };

    spyOn(userService, 'loginGoogle').and.returnValue(of(mockResponse));
    spyOn(notification, 'open');
    spyOn(sessionStorage, 'setItem');
    spyOn(localStorage, 'setItem');
    spyOn(component.router, 'navigate');

    component.loginGoogle();

    expect(userService.loginGoogle).toHaveBeenCalledWith(component.user);
    expect(notification.open).toHaveBeenCalledWith('Login successfull', 'Close', {
      duration: 2000,
    });
    expect(sessionStorage.setItem).toHaveBeenCalledWith('username', mockResponse.userName);
    expect(localStorage.setItem).toHaveBeenCalledWith('token', mockResponse.token);
    expect(sessionStorage.setItem).toHaveBeenCalledWith('role', mockResponse.role);
    expect(sessionStorage.setItem).toHaveBeenCalledWith('userId', mockResponse.userId);
    expect(component.router.navigate).toHaveBeenCalledWith(['/home']);
  }));

  it('should handle error during login', fakeAsync(() => {
    const mockError = { message: 'Login failed' };

    spyOn(userService, 'loginGoogle').and.returnValue(throwError(mockError));

    component.loginGoogle();

    expect(userService.loginGoogle).toHaveBeenCalledWith(component.user);
  }));

  it('should initialize the form and subscribe to authState', () => {
    spyOn(authService.authState, 'subscribe');
    spyOn(component, 'loginGoogle');

    component.ngOnInit();

    expect(component.signInForm).toBeDefined();
    expect(component.signInForm.controls['email'].value).toBe('');
    expect(component.signInForm.controls['password'].value).toBe('');
    expect(component.signInForm.controls['email'].validator).toContain(Validators.required);
    expect(component.signInForm.controls['email'].validator).toContain(Validators.email);
    expect(component.signInForm.controls['password'].validator).toContain(Validators.required);
    expect(component.signInForm.controls['password'].validator).toContain(Validators.minLength(8));

    expect(authService.authState.subscribe).toHaveBeenCalled();
    expect(component.loginGoogle).toHaveBeenCalled();
  });
});
