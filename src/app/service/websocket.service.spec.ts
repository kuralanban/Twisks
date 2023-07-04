import { TestBed } from '@angular/core/testing';

import { WebsocketService } from './websocket.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SigninComponent } from '../auth-module/signin/signin.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('WebsocketService', () => {
  let service: WebsocketService;
  const userId = '123';
  const postId = '456';
  const postuserId = '789';
  const likedUsername = 'John';
  const postImage = 'image.jpg';
  const comment ='this is a comment'
  const data={};
  const mockSocket = {
    on: jasmine.createSpy('on'),
    emit: jasmine.createSpy('emit'),
  };
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations:[SigninComponent],
      providers:[
        HttpClient,HttpHandler,
        { provide: MatSnackBar, useValue: { open: () => {} } },
        { provide: Window, useValue: { io: () => mockSocket } },
      ]
    });
    service = TestBed.inject(WebsocketService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    expect(service.connectSockets()).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.onPostLiked()).toHaveBeenCalled();
  });
    it('should be created', () => {
    expect(service.likePost(userId, postId,postuserId,likedUsername,postImage)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.onPostGetComment()).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.onPostComment(postId,postuserId,comment,likedUsername,userId,postImage)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.onSavingPost(data)).toHaveBeenCalled();
  });

  it('should be created', () => {
    expect(service.onlikeNotifications(likedUsername)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.onCommentNotifications(likedUsername)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.LikenoticeCheck()).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.noticeCheck()).toHaveBeenCalled();
  });
});
