import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {TypeAheadState} from '../model/type-ahead-state';

@Injectable({
  providedIn: 'root'
})
export class TypeAheadService {

  readonly update$ = new Subject();

  public state(): Observable<TypeAheadState> {
    return this.update$.asObservable();
  }

  public dispatch(typeAheadState: TypeAheadState) {
    this.update$.next(typeAheadState);
  }
}
