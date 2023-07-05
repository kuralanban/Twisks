import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HomeService } from 'src/app/service/home.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  const mockNotificationService = jasmine.createSpyObj('NotificationService', ['fetchnotifications']);
  const mockHomeService = jasmine.createSpyObj('HomeService', ['getAllNotifications']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationComponent],
      providers: [
        { provide: NotificationService, useValue: mockNotificationService },
        { provide: HomeService, useValue: mockHomeService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve all notifications on initialization', () => {
    const mockNotificationData = {
      userNotification: {
        comments: [{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }],
        followerNotification: [{ id: 1, user: 'User 1' }, { id: 2, user: 'User 2' }],
        likeNotification: [{ id: 1, postId: 1 }, { id: 2, postId: 2 }],
      },
    };
    mockNotificationService.fetchnotifications.and.returnValue(of(mockNotificationData));

    component.ngOnInit();

    expect(mockNotificationService.fetchnotifications).toHaveBeenCalled();
    expect(component.commentNotifications).toEqual(mockNotificationData.userNotification.comments);
    expect(component.followerNotification).toEqual(mockNotificationData.userNotification.followerNotification);
    expect(component.likeNotification).toEqual(mockNotificationData.userNotification.likeNotification);
  });

  it('should toggle to show likes', () => {
    component.likeToggle();

    expect(component.showlikes).toBeTruthy();
    expect(component.showComments).toBeFalsy();
    expect(component.showFollowrequests).toBeFalsy();
  });

  it('should toggle to show comments', () => {
    component.commentToggle();

    expect(component.showlikes).toBeFalsy();
    expect(component.showComments).toBeTruthy();
    expect(component.showFollowrequests).toBeFalsy();
  });

  it('should toggle to show follow requests', () => {
    component.FollowRequestToggle();

    expect(component.showlikes).toBeFalsy();
    expect(component.showComments).toBeFalsy();
    expect(component.showFollowrequests).toBeTruthy();
  });
});
