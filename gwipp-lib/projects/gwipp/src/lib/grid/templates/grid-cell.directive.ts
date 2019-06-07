import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[gwippGridCell]'
})
export class GridCellDirective {

  @Input() propertyKey: string | symbol;
  @Input() cellStyle: string;

  constructor(public template: TemplateRef<any>) {

  }
}
