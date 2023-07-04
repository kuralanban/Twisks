import { TestBed } from '@angular/core/testing';
import { FollowService } from './follow.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('Service: Follow', () => {
  let service:FollowService;
  let data: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        HttpClient,HttpHandler
      ],
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(FollowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should follow the user details' , ()=>{
    expect(service.followUser(data)).toHaveBeenCalled();
  });
  it('should unfollow the user details' , ()=>{
    expect(service.unfollowUser(data)).toHaveBeenCalled();
  });
  it('should remove the follower' , ()=>{
    expect(service.removeFollower(data)).toHaveBeenCalled();
  });
});
