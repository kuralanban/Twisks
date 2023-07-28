import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from './service/user.service';
import { Router, NavigationEnd ,ActivatedRoute} from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
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
    private titleService: Title,
    private metaService: Meta,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.titleService.setTitle('My Page | My Website');
    this.metaService.addTag({ name: 'description', content: 'This is a description of my page.' });
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
 public seoSetters(){
    this.route.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
    .subscribe((data:any) => {
      const pageTitle = data.title || 'Twisks'; // Set a default title if necessary
      const pageDescription = data.description || 'Welcome to Twisks'; // Set a default description if necessary
      this.setPageTitleAndDescription(pageTitle, pageDescription);
    });
  }
 public setPageTitleAndDescription(title: string, description: string): void {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
