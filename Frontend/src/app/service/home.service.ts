import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public defaultDp ='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png';
  private postDetailsBs: BehaviorSubject<any> = new BehaviorSubject(null);
  private currentTimestamp = formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSSZ', 'en-US');
  public currentuserDp!:string;
  constructor(private http: HttpClient) {}

  public createNewPost(obj: Object) {
    return this.http.post(`${environment.baseUrl}/post/createPost`, obj);
  }

  public userDetailService() {
    return this.http.get(
      `${environment.baseUrl}/user/userDetails/${sessionStorage.getItem(
        'userId'
      )}`
    );
  }

  public userPostsService() {
    return this.http.get(
      `${environment.baseUrl}/post/fetchPosts/${sessionStorage.getItem(
        'userId'
      )}`
    );
  }
  public fetchUserPost(id:any){
    return this.http.get(`${environment.baseUrl}/post/individualPost/${id}`)
    
  }
  public fetchIndividualPost(id:any){
    return this.http.get(`${environment.baseUrl}/post/singlePost/${id}`)
  }
  public updateIndividualPost(id:any,data:any){
    return this.http.put(`${environment.baseUrl}/post/updateSinglePost/${id}`,data)
  }
  public fetchUserCount(id:any){
    return this.http.get(`${environment.baseUrl}/post/count/${id}`)
  }
  public fetchFollowingCount(id:any){
    return this.http.get(`${environment.baseUrl}/post/followingCount/${id}`)
  }
  public popularPost(){
    return this.http.get(`${environment.baseUrl}/post/popularPost`)
  }

public getAllSavedPosts(){
  return this.http.get(`${environment.baseUrl}/post/savedPosts/${environment.userId}`)
}
public getUserPosts(userId:any){
  return this.http.get(`${environment.baseUrl}/post/activeUserPosts/${userId}`)
}
public calculateCurrentTime(postTime:any){
  const givenTime = new Date(postTime);
    const currentTime = new Date(this.currentTimestamp);
    const timeDifference = currentTime.getTime() - givenTime.getTime();

    const seconds = Math.floor(timeDifference / 1000);

    const minutes = Math.floor(timeDifference / 1000 / 60);
    const hours = Math.floor(timeDifference / 1000 / 60 / 60);
    const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    const months = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 30);
    const years = Math.floor(timeDifference / 1000 / 60 / 60 / 24 / 365);

    if (years > 0) {
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return `Just Now`;
    }
}
public singlePost(id:any){
  return this.http.get(`${environment.baseUrl}/post/singlePost/${id}`)
}
public  postGotReported(){
  return this.http.get(`${environment.baseUrl}/post/postGotReported`)
}
public particularPostGotReported(id:any){
  return this.http.get(`${environment.baseUrl}/reports/particularReportedPost/${id}`)
}

public fetchUserMemories(){
  return this.http.get(`${environment.baseUrl}/explore/viewMemories/${sessionStorage.getItem('userId')}`);

}
public blockingPost(id:any){
  return this.http.get(`${environment.baseUrl}/post/blockPost/${id}`)
}
public unblockingPost(id:any){
  return this.http.get(`${environment.baseUrl}/user/unblockPost/${id}`)
}

public hidePost(){
  return this.http.get(`${environment.baseUrl}/post/hidePost`)
}
public deletePost(id:any){
  return this.http.delete(`${environment.baseUrl}/post/delete/${id}`)
}
}
