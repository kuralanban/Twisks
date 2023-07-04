import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore/explore.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';


@NgModule({
  declarations: [
    ExploreComponent,
    ImageDialogComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
