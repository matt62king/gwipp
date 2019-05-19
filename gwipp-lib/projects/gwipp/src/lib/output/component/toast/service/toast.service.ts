import {Injectable, TemplateRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ToastState} from '../model/toast-state';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private state$ = new Subject<ToastState>();

  constructor() { }

  public register(): Observable<ToastState> {
    return this.state$;
  }

  public toast(show: boolean, detail?: TemplateRef<any>) {
    this.state$.next({visible: show, template: detail});
  }
}
