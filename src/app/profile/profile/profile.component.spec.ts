import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserService } from 'src/app/service/user.service';
import { HomeService } from 'src/app/service/home.service';
import { FollowService } from 'src/app/service/follow.service';
import { of } from 'rxjs';
import { FollowerComponent } from '../follower/follower.component';
import { FollowingComponent } from '../following/following.component';
import { ReportComponent } from '../report/report.component';
import { ViewPostComponent } from 'src/app/home/view-post/view-post.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockRouter= jasmine.createSpyObj('Router' , ['navigate']);
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockHomeService: jasmine.SpyObj<HomeService>;
  let data:any;
  beforeEach(waitForAsync(() => {
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], { snapshot: { params: { userId: '123' } } });
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUserDetails']);
    const homeServiceSpy = jasmine.createSpyObj('HomeService', ['RetriveAllSavedPosts']);
    const followServiceSpy = jasmine.createSpyObj('FollowService', ['getFollowingStatus']);
    mockRouter =  jasmine.createSpyObj('Router' , ['navigate']);

    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ProfileComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: UserService, useValue: userServiceSpy },
        { provide: HomeService, useValue: homeServiceSpy },
        { provide: FollowService, useValue: followServiceSpy },
      ],
    }).compileComponents();

    mockDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    mockActivatedRoute = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
    mockUserService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    mockHomeService = TestBed.inject(HomeService) as jasmine.SpyObj<HomeService>;

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should initialize component and fetch user details', () => {
    const mockUserDetails = { id: '123', name: 'John Doe' };
    
    mockUserService.getUserDetails.and.returnValue(of(mockUserDetails));

    component.ngOnInit();

    expect(component).toBeTruthy();
    expect(mockActivatedRoute.snapshot.params['userId']).toBe('123');
    expect(mockUserService.getUserDetails).toHaveBeenCalled();
    expect(component.userDetails).toBe(mockUserDetails);
  });

  it('should open the FollowerComponent dialog', () => {
    component.follower(data);

    expect(mockDialog.open).toHaveBeenCalledWith(FollowerComponent, { data: { userId: '123' } });
  });

  it('should open the FollowingComponent dialog', () => {
    component.following(data);

    expect(mockDialog.open).toHaveBeenCalledWith(FollowingComponent, { data: { userId: '123' } });
  });

  it('should navigate to the switch account page', () => {
    component.unfollow(data);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/switch-account']);
  });
  it('should navigate to the switch account page', () => {
    component.editProfile();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/profile/edit-profile']);
  });

  it('should open the ReportComponent dialog', () => {
    component.openMoreOptions(data);

    expect(mockDialog.open).toHaveBeenCalledWith(ReportComponent, { data: { userId: '123' } });
  });

  it('should open the ViewPostComponent dialog', () => {
    const postId = '456';

    component.viewPost(postId);

    expect(mockDialog.open).toHaveBeenCalledWith(ViewPostComponent, { data: { postId } });
  });

  it('should fetch the active user details', () => {
    const mockActiveUserDetails = { id: '456', name: 'Jane Smith' };

    mockUserService.getUserDetails.and.returnValue(of(mockActiveUserDetails));
    sessionStorage.setItem('userId', '456');

    component.fetchActiveUserDetails();

    expect(mockUserService.getUserDetails).toHaveBeenCalled();
    expect(component.activeUserDetail).toBe(mockActiveUserDetails);
  });

  it('should fetch all saved posts', () => {
    mockHomeService.getAllSavedPosts.and.returnValue(of());

    component.retrievePosts();

    expect(mockHomeService.getAllSavedPosts()).toHaveBeenCalled();
  });
  it('',()=>{
    component.editProfile();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('profile/edit-profile')
  })
});
