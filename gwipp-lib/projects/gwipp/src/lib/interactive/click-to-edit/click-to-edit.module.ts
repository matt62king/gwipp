import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClickToEditComponent} from './click-to-edit.component';
import {EditDetailDirective} from './templates/edit-detail.directive';
import {ReadDetailDirective} from './templates/read-detail.directive';
import {IconModule} from '../../icon/icon.module';
import { ActionDetailDirective } from './templates/action-detail.directive';

@NgModule({
  declarations: [
    ClickToEditComponent,
    EditDetailDirective,
    ReadDetailDirective,
    ActionDetailDirective
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ClickToEditComponent,
    EditDetailDirective,
    ReadDetailDirective,
    ActionDetailDirective
  ]
})
export class ClickToEditModule { }
