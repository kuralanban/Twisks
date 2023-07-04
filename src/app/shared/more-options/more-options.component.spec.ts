import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MoreOptionsComponent } from './more-options.component';
import { UserService } from 'src/app/service/user.service';
import { of } from 'rxjs';

describe('MoreOptionsComponent', () => {
  let component: MoreOptionsComponent;
  let fixture: ComponentFixture<MoreOptionsComponent>;
  const mockMatDialog = jasmine.createSpyObj('MatDialog', ['closeAll']);
  const mockMatSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const mockUserService = jasmine.createSpyObj('UserService', ['logout']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreOptionsComponent],
      providers: [
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatSnackBar, useValue: mockMatSnackBar },
        { provide: Router, useValue: mockRouter },
        { provide: UserService, useValue: mockUserService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dark mode', () => {
    component.isToggled = false;
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'removeItem');
    spyOn(window.location, 'reload');

    component.darkMode();

    expect(component.isToggled).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'true');
    expect(window.location.reload).toHaveBeenCalled();

    component.darkMode();

    expect(component.isToggled).toBe(false);
    expect(localStorage.removeItem).toHaveBeenCalledWith('darkMode');
    expect(window.location.reload).toHaveBeenCalled();
  });

  it('should logout successfully', () => {
    spyOn(component.dialog, 'closeAll');
    spyOn(component.route, 'navigateByUrl');
    spyOn(component.notification, 'open');
    mockUserService.logout.and.returnValue(of(null));

    component.logout();

    expect(mockUserService.logout).toHaveBeenCalled();
    expect(component.notification.open).toHaveBeenCalledWith('Logout successfull', 'Close', {
      duration: 2000,
    });
    expect(localStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(component.dialog.closeAll).toHaveBeenCalled();
    expect(component.route.navigateByUrl).toHaveBeenCalledWith('/auth/signin');
  });

  it('should route to saved posts', () => {
    spyOn(component.route, 'navigateByUrl');
    spyOn(component.dialog, 'closeAll');

    component.routeToSavedPosts();

    expect(component.route.navigateByUrl).toHaveBeenCalledWith('home/savedPosts');
    expect(component.dialog.closeAll).toHaveBeenCalled();
  });
});
