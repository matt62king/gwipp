import {TemplateRef} from '@angular/core';

export interface OverlayState {
  visible: boolean;
  title: TemplateRef<any>;
  detail: TemplateRef<any>;
}
