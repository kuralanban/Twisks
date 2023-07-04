import { LoginGuard } from './login.guard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

describe('LoginGuard', () => {
  let guard: LoginGuard;
  let mockNotificationService: MatSnackBar;
  let mockRouter: Router;

  beforeEach(() => {
    mockNotificationService = jasmine.createSpyObj(['open']);
    mockRouter = jasmine.createSpyObj(['navigate']);

    guard = new LoginGuard(mockRouter, mockNotificationService);
  });

  it('should allow access if token is null', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = guard.canActivate();

    expect(result).toBeTrue();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
    expect(mockNotificationService.open).not.toHaveBeenCalled();
  });

  it('should deny access and redirect to home if token exists', () => {
    spyOn(localStorage, 'getItem').and.returnValue('your-auth-token');

    const result = guard.canActivate();

    expect(result).toBeFalse();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
    expect(mockNotificationService.open).toHaveBeenCalledWith(
      'Already logged in please logout before continue',
      'Close',
      { duration: 2000 }
    );
  });
});
