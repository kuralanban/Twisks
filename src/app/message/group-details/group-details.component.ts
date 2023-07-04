import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { environment } from 'src/app/environments/environment';
import { MessageSocketService } from 'src/app/service/message-socket.service';
import { CreateGroupComponent } from '../create-group/create-group.component';
import {UserInterface} from "../../interface/user.interface"
@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent {
  public groupDetails: any; // Declare the property
  public memberDetails:Array<any>=[];
  public searchResult: Array<any> = [];
  public selectedUsers: any[] = [];
  public userId:string=sessionStorage.getItem('userId')!;
  public addMember:boolean=false;
  public username=environment.username;
  public userDp = environment.profilePicRetrival;
  public profileRetrival:string=environment.profilePicRetrival;
  @ViewChild('addMemberClass') addMemberClass!: ElementRef<HTMLDivElement>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private message:MessageSocketService,
  public dialog: MatDialog,
  ) {

    this.groupDetails = [this.data]; // Assign the value inside the constructor
  }
  ngOnInit(){
   this.retriveMemberDetails();
   this.retrivedMembers();
  }
  public retriveMemberDetails(){
    this.message.retriveGroupMembers(this.data.members)
  }
  public retrivedMembers(){
    this.message.retrivedMembers().subscribe({
      next:(data:any)=>{
        this.memberDetails=data
        this.memberDetails.map((a:any)=>{
          const memberids=a._id
          if(memberids.includes(this.data.admin)){
            a.admin=true
          }
          else{
            a.admin=false;
          }

        })
      }
    })
  }
  public onSearchUsers(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const accountName = inputElement.value;
    this.message.searchUsers(accountName).subscribe({
      next: (data: any) => {
        this.searchResult = data.fetchedMessageAccounts;
        this.searchResult.map((a:UserInterface)=>{
        })
      },
      error: () => {

      }
    });
  }

  public addMembers(){
      this.addMember=!this.addMember;
      if(this.addMember==true){
        this.addMemberClass?.nativeElement.classList.add('addMemberClass')
      }
      else{
        this.addMemberClass?.nativeElement.classList.remove('addMemberClass')

      }

    }
    public membersAdded(){
      this.message.membersAdded().subscribe({
        next:(data:any)=>{
          this.groupDetails=data;
        }
      })
    }

    public addUsers(data:UserInterface) {
      const emitdata={
        _id:data._id,
        groupName:this.data.groupName
      }
      this.message.addMembers(emitdata);
      this.membersAdded();
    }
    public isUserAlreadyMember(user: any): boolean {
      return this.memberDetails.some((member: any) => member._id === user._id);
    }
  }
