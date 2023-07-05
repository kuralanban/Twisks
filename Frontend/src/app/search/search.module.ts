import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';

@NgModule({
  declarations: [
    SearchComponent,
    CameraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    WebcamModule
  ]
})
export class SearchModule { }
