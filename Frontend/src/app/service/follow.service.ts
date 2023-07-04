import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

constructor(public http : HttpClient) { }
public followUser(data: any) {
  return this.http.post(`${environment.baseUrl}/follow/followUser`,data);
}
public unfollowUser(data: any) {
  return this.http.post(`${environment.baseUrl}/follow/unfollow`,data);
}
public removeFollower(data:any){
  return this.http.post(`${environment.baseUrl}/follow/remove`,data);
}
}
