import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Socket } from 'socket.io-client';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private socket!:Socket;
  public isOpen = false;
  public currentuserDp!:string;
  constructor(public http:HttpClient) { }

fetchnotifications(){
  return this.http.get(`${environment.baseUrl}/notifications/${environment.userId}`)
}


}
