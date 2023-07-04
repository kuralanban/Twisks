import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { SwitchAccountComponent } from './switch-account.component';
import { UserService } from 'src/app/service/user.service';
import { FollowService } from 'src/app/service/follow.service';
import { environment } from 'src/app/environments/environment';

describe('SwitchAccountComponent', () => {
  let component: SwitchAccountComponent;
  let fixture: ComponentFixture<SwitchAccountComponent>;
  let mockUserService: any;
  let mockFollowService: any;
  let mockDialogRef: any;
  let mockMatDialog: any;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj(['getUserDetails', 'updateUserDetails']);
    mockFollowService = jasmine.createSpyObj(['unfollowUser']);
    mockDialogRef = jasmine.createSpyObj(['close']);
    mockMatDialog = jasmine.createSpyObj(['closeAll']);

    await TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
      declarations: [SwitchAccountComponent],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: FollowService, useValue: mockFollowService },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize component', () => {
    const mockUserDetails = { userDetails: { accountType: 'private' } };
    spyOn(mockUserService, 'getUserDetails').and.returnValue(of(mockUserDetails));
  
    component.ngOnInit();
  
    expect(mockUserService.getUserDetails).toHaveBeenCalled();
    expect(component.accountType).toBe(true);
  });
  it('should switch account', () => {
    const mockUserDetails = { userDetails: { accountType: 'private' } };
    spyOn(mockUserService, 'getUserDetails').and.returnValue(of(mockUserDetails));
    spyOn(mockUserService, 'updateUserDetails').and.returnValue(of({}));
  
    component.switchAccount('public');
  
    expect(mockUserService.getUserDetails).toHaveBeenCalled();
    expect(mockUserService.updateUserDetails).toHaveBeenCalledWith(environment.userId, { accountType: 'public' });
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
  it('should unfollow user', () => {
    const mockFollowUser = { activeUser: 'mockUserId', followUser: 'mockFollowUserId' };
    spyOn(mockFollowService, 'unfollowUser').and.returnValue(of({}));
    spyOn(component, 'ngOnInit');
    spyOn(mockMatDialog, 'closeAll');
  
    component.unfollow('mockFollowUserId');
  
    expect(mockFollowService.unfollowUser).toHaveBeenCalledWith(mockFollowUser);
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(mockMatDialog.closeAll).toHaveBeenCalled();
  });

  
});
