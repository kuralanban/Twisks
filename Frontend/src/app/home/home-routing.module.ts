import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { SavedPostsComponent } from './saved-posts/saved-posts.component';
import { AccessGuard } from '../service/Guard/access.guard';
const routes: Routes = [

  {path:'',component:HomepageComponent, canActivate:[AccessGuard]},
  {path:'createPost',component:CreatePostComponent, canActivate:[AccessGuard]},
  {path:'viewPost/:id',component:ViewPostComponent, canActivate:[AccessGuard]},
  {path:'savedPosts',component:SavedPostsComponent, canActivate:[AccessGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
