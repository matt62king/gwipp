import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitGroupComponent } from './components/submit-group/submit-group.component';
import { ButtonModule } from '../button/button.module';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SubmitGroupComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    SubmitGroupComponent,
    FormComponent
  ]
})
export class FormModule { }
