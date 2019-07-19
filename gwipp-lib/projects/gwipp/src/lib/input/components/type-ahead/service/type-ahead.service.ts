import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {TypeAheadInput} from '../model/type-ahead-input';
import {TypeAheadServiceModule} from './type-ahead-service.module';

@Injectable({
  providedIn: TypeAheadServiceModule
})
export class TypeAheadService {

  readonly update$ = new Subject();

  public state(): Observable<TypeAheadInput> {
    return this.update$.asObservable();
  }

  public dispatch(typeAheadState: TypeAheadInput) {
    this.update$.next(typeAheadState);
  }
}
