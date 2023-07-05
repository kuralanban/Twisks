import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportComponent } from './report.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { HomeService } from 'src/app/service/home.service';
import { of } from 'rxjs';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;
  let userService: UserService;
  let homeService: HomeService;
  let matDialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
      declarations: [ReportComponent],
      providers: [
        { provide: MatDialog, useValue: { closeAll: () => {} } },
        { provide: UserService, useValue: { getFollowersDetails: () => {} } },
        { provide: HomeService, useValue: { fetchIndividualPost: () => {}, updateIndividualPost: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    homeService = TestBed.inject(HomeService);
    matDialog = TestBed.inject(MatDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user details and post details on initialization', () => {
    const getFollowersDetailsSpy = spyOn(userService, 'getFollowersDetails').and.returnValue(
      of({ userDetails: {} })
    );
    const fetchIndividualPostSpy = spyOn(homeService, 'fetchIndividualPost').and.returnValue(
      of({ post: {} })
    );

    component.ngOnInit();

    expect(getFollowersDetailsSpy).toHaveBeenCalledWith(component.data.userId);
    expect(fetchIndividualPostSpy).toHaveBeenCalledWith(component.data.postId);
    expect(component.userDetails).toBeDefined();
    expect(component.postDetails).toBeDefined();
  });

  it('should close the dialog', () => {
    const closeAllSpy = spyOn(matDialog, 'closeAll');

    component.close();

    expect(closeAllSpy).toHaveBeenCalled();
  });

  it('should report a post', () => {
    spyOn(homeService, 'updateIndividualPost');

    component.postDetails = { reports: [] };
    component.reportPost('spam');

    expect(component.postDetails.reports.length).toBe(1);
    expect(homeService.updateIndividualPost).toHaveBeenCalledWith(component.data.postId, component.postDetails);
    expect(component.showSuccess).toBeTruthy();
  });

  it('should report an account', () => {
    spyOn(userService, 'updateUserDetails');

    component.userDetails = { reportsUser: [] };
    component.reportAccount('spam');

    expect(component.userDetails.reportsUser.length).toBe(1);
    expect(userService.updateUserDetails).toHaveBeenCalledWith(component.data.userId, component.userDetails);
    expect(component.showSuccess).toBeTruthy();
  });

  it('should report an account for age-related issues', () => {
    spyOn(userService, 'updateUserDetails');

    component.userDetails = { reportsUser: [] };
    component.reportAgeAccount('age');

    expect(component.userDetails.reportsUser.length).toBe(1);
    expect(userService.updateUserDetails).toHaveBeenCalledWith(component.data.userId, component.userDetails);
    expect(component.showAgeSuccess).toBeTruthy();
  });

  it('should set the appropriate flags for opening different sections', () => {
    component.openAboutReportingPost();
    expect(component.aboutReportingPost).toBeTruthy();

    component.openAccountReportingPage();
    expect(component.accountReportingPage).toBeTruthy();

    component.openUserReports();
    expect(component.showUserReports).toBeTruthy();

    component.prentendingSomeone();
    expect(component.showPretendingSomeone).toBeTruthy();

    component.openReports();
    expect(component.showMain).toBeFalsy();
    expect(component.user).toBe(component.data.user);
    expect(component.post).toBe(component.data.post);
  });
});
