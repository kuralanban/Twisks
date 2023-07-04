import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket!: Socket;
  constructor(private noti:MatSnackBar) {}


  public connectSockets() {
    this.socket = io('http://localhost:3000', {
      transports: ['websocket'], // Only use the WebSocket transport
      reconnectionAttempts: 3, // Number of reconnection attempts
      timeout: 5000, // Connection timeout in milliseconds
      withCredentials: true, // Set to true if your server requires credentials
    });

    this.socket.on('connect', () => {
      console.log('Connected to socket server!');
    });

    this.socket.on('error', (error: any) => {
     this.noti.open('Error in connection server');
    });

    this.socket.emit('join', environment.userId);
  }
  public likePost(userId: string, postId: string,postuserId:string,likedUsername:string,postImage:string): void {
    this.socket.emit('likedPost', { userId, postId,postuserId,likedUsername,postImage});
  }
  public onPostLiked(): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.on('postLiked', (data: any) => {
        observer.next(data);
        this.LikenoticeCheck();

      });
    });
  }

  public onPostComment(postId: string, postUserId: string,userId:string, comment: any,username:string,postImage:string) {
    this.socket.emit('newComment', { postId, postUserId,userId, comment,username,postImage });
  }

  public onPostGetComment():Observable<any>{
    return new Observable<any>((observer) => {
      this.socket.on('commentsRetrived',(data:any)=>{
        observer.next(data)
      })
    })}
  public retriveInitalComments(postId: string){
    this.socket.emit("InitalpostComments",{postId})
  }

  public onViewPostComments():Observable<any>{
    return new Observable<any>((observer)=>{
      this.socket.on('InitalpostCommentsRetrived',(data:any)=>{
        observer.next(data);

      })
    })
  }
public onSavingPost(savedpost:object){

  this.socket.emit('savePost',savedpost)
}
public onRetrivingSavedPosts():Observable<any>{
return new Observable<any>((observer)=>{
  this.socket.on("retrivedSavedPosts",async(data)=>{
    observer.next(data);
  })
})
}

//

public noticeCheck(): Observable<any> {
  return new Observable<any>((observer) => {
    this.socket.on("notification", (data) => {
      observer.next(data);
      this.onCommentNotifications(data)
    });
  });
}
public LikenoticeCheck(): Observable<any> {
  return new Observable<any>((observer) => {
    this.socket.on('Likenotification', (data) => {
      observer.next(data);
    });
  });
}
public onlikeNotifications(username:string){
this.noti.open(`${username} liked your post`,'Close',
  {panelClass: ['my-custom-snackbar'],duration: 5000}
  );
}

public onCommentNotifications(username:string){
  this.noti.open(`${username} commented your post`,'Close',
    {panelClass: ['my-custom-snackbar'],duration: 5000}
    );
  }
  public onError():Observable<any>{
    return new Observable<any>((observer) => {
      this.socket.on('error',(errorMessage:any)=>{
        observer.next(errorMessage)
        this.noti.open(errorMessage, 'Close', { duration: 3000 });
      })
    })}
}
