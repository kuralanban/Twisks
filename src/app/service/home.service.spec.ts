import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeService', () => {
  let service: HomeService;
  let data:Object;
  let userId:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        HttpClient,HttpHandler
      ],
      imports:[RouterTestingModule]
    });
    service = TestBed.inject(HomeService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    expect(service.createNewPost(data)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.fetchUserPost(data)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.getAllSavedPosts()).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.getUserPosts(userId)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.fetchFollowingCount(userId)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.fetchIndividualPost(userId)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.fetchUserCount(userId)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.updateIndividualPost(userId,data)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.singlePost(userId)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.getUserPosts(userId)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.postGotReported()).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.particularPostGotReported(userId)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.fetchUserMemories()).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.userDetailService()).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.userPostsService()).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.popularPost()).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.blockingPost(userId)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.unblockingPost(userId)).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.hidePost()).toHaveBeenCalled();
  });
  it('should be created', () => {
    expect(service.deletePost(userId)).toHaveBeenCalled();
  });

  it('should calculate time difference correctly', () => {
    const currentTime = new Date();

    // Test for seconds
    const givenTimeSeconds = new Date();
    givenTimeSeconds.setSeconds(givenTimeSeconds.getSeconds() - 30);
    const expectedResultSeconds = 'Just Now';
    const actualResultSeconds = service.calculateCurrentTime(givenTimeSeconds);
    expect(actualResultSeconds).toBe(expectedResultSeconds);

    // Test for minutes
    const givenTimeMinutes = new Date();
    givenTimeMinutes.setMinutes(givenTimeMinutes.getMinutes() - 5);
    const expectedResultMinutes = '5 minutes ago';
    const actualResultMinutes = service.calculateCurrentTime(givenTimeMinutes);
    expect(actualResultMinutes).toBe(expectedResultMinutes);

    // Test for hours
    const givenTimeHours = new Date();
    givenTimeHours.setHours(givenTimeHours.getHours() - 3);
    const expectedResultHours = '3 hours ago';
    const actualResultHours = service.calculateCurrentTime(givenTimeHours);
    expect(actualResultHours).toBe(expectedResultHours);

    // Test for days
    const givenTimeDays = new Date();
    givenTimeDays.setDate(givenTimeDays.getDate() - 2);
    const expectedResultDays = '2 days ago';
    const actualResultDays = service.calculateCurrentTime(givenTimeDays);
    expect(actualResultDays).toBe(expectedResultDays);

    // Test for months
    const givenTimeMonths = new Date();
    givenTimeMonths.setMonth(givenTimeMonths.getMonth() - 4);
    const expectedResultMonths = '4 months ago';
    const actualResultMonths = service.calculateCurrentTime(givenTimeMonths);
    expect(actualResultMonths).toBe(expectedResultMonths);

    // Test for years
    const givenTimeYears = new Date();
    givenTimeYears.setFullYear(givenTimeYears.getFullYear() - 1);
    const expectedResultYears = '1 year ago';
    const actualResultYears = service.calculateCurrentTime(givenTimeYears);
    expect(actualResultYears).toBe(expectedResultYears);
  });

});
