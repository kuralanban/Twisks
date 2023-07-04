import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavbarComponent } from './navbar.component';
import { CreatePostComponent } from 'src/app/home/create-post/create-post.component';
import { MoreOptionsComponent } from '../more-options/more-options.component';
import { NotificationComponent } from 'src/app/notification/notification/notification.component';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  const mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const mockMatSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
  const mockWindow = jasmine.createSpyObj('window', ['location']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: Router, useValue: mockRouter },
        { provide: MatSnackBar, useValue: mockMatSnackBar },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open CreatePostComponent dialog', () => {
    const dialogRef = { afterClosed: () => of() };
    mockMatDialog.open.and.returnValue(dialogRef);

    component.openCreatePostComponent();

    expect(mockMatDialog.open).toHaveBeenCalledWith(CreatePostComponent, {
      panelClass: 'center-dialog',
    });
  });

  it('should open MoreOptionsComponent dialog', () => {
    const dialogRef = { afterClosed: () => of() };
    mockMatDialog.open.and.returnValue(dialogRef);

    component.openMoreOptionsComponent();

    expect(mockMatDialog.open).toHaveBeenCalledWith(MoreOptionsComponent, {
      panelClass: 'center-dialog',
    });
  });

  it('should open NotificationComponent dialog', () => {
    const dialogRef = { afterClosed: () => of() };
    mockMatDialog.open.and.returnValue(dialogRef);

    component.openNotifications();

    expect(mockMatDialog.open).toHaveBeenCalledWith(NotificationComponent, {
      panelClass: 'center-dialog',
    });
  });

  it('should navigate to home', () => {
    component.routeToHome();

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('home');
  });

  it('should navigate to notification', () => {
    component.routeToNotification();

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('notification');
  });

  it('should navigate to explore', () => {
    component.routeToExplore();

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('explore');
  });

  it('should navigate to message', () => {
    component.routeToMessage();

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('message');
  });

  it('should navigate to search', () => {
    component.routeToSearch();

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('search/searchUser');
  });

  it('should navigate to profile', () => {
    const userId = '123';
    component.routeToProfile();

    expect(mockRouter.navigate).toHaveBeenCalledWith([`/profile/home`, userId]);
  });

  it('should toggle notification and navigate to notification', () => {
    component.toggleNotification();

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/notification');
  });

  it('should navigate to admin/statistic if role is admin', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('admin');
    component.role();

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/admin/statistic');
    expect(component.show).toBeTrue();
  });

  it('should navigate to home if role is not admin', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('user');
    component.role();

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('home');
    expect(component.show).toBeFalse();
  });

  it('should clear localStorage, sessionStorage and navigate to signin', () => {
    component.logout();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(mockMatSnackBar.open).toHaveBeenCalledWith('Logout successfull', 'Close', {
      duration: 2000,
    });
    expect(mockMatDialog.closeAll).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/auth/signin']);
    expect(mockWindow.location.reload).toHaveBeenCalled();
  });
});
