import { TestBed } from '@angular/core/testing';
import { AdminGuard } from './admin.guard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let mockNotificationService: MatSnackBar;
  let mockRouter: Router;

  beforeEach(() => {
    mockNotificationService = jasmine.createSpyObj(['open']);
    mockRouter = jasmine.createSpyObj(['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        { provide: MatSnackBar, useValue: mockNotificationService },
        { provide: Router, useValue: mockRouter },
      ],
    });

    guard = TestBed.inject(AdminGuard);
  });

  it('should allow access for admin role', () => {
    spyOn(localStorage, 'getItem').and.returnValue('token');
    spyOn(jwtDecode, 'default').and.returnValue({ role: 'admin' });

    const result = guard.canActivate();

    expect(result).toBeTrue();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
    expect(mockNotificationService.open).not.toHaveBeenCalled();
  });

  it('should deny access and redirect to home for non-admin role', () => {
    spyOn(localStorage, 'getItem').and.returnValue('token');
    spyOn(jwtDecode, 'default').and.returnValue({ role: 'user' });

    const result = guard.canActivate();

    expect(result).toBeFalse();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
    expect(mockNotificationService.open).toHaveBeenCalledWith(
      'Access denied',
      'Close',
      { duration: 2000 }
    );
  });

  it('should deny access and redirect to signin for missing token', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = guard.canActivate();

    expect(result).toBeFalse();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/auth/signin']);
    expect(mockNotificationService.open).toHaveBeenCalledWith(
      'Access denied',
      'Close',
      { duration: 2000 }
    );
  });
});
