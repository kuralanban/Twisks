import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { SavedPostsComponent } from './saved-posts/saved-posts.component';
import { AccessGuard } from '../service/Guard/access.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    canActivate: [AccessGuard],
    data: {
      title: 'Twisks - Social Media Platform for Connecting and Sharing',
      description: 'Discover and engage with the latest posts from the people you follow on Twisks.'
    }
  },
  {
    path: 'createPost',
    component: CreatePostComponent,
    canActivate: [AccessGuard],
    data: {
      title: 'Twisks - Create a New Post',
      description: 'Share your thoughts, ideas, and moments with the Twisks community.'
    }
  },
  {
    path: 'viewPost/:id',
    component: ViewPostComponent,
    canActivate: [AccessGuard],
    data: {
      title: 'Twisks - View Post',
      description: 'Read and engage with a post on Twisks, a vibrant social media platform.'
    }
  },
  {
    path: 'savedPosts',
    component: SavedPostsComponent,
    canActivate: [AccessGuard],
    data: {
      title: 'Twisks - Saved Posts',
      description: 'Access and manage your saved posts on Twisks, the ultimate social media experience.'
    }
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
