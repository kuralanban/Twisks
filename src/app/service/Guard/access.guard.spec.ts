import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccessGuard } from './access.guard';
import * as jwtDecode from 'jwt-decode';

describe('AccessGuard', () => {
  let guard: AccessGuard;
  let snackBar: MatSnackBar;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccessGuard,
        { provide: MatSnackBar, useValue: { open: () => {} } },
        { provide: Router, useValue: { navigate: () => {} } },
      ],
    });

    guard = TestBed.inject(AccessGuard);
    snackBar = TestBed.inject(MatSnackBar);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access for user role', () => {
    spyOn(localStorage, 'getItem').and.returnValue('valid_token');
    spyOn(jwtDecode, 'default').and.returnValue({ role: 'user' });

    const canActivate = guard.canActivate();

    expect(canActivate).toBe(true);
    expect(localStorage.getItem).toHaveBeenCalledWith('token');
    expect(jwtDecode.default).toHaveBeenCalledWith('valid_token');
  });

  it('should deny access for non-user roles and redirect to admin statistic', () => {
    spyOn(localStorage, 'getItem').and.returnValue('valid_token');
    spyOn(jwtDecode, 'default').and.returnValue({ role: 'admin' });
    spyOn(snackBar, 'open');
    spyOn(router, 'navigate');

    const canActivate = guard.canActivate();

    expect(canActivate).toBe(false);
    expect(localStorage.getItem).toHaveBeenCalledWith('token');
    expect(jwtDecode.default).toHaveBeenCalledWith('valid_token');
    expect(snackBar.open).toHaveBeenCalledWith('Access denied', 'Close', { duration: 2000 });
    expect(router.navigate).toHaveBeenCalledWith(['/admin/statistic']);
  });

  it('should redirect to signin for invalid token', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(snackBar, 'open');
    spyOn(router, 'navigate');

    const canActivate = guard.canActivate();

    expect(canActivate).toBe(false);
    expect(localStorage.getItem).toHaveBeenCalledWith('token');
    expect(snackBar.open).toHaveBeenCalledWith('Please login before continue', 'Close', { duration: 2000 });
    expect(router.navigate).toHaveBeenCalledWith(['/auth/signin']);
  });
});
