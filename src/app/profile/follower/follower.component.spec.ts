import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FollowerComponent } from './follower.component';
import { UserService } from 'src/app/service/user.service';
import { of } from 'rxjs';

describe('FollowerComponent', () => {
  let component: FollowerComponent;
  let fixture: ComponentFixture<FollowerComponent>;
  let userService: UserService;
  let matDialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowerComponent],
      providers: [
        { provide: MatDialog, useValue: { closeAll: () => {} } },
        { provide: UserService, useValue: { fetchSearchedUserDetails: () => {}, getFollowersDetails: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    matDialog = TestBed.inject(MatDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user details and initialize followers', () => {
    const fetchSearchedUserDetailsSpy = spyOn(userService, 'fetchSearchedUserDetails').and.returnValue(of({ userDetails: { followers: [1, 2, 3] } }));
    const getFollowersDetailsSpy = spyOn(userService, 'getFollowersDetails').and.returnValue(of({ userDetails: {} }));

    component.ngOnInit();

    expect(fetchSearchedUserDetailsSpy).toHaveBeenCalledWith(component.data.userId);
    expect(getFollowersDetailsSpy).toHaveBeenCalledTimes(3); // Assuming followers array length is 3
    expect(component.followersDetails.length).toBe(3);
  });

  it('should fetch active user details', () => {
    spyOn(userService, 'fetchSearchedUserDetails').and.returnValue(of({ userDetails: {} }));

    component.fetchActiveUserDetails();

    expect(component.activeUserDetail).toBeDefined();
  });

  it('should close the dialog', () => {
    const closeAllSpy = spyOn(matDialog, 'closeAll');

    component.close();

    expect(closeAllSpy).toHaveBeenCalled();
  });
});
