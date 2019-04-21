import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitGroupComponent } from './components/submit-group/submit-group.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    SubmitGroupComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    SubmitGroupComponent
  ]
})
export class FormModule { }
