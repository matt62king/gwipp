import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayViewComponent} from './overlay-view/overlay-view.component';
import { OverlayDetailDirective } from './foundation/overlay-detail.directive';
import { OverlayTitleDirective } from './foundation/overlay-title.directive';

@NgModule({
  declarations: [
    OverlayViewComponent,
    OverlayDetailDirective,
    OverlayTitleDirective
  ],
  exports: [
    OverlayViewComponent,
    OverlayDetailDirective,
    OverlayTitleDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class OverlayModule { }
