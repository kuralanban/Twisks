import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setSeoData(title: string, description: string): void {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
  }

  updateSeoDataOnRouteChange(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map((root) => {
          while (root.firstChild) {
            root = root.firstChild;
          }
          return root;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data:any) => {
        const title = data.title || 'Default Title';
        const description = data.description || 'Default Description';
        this.setSeoData(title, description);
      });
  }

  initializeSeoData(): void {
    this.updateSeoDataOnRouteChange();
    this.setSeoData(this.titleService.getTitle(), this.getMetaDescription());
  }

  getMetaDescription(): string {
    const descriptionTag = this.document.querySelector('meta[name="description"]');
    return descriptionTag ? descriptionTag.getAttribute('content')! : '';
  }
}
