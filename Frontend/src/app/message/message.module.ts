import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message/message.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroupDetailsComponent } from './group-details/group-details.component';


@NgModule({
  declarations: [
    MessageComponent,
    CreateGroupComponent,
    GroupDetailsComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MessageModule { }
