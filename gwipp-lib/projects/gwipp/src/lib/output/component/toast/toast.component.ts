import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {IconNames} from '../../../icon/icon/constants/icon-names';
import {Observable} from 'rxjs';
import {ToastDetailDirective} from './toast-detail.directive';

@Component({
  selector: 'gwipp-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent implements OnInit {

  @ContentChild(ToastDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;

  show$: Observable<boolean>;
  closeIcon = IconNames.TIMES;

  constructor() { }

  ngOnInit() {
  }

  closeToaster(): void {

  }
}
