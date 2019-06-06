import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[gwippGridHeaderCell]'
})
export class GridHeaderCellDirective {

  @Input() cellStyle: string;

  constructor(public template: TemplateRef<any>) {

  }
}
