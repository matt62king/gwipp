import {Injectable, TemplateRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {OverlayState} from '../model/overlay-state';

@Injectable({ providedIn: 'root'})
export class OverlayService {

  private readonly state$ = new Subject<OverlayState>();

  public register(): Observable<OverlayState> {
    return this.state$;
  }

  public toggle(show: boolean, detail?: TemplateRef<any>, title?: TemplateRef<any>) {
    this.state$.next({visible: show, title, detail});
  }
}
