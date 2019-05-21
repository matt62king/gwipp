import {Component, ContentChildren, EventEmitter, OnChanges, Output, SimpleChanges, TemplateRef} from '@angular/core';
import {TabItemDirective} from './tabs/tab-item.directive';
import {TemplateId} from '../../foundation/templates/model/templateId';

@Component({
  selector: 'gwipp-tab-menu',
  templateUrl: './tab-menu.component.html'
})
export class TabMenuComponent {
  @Output() tabSelect: EventEmitter<TabItemDirective> = new EventEmitter();

  tabItemTemplates: TabItemDirective[];
  titles: TemplateId[] = [];
  details: TemplateId[] = [];
  selectedItemId: string;

  @ContentChildren(TabItemDirective)
  set tabItems(tabItems: TabItemDirective[]) {
    this.tabItemTemplates = tabItems;
    this.selectedItemId = '0';

    tabItems.forEach((item, index) => {
      this.titles.push({id: `${index}`, template: item.title});
      this.details.push({id: `${index}`, template: item.detail});
    });
  }

  onTabSelected(templateId: string): void {
    this.selectedItemId = templateId;
  }

  selectedDetail(): TemplateRef<any> | undefined {
    const templateId =  this.details.filter((item) => item.id === this.selectedItemId)[0];
    return templateId ? templateId.template : undefined;
  }
}
