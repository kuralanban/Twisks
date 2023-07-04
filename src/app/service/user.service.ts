import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public profilePhoto!: string;
  constructor(public http: HttpClient) {}

  public getUserDetails() {
    return this.http.get(
      `${environment.baseUrl}/user/userDetails/${environment.userId}`
    );
  }
  public findUserDetails(data: any) {
    return this.http.get(`${environment.baseUrl}/user/findUser/${data}`);
  }
  public fetchSearchedUserDetails(data: any) {
    const object={
      activeUser:environment.userId,
      searchUser:data
    }
    return this.http.post(`${environment.baseUrl}/follow/fetch`,object);
  }
  public updateUserDetails(userId: any, data: any) {
    return this.http.put(`${environment.baseUrl}/user/${userId}`, data);
  }
  public updatePassword(email: any, data: any) {
    return this.http.put(`${environment.baseUrl}/user/password/${email}`, data);
  }
  public getFollowersDetails(data: any) {
    return this.http.get(`${environment.baseUrl}/user/userDetails/${data}`);
  }
  public newUser(userData: string) {
    return this.http.post(`${environment.baseUrl}/user/signup`, userData);
  }

  public loginGoogle(data: any) {
    return this.http.post(`${environment.baseUrl}/user/google`, data);
  }

  public login(data: any) {
    return this.http.post(`${environment.baseUrl}/user/validate/`, data);
  }

  public logout() {
    return this.http.get(`${environment.baseUrl}/user/logout/${environment.userId}`);
  }

  public allUsers() {
    return this.http.get(`${environment.baseUrl}/user/allUsers`);
  }

  public individualUser(id: any) {
    return this.http.get(`${environment.baseUrl}/user/details/${id}`);
  }

  public generateOtp(data: any) {
    return this.http.get(`${environment.baseUrl}/otp/${data.email}`);
  }

  public verifyOtp(data: any) {
    return this.http.post(`${environment.baseUrl}/otp/`, data);
  }
  public searchUser(data: any) {
    return this.http.get(`${environment.baseUrl}/user/search/${data}`);
  }
  public addRecentSearchedUser(data: any) {
    const object = {
      id: data,
      userId: environment.userId,
    };
    return this.http.post(`${environment.baseUrl}/user/recent`, object);
  }
  public clearRecentSearchedUser() {
    const object = {
      userId: environment.userId,
    };
    return this.http.post(`${environment.baseUrl}/user/recent/clear`, object);
  }
  public uploadProfileImage(data:Object){
    return this.http.post(`${environment.baseUrl}/user/uploadImage`,data)
  }
  public newUserCount() {
    return this.http.get(`${environment.baseUrl}/user/newUserCount`);
  }
  public totalUserCount() {
    return this.http.get(`${environment.baseUrl}/user/userCount`);
  }
  public activeUserCount() {
    return this.http.get(`${environment.baseUrl}/user/activeUserCount`);
  }
  public reportedUser(id:any){
    return this.http.get(`${environment.baseUrl}/reports/reportedUser/${id}`);
  }
  public reportsForUser(){
    return this.http.get(`${environment.baseUrl}/user/usersForReport`);
  }
  public blockUser(id:any){
    return this.http.get(`${environment.baseUrl}/user/block/${id}`);
  }
  public unblockUser(id:any){
    return this.http.get(`${environment.baseUrl}/user/unblock/${id}`);
  }
  public userCount(){
    return this.http.get(`${environment.baseUrl}/user/allCounts`)
  }
}
