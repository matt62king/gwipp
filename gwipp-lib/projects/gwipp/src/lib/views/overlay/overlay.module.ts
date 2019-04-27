import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayViewComponent } from './overlay-view/overlay-view.component';

@NgModule({
  declarations: [OverlayViewComponent],
  exports: [
    OverlayViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OverlayModule { }
