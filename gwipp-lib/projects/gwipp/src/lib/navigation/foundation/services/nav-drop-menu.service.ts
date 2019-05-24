import { Injectable } from '@angular/core';
import {NavDropMenuState} from '../model/navDropMenuState';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavDropMenuService {

  private state$ = new Subject<NavDropMenuState>();

  public register(): Observable<NavDropMenuState> {
    return this.state$;
  }

  public toggleMenu(key: string, visible: boolean) {
    this.state$.next({visible, key});
  }
}
