import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public search: any;
  viewRecent!: true;
  userDetail: any;
  recentSearch: any;
  recentSearchUserDetails: any = [];
  public profilePicRetrival = environment.profilePicRetrival;
  constructor(public userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.search = '';
    this.getRecentUserDetails();
  }
  public getRecentUserDetails() {
    this.userService.getUserDetails().subscribe({
      next: (res: any) => {
        this.recentSearch = res.userDetails.recentSearchedUser.reverse();
        this.recentSearch.map(async (element: any) => {
          this.fetchRecentSearchedUserDetails(element.id);
        });
      },
      error: (err: any) => {},
    });
  }
  public async fetchRecentSearchedUserDetails(data: any) {
    this.userService.fetchSearchedUserDetails(data).subscribe({
      next: (res: any) => {
        this.recentSearchUserDetails.push(res.userDetails);
      },
    });
  }
  public searchUser() {
    if (this.search) {
      this.userService.searchUser(this.search).subscribe({
        next: (res: any) => {
          this.userDetail = res.searchedUser;
        },
        error: (err: any) => {},
      });
    } else {
      (this.search = ''), (this.userDetail = []);
    }
  }
  public viewUserProfileOfRecentUser(data: any) {
    this.router.navigate([`/profile/home`, data]);
  }
  public viewUserProfile(data: any) {
    this.router.navigate([`/profile/home`, data]);
    this.userService.addRecentSearchedUser(data).subscribe({
      next: (res: any) => {
        this.getRecentUserDetails();
      },
      error: (err: any) => {},
    });
  }
  public show() {
    this.recentSearch = false;
  }
  public clear() {
    this.userService.clearRecentSearchedUser().subscribe({
      next: (res: any) => {
        this.recentSearchUserDetails = [];
        this.ngOnInit();
      },
    });
  }
}
