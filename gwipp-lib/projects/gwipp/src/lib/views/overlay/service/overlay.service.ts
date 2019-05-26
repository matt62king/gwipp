import {Injectable, TemplateRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {OverlayState} from '../model/overlay-state';

@Injectable({ providedIn: 'root'})
export class OverlayService {

  private state$ = new Subject<OverlayState>();

  public register(): Observable<OverlayState> {
    return this.state$;
  }

  public toggle(show: boolean, title: TemplateRef<any>, detail: TemplateRef<any>) {
    this.state$.next({visible: show, title, detail});
  }
}