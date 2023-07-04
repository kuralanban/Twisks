import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoreOptionsComponent } from './more-options/more-options.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthModuleModule } from '../auth-module/auth-module.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
MoreOptionsComponent,
NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    AuthModuleModule,
    ReactiveFormsModule

  ],
  exports:[
    NavbarComponent
  ]
  ,providers:[]
})
export class SharedModule { }
