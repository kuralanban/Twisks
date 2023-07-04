import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/app/environments/environment';
import { MessageSocketService } from 'src/app/service/message-socket.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent {
  public searchResult: Array<any> = [];
  public selectedUsers: any[] = [environment.userId];
  public groupName!: string;
  public groups: Array<any> = [];
  public roomId: string = '';
  public userDp = environment.profilePicRetrival;
  public username=environment.username;
  constructor(
    private messageService: MessageSocketService,
    private dialog: MatDialog
  ) {}

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

  public getSelectedUsers() {
    const data = {
      createdBy: this.groupName + ` created by ${environment.username!}`,
      groupName: this.groupName,
      members: this.selectedUsers,
      message: {
        sender: environment.userId,
        message: `Hey guys,i have created a group lets chat ! `
      },
      admin:environment.userId
    };
    this.messageService.createGroup(data);
    this.dialog.closeAll();
  }

  public setValues(user: any) {
    this.selectedUsers.push(user._id);
  }
}
