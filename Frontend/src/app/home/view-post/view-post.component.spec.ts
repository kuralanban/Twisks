import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPostComponent } from './view-post.component';
import { HomeService } from 'src/app/service/home.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { WebsocketService } from 'src/app/service/websocket.service';
import { UserService } from 'src/app/service/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('ViewPostComponent', () => {
  let component: ViewPostComponent;
  let fixture: ComponentFixture<ViewPostComponent>;
  const mockData = { _id: '123', userId: '456', fileName: 'image.jpg' };
  const mockHomeService = jasmine.createSpyObj('HomeService', ['calculateCurrentTime']);
  const mockWebSocketService = jasmine.createSpyObj('WebsocketService', ['onPostGetComment', 'onPostComment', 'retriveInitalComments', 'onViewPostComments', 'likePost', 'onSavingPost']);
  const mockUserService = jasmine.createSpyObj('UserService', ['getUserDetails']);
 const data=''
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ViewPostComponent],
      providers: [
        { provide: HomeService, useValue: mockHomeService },
        { provide: MAT_DIALOG_DATA, useValue: mockData },
        FormBuilder,
        { provide: WebsocketService, useValue: mockWebSocketService },
        { provide: UserService, useValue: mockUserService },
        MatSnackBar
      ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostComponent);
    component = fixture.componentInstance;
    component.postId = '123';
    component.postUserId = '456';
    component.username = 'testuser';
    component.postImage = 'image.jpg';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call getInitalComments', () => {
    spyOn(component, 'getInitalComments');
    component.ngOnInit();
    expect(component.getInitalComments()).toHaveBeenCalled();
  });

  it('should call getComments', () => {
    spyOn(component, 'getComments');
    component.ngOnInit();
    expect(component.getComments()).toHaveBeenCalled();
  });

  it('should call onSubmitingComment', () => {
    spyOn(component.webSocket, 'onPostComment');
    component.commentForm.setValue({ comment: 'Test comment' });
    component.onSubmitingComment();
    expect(component.webSocket.onPostComment).toHaveBeenCalledWith(
      component.postId,
      component.postUserId,
      sessionStorage.getItem('userId')!,
      'Test comment',
      component.username,
      component.postImage
    );
  });


});
