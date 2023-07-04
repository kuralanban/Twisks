import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FollowingComponent } from './following.component';
import { UserService } from 'src/app/service/user.service';
import { of } from 'rxjs';
import { SwitchAccountComponent } from '../switch-account/switch-account.component';

describe('FollowingComponent', () => {
  let component: FollowingComponent;
  let fixture: ComponentFixture<FollowingComponent>;
  let userService: UserService;
  let matDialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowingComponent],
      providers: [
        { provide: MatDialog, useValue: { closeAll: () => {}, open: () => ({ afterClosed: () => of(null) }) } },
        { provide: UserService, useValue: { fetchSearchedUserDetails: () => {}, getFollowersDetails: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    matDialog = TestBed.inject(MatDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user details and initialize following', () => {
    const fetchSearchedUserDetailsSpy = spyOn(userService, 'fetchSearchedUserDetails').and.returnValue(
      of({ userDetails: { following: [1, 2, 3] } })
    );
    const getFollowersDetailsSpy = spyOn(userService, 'getFollowersDetails').and.returnValue(of({ userDetails: {} }));

    component.ngOnInit();

    expect(fetchSearchedUserDetailsSpy).toHaveBeenCalledWith(component.data.userId);
    expect(getFollowersDetailsSpy).toHaveBeenCalledTimes(3); // Assuming following array length is 3
    expect(component.followingDetails.length).toBe(3);
  });

  it('should close the dialog', () => {
    const closeAllSpy = spyOn(matDialog, 'closeAll');

    component.close();

    expect(closeAllSpy).toHaveBeenCalled();
  });

  it('should open switch account dialog and refresh following', () => {
    spyOn(matDialog, 'open');
    const ngOnInitSpy = spyOn(component, 'ngOnInit');

    component.unfollow({});

    expect(matDialog.open).toHaveBeenCalledWith(SwitchAccountComponent, {
      data: {
        show: true,
        updateUser: {},
      },
    });
    expect(ngOnInitSpy).toHaveBeenCalled();
  });
});
