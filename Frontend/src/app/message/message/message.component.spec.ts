import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MessageComponent } from './message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageSocketService } from 'src/app/service/message-socket.service';
import { WebsocketService } from 'src/app/service/websocket.service';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageComponent],
      imports: [FormsModule, ReactiveFormsModule, MatDialogModule],
      providers: [MessageSocketService, WebsocketService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set showChatBox to true when onPrivatechat is called', () => {
    const user = { _id: '123', username: 'testUser' };
    spyOn(component.messageService, 'connectChatRoom').and.stub();
    spyOn(component.messageService, 'retriveRoomId').and.returnValue({
      subscribe: (callback: any) => callback({ _id: 'testRoomId' })
    } as any);
    spyOn(component.messageService, 'JoinRoomSockets').and.stub();
    spyOn(component.messageService, 'retriveInitialMessages').and.returnValue({
      subscribe: (callback: any) => callback([{ message: 'testMessage' }])
    } as any);

    component.onPrivatechat(user);

    expect(component.showChatBox).toBeTruthy();
    expect(component.isPrivateChat).toBeTruthy();
    expect(component.isGroupChat).toBeFalsy();
    expect(component.privateChat).toEqual([user]);
    expect(component.messages).toEqual([{ message: 'testMessage' }]);
  });


  it('should send new private message when sendNewMessage is called', () => {
    component.roomId = 'testRoomId';
    component.messageForm.get('message')?.setValue('testMessage');
    spyOn(component.messageService, 'sendMessage').and.stub();
    spyOn(component.messageForm, 'reset').and.stub();
    spyOn(component.messageService, 'newMessageRecived').and.returnValue({
      subscribe: (callback: any) => callback([{ user: 'testUser', message: 'testMessage' }])
    } as any);

    component.sendNewMessage({ _id: '123' });

    expect(component.messageService.sendMessage).toHaveBeenCalledWith({
      senderUserId: 'testUserId',
      receiverUserId: '123',
      message: 'testMessage',
      room: 'testRoomId'
    });
    expect(component.messageForm.reset).toHaveBeenCalled();
    expect(component.messages).toEqual([{ user: 'testUser', message: 'testMessage' }]);
  });



});
