import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPostComponent } from './view-post/view-post.component';
import { StoriesComponent } from './stories/stories.component'
import { SavedPostsComponent } from './saved-posts/saved-posts.component';
import { ViewStoryComponent } from './stories/view-story/view-story.component';
import { HMemoriesComponent } from './h-memories/h-memories.component';

@NgModule({
  declarations: [
    HomepageComponent,
    CreatePostComponent,
    ViewPostComponent,
    StoriesComponent,
    SavedPostsComponent,
    ViewStoryComponent,
    HMemoriesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CreatePostComponent
  ],
  providers:[]
})
export class HomeModule { }
