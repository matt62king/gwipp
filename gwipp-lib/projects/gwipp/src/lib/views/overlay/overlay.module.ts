import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayViewComponent} from './overlay-view/overlay-view.component';
import {TemplatesModule} from '../../foundation/templates/templates.module';

@NgModule({
  declarations: [
    OverlayViewComponent
  ],
  exports: [
    OverlayViewComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class OverlayModule { }
