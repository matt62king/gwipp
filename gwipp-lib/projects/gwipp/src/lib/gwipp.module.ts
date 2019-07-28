import { NgModule } from '@angular/core';
import {GstateModule} from 'grippio-gstate';
import {GwippComponent} from './foundation/component/gwipp-component';

@NgModule({
  declarations: [
    GwippComponent
  ],
  imports: [
    GstateModule.forRoot()
  ],
  exports: [
    GwippComponent
  ]
})
export class GwippModule { }
