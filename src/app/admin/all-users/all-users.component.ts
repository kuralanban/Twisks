import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/app/environments/environment';
import { Router } from '@angular/router';
import { MessageSocketService } from 'src/app/service/message-socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  public allUser: Array<any> = [];
  public searchValue: any;
  public profilePicRetrival = environment.profilePicRetrival;
  public filteredUsers!: any[];
  public searchResult: any;
  public isVideoFile: Boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageSocketService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.users();
  }

  users() {
    this.userService.allUsers().subscribe({
      next: (res: any) => {
        this.allUser = res.allUser;

      },
      error: (err) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }
  handleSearch() {
    if (this.searchValue) {
      this.userService.searchUser(this.searchValue).subscribe({
        next: (res: any) => {
          this.allUser = res.searchedUser;
        },
        error: (err) => {
          this.matSnackBar.open('Something went wrong !', 'Close', {
            duration: 2000,
          });
        },
      });
    } else {
      this.searchValue = '';
      this.allUser = [];
      this.users();
    }
  }

  passId(id: any) {
    this.router.navigate([`admin/userDetail/${id}`]);
  }

  public onSearchUsers(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const accountName = inputElement.value;
    this.messageService.searchUsers(accountName).subscribe({
      next: (data: any) => {
        this.searchResult = data.fetchedMessageAccounts;
      },
      error: (err: any) => {
        this.matSnackBar.open('Something went wrong !', 'Close', {
          duration: 2000,
        });
      },
    });
  }
}
