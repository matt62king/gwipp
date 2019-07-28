import {Component, Input, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'gwipp',
  template: '<div></div>'
})
export class GwippComponent implements OnDestroy {

  protected destroy$: Subject<any> = new Subject<any>();

  @Input() id: string;

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
