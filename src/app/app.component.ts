import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from './service/user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Front_End';
  public darkMode: boolean = JSON.parse(localStorage.getItem('darkMode')!);
  public isNavbar!: boolean;;
  @ViewChild('setDarkMode') setDarkMode!: ElementRef<HTMLDivElement>;
  constructor(
    private user: UserService,
    private route: Router,
  ) {}

  ngOnInit() {
    this.toggleNavbar();
  }

  public toggleNavbar() {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        if (currentUrl === '/auth/signin' || currentUrl === '/auth/signup') {
          this.isNavbar = false;
        } else {
          this.isNavbar = true;
        }

      }
    });
  }
}
