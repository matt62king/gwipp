import {TemplateRef} from '@angular/core';

export interface ToastState {
  visible: boolean;
  template?: TemplateRef<any>;
  position?: string;
}
