import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DropMenuState} from '../../model/drop-menu.state';

@Injectable({
  providedIn: 'root'
})
export class DropMenuService {

  state$ = new Subject<DropMenuState>();

  public register(): Observable<DropMenuState> {
    return this.state$;
  }

  public toggleMenu(key: string, visible: boolean) {
    this.state$.next({visible, key});
  }
}
