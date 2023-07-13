import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { SavedPostsComponent } from './saved-posts/saved-posts.component';
import { AccessGuard } from '../service/Guard/access.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AccessGuard], data: { title: 'Twisks | Home', description: 'Welcome to Twisks' } },
  { path: 'createPost', component: CreatePostComponent, canActivate: [AccessGuard], data: { title: 'Twisks | Create Post', description: 'Create a new post' } },
  { path: 'viewPost/:id', component: ViewPostComponent, canActivate: [AccessGuard], data: { title: 'Twisks | View Post', description: 'View a post' } },
  { path: 'savedPosts', component: SavedPostsComponent, canActivate: [AccessGuard], data: { title: 'Twisks | Saved Posts', description: 'View your saved posts' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
