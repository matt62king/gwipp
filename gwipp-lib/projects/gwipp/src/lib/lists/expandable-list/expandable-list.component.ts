import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import {TemplateContext} from '../../foundation/templates/model/template-context';
import {ListDetailDirective} from '../foundation/templates/list-detail.directive';
import {ListExpandedDetailDirective} from '../foundation/templates/list-expanded-detail.directive';

@Component({
  selector: 'gwipp-expandable-list',
  templateUrl: './expandable-list.component.html'
})
export class ExpandableListComponent {
  selectedContext: TemplateContext;
  context: TemplateContext[];

  @Output() expand: EventEmitter<any> = new EventEmitter<any>();
  @Output() collapse: EventEmitter<any> = new EventEmitter<any>();

  @ContentChild(ListDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;

  @ContentChild(ListExpandedDetailDirective, {read: TemplateRef})
  expandedDetail: TemplateRef<any>;

  @Input()
  set data(data: any | any[]) {
    if (data instanceof Array) {
      this.context = data.map((item) => ({$implicit: item}));
    } else {
      this.context = [{$implicit: data}];
    }
  }

  toggleExpanded(row: TemplateContext): void {
    this.selectedContext = this.isExpanded(row) ? undefined : row;
    this.selectedContext ? this.expand.emit(row.$implicit) : this.collapse.emit(row.$implicit);
  }

  isExpanded(context: TemplateContext): boolean {
    return this.selectedContext === context;
  }
}
