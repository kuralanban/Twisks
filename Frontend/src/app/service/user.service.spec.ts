import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserService', () => {
  let service: UserService;
  let data: any;
  let userId:any;
  let email : any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        HttpClient,HttpHandler
      ],
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get the user details' , ()=>{
    expect(service.getUserDetails()).toHaveBeenCalled();
  })
  it('should find the user details' , ()=>{
    expect(service.findUserDetails(data)).toHaveBeenCalled();
  })
  it('should fetch searched user details' , ()=>{
    expect(service.fetchSearchedUserDetails(data)).toHaveBeenCalled();
  })
  it('should update the user details' , ()=>{
    expect(service.updateUserDetails(userId,data)).toHaveBeenCalled();
  })
  it('should update the password' , ()=>{
    expect(service.updatePassword(email,data)).toHaveBeenCalled();
  })
  it('should get the followers details' , ()=>{
    expect(service.getFollowersDetails(data)).toHaveBeenCalled();
  })
  it('should add new user details' , ()=>{
    expect(service.newUser(data)).toHaveBeenCalled();
  })
  it('should login google' , ()=>{
    expect(service.loginGoogle(data)).toHaveBeenCalled();
  })
  it('should login the user' , ()=>{
    expect(service.login(data)).toHaveBeenCalled();
  })
  it('should logout the user' , ()=>{
    expect(service.logout()).toHaveBeenCalled();
  })
  it('should get all the user details' , ()=>{
    expect(service.allUsers()).toHaveBeenCalled();
  })
  it('should get the individual user details' , ()=>{
    expect(service.individualUser(data)).toHaveBeenCalled();
  })
  it('should generate the otp ' , ()=>{
    expect(service.generateOtp(data)).toHaveBeenCalled();
  })
  it('should verify the otp details' , ()=>{
    expect(service.verifyOtp(data)).toHaveBeenCalled();
  })
  it('should search the user details' , ()=>{
    expect(service.searchUser(data)).toHaveBeenCalled();
  })
  it('should add the recent searched user details' , ()=>{
    expect(service.addRecentSearchedUser(data)).toHaveBeenCalled();
  })
  it('should clear the recent the searched user details' , ()=>{
    expect(service.clearRecentSearchedUser()).toHaveBeenCalled();
  })
  it('should update the profile image' , ()=>{
    expect(service.uploadProfileImage(data)).toHaveBeenCalled();
  })
  it('should find the new user count' , ()=>{
    expect(service.newUserCount()).toHaveBeenCalled();
  })
  it('should find the total user count' , ()=>{
    expect(service.totalUserCount()).toHaveBeenCalled();
  })
  it('should find active user count' , ()=>{
    expect(service.activeUserCount()).toHaveBeenCalled();
  })
  it('should find the reported user details' , ()=>{
    expect(service.reportedUser(data)).toHaveBeenCalled();
  })
  it('should find the reports for user' , ()=>{
    expect(service.reportsForUser()).toHaveBeenCalled();
  })
  it('should find the block user' , ()=>{
    expect(service.blockUser(data)).toHaveBeenCalled();
  })
  it('should find the unblock user' , ()=>{
    expect(service.unblockUser(data)).toHaveBeenCalled();
  })
});
