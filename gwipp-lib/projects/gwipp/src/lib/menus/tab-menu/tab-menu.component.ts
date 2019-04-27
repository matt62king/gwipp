import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabItem} from './foundation/model/tab-item';


@Component({
  selector: 'gwipp-tab-menu',
  templateUrl: './tab-menu.component.html'
})
export class TabMenuComponent implements OnInit {
  @Output() tabSelect: EventEmitter<TabItem> = new EventEmitter();

  internalTabItems: TabItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  @Input() set tabItems(tabItems: TabItem[]) {
    this.internalTabItems = tabItems;

    if (this.internalTabItems.length > 0) {
      this.internalTabItems[0].selected = true;
      this.tabSelect.emit(this.internalTabItems[0]);
    }
  }

  onTabSelected(tabItem: TabItem): void {
    this.internalTabItems.forEach(item => item.selected = false);
    tabItem.toggle();

    this.tabSelect.emit(tabItem);
  }
}
