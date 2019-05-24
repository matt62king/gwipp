import {Injectable, TemplateRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ToastState} from '../model/toast-state';
import {ToastPosition} from '../model/toast-position';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private state$ = new Subject<ToastState>();

  public register(): Observable<ToastState> {
    return this.state$;
  }

  public toast(show: boolean, detail?: TemplateRef<any>, position?: string);
  public toast(show: boolean, detail?: TemplateRef<any>, position: string = ToastPosition.DEFAULT) {
    this.state$.next({visible: show, template: detail, position});
  }
}
