import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/service/home.service';
import { WebsocketService } from 'src/app/service/websocket.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs';
import { ReportComponent } from 'src/app/profile/report/report.component';
import { environment } from 'src/app/environments/environment';
import { ViewPostComponent } from '../view-post/view-post.component';
import { HMemoriesComponent } from '../h-memories/h-memories.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;
  let mockHomeService: jasmine.SpyObj<HomeService>;
  let mockWebSocket: jasmine.SpyObj<WebsocketService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockMatSnackBar: jasmine.SpyObj<MatSnackBar>;
  let mockDatePipe: jasmine.SpyObj<DatePipe>;

  beforeEach(async () => {
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open', 'closeAll']);
    const homeServiceSpy = jasmine.createSpyObj('HomeService', ['userDetailService', 'userPostsService', 'calculateCurrentTime', 'fetchUserMemories']);
    const webSocketSpy = jasmine.createSpyObj('WebsocketService', ['connectSockets', 'likePost', 'onPostLiked', 'onSavingPost', 'onRetrivingSavedPosts', 'noticeCheck', 'LikenoticeCheck', 'onlikeNotifications']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    const datePipeSpy = jasmine.createSpyObj('DatePipe', ['transform']);

    await TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      providers: [
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: HomeService, useValue: homeServiceSpy },
        { provide: WebsocketService, useValue: webSocketSpy },
        { provide: Router, useValue: routerSpy },
        { provide: MatSnackBar, useValue: matSnackBarSpy },
        { provide: DatePipe, useValue: datePipeSpy },
      ],
    }).compileComponents();

    mockMatDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    mockHomeService = TestBed.inject(HomeService) as jasmine.SpyObj<HomeService>;
    mockWebSocket = TestBed.inject(WebsocketService) as jasmine.SpyObj<WebsocketService>;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    mockMatSnackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    mockDatePipe = TestBed.inject(DatePipe) as jasmine.SpyObj<DatePipe>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user profile details on initialization', () => {
    const userDetailServiceResponse = { userDetails: { userName: 'John Doe', profilePhoto: 'profile.jpg' } };
    mockHomeService.userDetailService.and.returnValue(of(userDetailServiceResponse));

    component.ngOnInit();

    expect(mockHomeService.userDetailService).toHaveBeenCalled();
    expect(component.username).toBe(userDetailServiceResponse.userDetails.userName);
    expect(sessionStorage.setItem).toHaveBeenCalledWith('userDp', userDetailServiceResponse.userDetails.profilePhoto);
  });

  it('should fetch user following posts on initialization', () => {
    const userPostsServiceResponse = { fetchedPosts: [{ _id: '1', fileName: 'post1.jpg' }, { _id: '2', fileName: 'post2.jpg' }] };
    mockHomeService.userPostsService.and.returnValue(of(userPostsServiceResponse));

    component.ngOnInit();

    expect(mockHomeService.userPostsService).toHaveBeenCalled();
    expect(component.postDetails).toEqual(userPostsServiceResponse.fetchedPosts);
  });

  it('should like a post', () => {
    const post = { _id: '1', userId: '123', fileName: 'post1.jpg' };
    component.username = 'John';
    component.fetchUserFollowingPosts = jasmine.createSpy('fetchUserFollowingPosts');

    component.likePost(post);

    expect(mockWebSocket.likePost).toHaveBeenCalledWith(environment.userId!, post._id, post.userId, environment.username!, post.fileName);
    expect(component.fetchUserFollowingPosts).toHaveBeenCalled();
  });

  it('should show likes of each post', () => {
    const postLikedData = { _id: '1', likes: 10 };
    mockWebSocket.onPostLiked.and.returnValue(of(postLikedData));

    component.showLikesOfEachPost();

    expect(mockWebSocket.onPostLiked).toHaveBeenCalled();
    expect(component.postDetails[0].likes).toBe(postLikedData.likes);
  });

  it('should view a post', () => {
    const postData = { _id: '1', fileName: 'post1.jpg' };
    const mockMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    mockMatDialogRef.afterClosed.and.returnValue(of(null));
    mockMatDialog.open.and.returnValue(mockMatDialogRef);

    component.viewPost(postData);

    expect(mockMatDialog.open).toHaveBeenCalledWith(ViewPostComponent, { data: postData });
    expect(mockMatDialogRef.afterClosed).toHaveBeenCalled();
  });

  it('should save a post', () => {
    const user = { _id: '1' };
    component.fetchUserFollowingPosts = jasmine.createSpy('fetchUserFollowingPosts');

    component.onSavingPost(user);

    expect(mockWebSocket.onSavingPost).toHaveBeenCalledWith({ postId: user._id, userId: environment.userId });
    expect(component.fetchUserFollowingPosts).toHaveBeenCalled();
  });

  it('should show saved posts', () => {
    const savedPostsData = { _id: '1', savedBy: ['user1', 'user2'] };
    mockWebSocket.onRetrivingSavedPosts.and.returnValue(of(savedPostsData));

    component.showSavedPosts();

    expect(mockWebSocket.onRetrivingSavedPosts).toHaveBeenCalled();
    expect(component.postDetails[0].savedBy).toEqual(savedPostsData.savedBy);
  });

  it('should calculate the time taken for a post', () => {
    const postTime = '2023-06-19T10:00:00Z';
    const currentTime = '2023-06-19T12:00:00Z';
    const timeTaken = '2 hours ago';
    mockHomeService.calculateCurrentTime.and.returnValue(timeTaken);

    const result = component.getTimeTaken(postTime);

    expect(mockHomeService.calculateCurrentTime).toHaveBeenCalledWith(postTime);
    expect(result).toBe(timeTaken);
  });

  it('should handle notifications', () => {
    mockWebSocket.noticeCheck.and.returnValue(of(null));

    component.noti();

    expect(mockWebSocket.noticeCheck).toHaveBeenCalled();
  });

it('should handle like notifications', () => {
  const likeNotificationData = 'New like';
  mockWebSocket.LikenoticeCheck.and.returnValue(of(likeNotificationData));
  mockWebSocket.onlikeNotifications.and.stub();

  component.Likenotification();

  expect(mockWebSocket.LikenoticeCheck).toHaveBeenCalled();
  expect(mockWebSocket.onlikeNotifications).toHaveBeenCalledWith(likeNotificationData);
});

  it('should open more options', () => {
    const postId = '1';
    const mockMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    mockMatDialogRef.afterClosed.and.returnValue(of(null));
    component.openMoreOption(postId);

    expect(mockMatDialog.open).toHaveBeenCalledWith(ReportComponent, { data: { user: false, post: true, postId } });
  });

  it('should fetch user memories', () => {
    const fetchUserMemoriesResponse = { fetchMemories: ['memory1', 'memory2'] };
    mockHomeService.fetchUserMemories.and.returnValue(of(fetchUserMemoriesResponse));

    component.userMemories();

    expect(mockHomeService.fetchUserMemories).toHaveBeenCalled();
    expect(component.memoriesData).toEqual(fetchUserMemoriesResponse.fetchMemories);
  });

  it('should open memories', () => {
    const data = { memory: 'memory1' };
    const mockMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    mockMatDialogRef.afterClosed.and.returnValue(of(null));
    component.onClickMemories(data);

    expect(mockMatDialog.open).toHaveBeenCalledWith(HMemoriesComponent, { data: { memories: data } });
    expect(mockMatDialog.closeAll).toHaveBeenCalled();
  });
});
