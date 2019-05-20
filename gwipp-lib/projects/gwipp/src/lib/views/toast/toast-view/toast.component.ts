import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {IconNames} from '../../../icon/icon/constants/icon-names';
import {Observable} from 'rxjs';
import {ToastDetailDirective} from './toast-detail.directive';
import {ToastState} from '../model/toast-state';
import {ToastService} from '../service/toast.service';

@Component({
  selector: 'gwipp-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent implements OnInit {

  @ContentChild(ToastDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;

  show$: Observable<ToastState>;
  closeIcon = IconNames.TIMES;

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.show$ = this.toastService.register();
  }

  closeToaster(): void {
    this.toastService.toast(false);
  }

  getToasterClass(position: string): string {
    return `gwipp-toast gwipp-toast-${position} p-3`;
  }
}
