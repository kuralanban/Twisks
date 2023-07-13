import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/app/environments/environment';
import { MessageSocketService } from 'src/app/service/message-socket.service';
import { CreateGroupComponent } from '../create-group/create-group.component';
import { GroupDetailsComponent } from '../group-details/group-details.component';
import { WebsocketService } from 'src/app/service/websocket.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/service/seo.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('200ms ease-out'))
    ])
  ]

})
export class MessageComponent implements OnInit {
  public searchResult: Array<any> = [];
  public privateChat: Array<any> = [];
  public groupChat: Array<any> = [];
  public showChatBox: Boolean = false;
  public messages: Array<any> = [];
  public userId = sessionStorage.getItem('userId');
  public username = sessionStorage.getItem('username');
  public receiverMsgs: Array<any> = [];
  public senderMsgs: Array<any> = [];
  public oldMessages: Array<any> = [];
  public roomId: string = '';
  public groups: Array<any> = [];
  public isEmptyMsg: boolean = false;
  public userDp = environment.profilePicRetrival;
  public isGroupChat: boolean = false;
  public isPrivateChat: boolean = false;
  public isMobileScreen: boolean = false;
  public  isSidebarOpen: boolean = true;

  @ViewChild('messageContainer') messageContainer!: ElementRef;

  messageForm = this.fb.group({
    message: new FormControl('')
  });

  constructor(
    public messageService: MessageSocketService,
    public websocket: WebsocketService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public notification:MatSnackBar,
    private route: ActivatedRoute,
    private seoService: SeoService,
  ) {}
  ngOnInit(): void {
    this.setSeoData();
    this.messageService.Connect();
    this.onMobileScreen();
    this.retriveAllgroups();
    this.onRetrivingGroupsInitally();
  }

  public onSearchUsers(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const accountName = inputElement.value;
    this.messageService.searchUsers(accountName).subscribe({
      next: (data: any) => {
        this.searchResult = data.fetchedMessageAccounts;
      },
      error: () => {}
    });
  }
  public onPrivatechat(user: any) {
    const data = {
      senderuserId: this.userId,
      reciveruserId: user._id
    };
    this.messageService.Connect();
    // To check room already created else creates a new one and send its _id
    this.messageService.connectChatRoom(data);
    // By retriving its _id on subs this socket method
    this.messageService.retriveRoomId().subscribe({
      next: (data: any) => {
        this.roomId = data._id;
        // To Joining that room Id
        this.messageService.JoinRoomSockets(this.roomId);
        // Emiting this room _Id to Retrive chat history
        this.messageService.retriveInitialMessages({ room: this.roomId });
        // Retriving All old messages by that _id
        this.messageService.fetchOldMessages().subscribe({
          next: (data: any) => {
            this.showChatBox = true;
            this.isPrivateChat = true;
            this.isGroupChat = false;
            this.privateChat = [user];
            this.messages = data;
            this.onMobileScreen();
            this.notification.open('slide the chat box and chat','close', { duration: 5000 })
          },
          error: () => {}
        });
        // TO get the message as soon as messages sent in sender ENd
        this.messageService.newMessageRecived().subscribe((data: any) => {
          this.messages = data;
        });
      },
      error: () => {}
    });
  }

  public sendNewMessage(data: any) {
    this.messageService.sendMessage({
      senderUserId: this.userId,
      receiverUserId: data._id,
      message: this.messageForm.value.message,
      room: this.roomId
    });
    this.messageForm.reset();
    this.messageService.newMessageRecived().subscribe((data: any) => {
      this.messages = data;
    });
  }

  public createGroup(): void {
    const dialogRef = this.dialog.open(CreateGroupComponent, {
      panelClass: 'center-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.onRetrivingGroupsInitally();
    });
  }

  private retriveAllgroups() {
    const data = { userId: this.userId };
    this.messageService.retriveUserGroups(data);
  }

  public toggleSendBtn(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const accountName = inputElement.value;
    if (accountName.length != 0) {
      this.isEmptyMsg = true;
    } else {
      this.isEmptyMsg = false;
    }
  }
  public onRetrivingGroupsInitally() {
    this.messageService.getGroups().subscribe({
      next: (data: any) => {
        this.groups = data.groups;
      },
      error: () => {}
    });
  }
  public onGroupchat(group: any) {
    this.messageService.getGroupChatRoom(group.groupName);
    this.messageService.retriveGroupRoom().subscribe({
      next: (data: any) => {
        this.showChatBox = true;
        this.isGroupChat = true;
        this.isPrivateChat = false;
        this.groupChat = [group];
        this.messages = data.message;
        this.notification.open('slide the chat box on the top start chatting','close', { duration: 5000 })
      },
      error: () => {}
    });
  }
  public sendGroupMessage(data: any) {
    this.messageService.sendGroupMessage({
      groupName: data.groupName,
      members: data.members,
      sender: this.userId,
      message: this.messageForm.value.message
    });
    this.messageForm.reset();
    this.messageService.newgroupMessages().subscribe((data: any) => {
      this.messages = data.message;
    });
  }
  public showGroupDetails(data: any) {
    const dialogRef = this.dialog.open(GroupDetailsComponent, { data: data });
    dialogRef.afterClosed().subscribe(result => {});
  }
  public onMobileScreen() {
    if (window.screen.width <= 768) {
      this.isMobileScreen = true;
    } else {
      this.isMobileScreen = false;
    }
  }
  public toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  public setSeoData() {
    const routeData = this.route.snapshot.data;
    const title = routeData['title'] || 'Twisks '; // Set a default title if necessary
    const description = routeData['description'] || 'Welcome to Twisks'; // Set a default description if necessary
    this.seoService.setSeoData(title, description);
  }

}
