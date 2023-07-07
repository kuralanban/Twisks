import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageSocketService {
  private socket!: Socket;
  private socketConnected: boolean = false;

  constructor(private http: HttpClient) {}

  public Connect(){
    this.socket = io(`${environment.baseUrl}`);
  }

  public searchUsers(accountName: string) {
    return this.http.get(
      environment.baseUrl + `/message/searchUser/${accountName}`
    );
  }


  public sendMessage(data: any) {
    this.socket.emit('message', data);
  }

  public newMessageRecived() {
    let observable = new Observable<{ user: String; message: String }>(
      observable => {
        this.socket.on('newMessage', data => {
          observable.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );
    return observable;
  }
  public retriveInitialMessages(data: object) {
    this.socket.emit('initalMessages', data);
  }
  public fetchOldMessages() {
    let observable = new Observable<object>(observable => {
      this.socket.on('fetchOldMessages', data => {
        observable.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }


  public createGroup(data: object) {
    this.socket.emit('createGroup', data);
  }

  public retriveGroups() {
    let observable = new Observable<object>(observable => {
      this.socket.on('newgroup', data => {
        observable.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
public retriveUserGroups(data:object){
this.socket.emit('retriveGroups',data)
}
public connectChatRoom(data:object){
this.socket.emit('chatRoom',data);
}

public retriveRoomId() {
  let observable = new Observable<object>(observable => {
    this.socket.on('RetrivedChatRoom', data => {
      observable.next(data);
    });
    return () => {
      this.socket.disconnect();
    };
  });
  return observable;
}
public JoinRoomSockets(roomId:any) {
  this.Connect();
  this.socket.emit('joinChat', { room: roomId }, () => {
  });
}

public getGroups(){
  return this.http.get(environment.baseUrl+`/message/groups/${environment.userId}`)
}
public getGroupChatRoom(groupName:string){
this.socket.emit('getGroupChatRoom',groupName);
}

public retriveGroupRoom() {
  let observable = new Observable<object>(observable => {
    this.socket.on('fetchedGroupChats', data => {
      observable.next(data);
    });
    return () => {
      this.socket.disconnect();
    };
  });
  return observable;
}
public newgroupMessages() {
  let observable = new Observable<object>(observable => {
    this.socket.on('newgroupMessages', data => {
      observable.next(data);
    });
    return () => {
      this.socket.disconnect();
    };
  });
  return observable;
}
public sendGroupMessage(data:object){
  this.socket.emit('sendGroupMessage',data);
}
public retriveGroupMembers(data: Array<string>) {
  this.socket.emit('retriveMembers', data);
}

public retrivedMembers() {
  let observable = new Observable<object>(observable => {
    this.socket.on('retrivedMembers', data => {
      observable.next(data);
    });
    return () => {
      this.socket.disconnect();
    };
  });
  return observable;
}
public addMembers(data:object){
  this.socket.emit('addMembers',data);
}
public membersAdded() {
  let observable = new Observable<object>(observable => {
    this.socket.on('membersAdded', data => {
      observable.next(data);
    });
    return () => {
      this.socket.disconnect();
    };
  });
  return observable;
}
}
