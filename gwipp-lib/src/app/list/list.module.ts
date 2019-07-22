import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {PortletModule} from '../../../projects/gwipp/src/lib/views/portlet/portlet.module';
import {PortletActionMenuModule} from '../shared/portlet-action-menu/portlet-action-menu.module';
import {ExpandableListComponent} from './expandable-list/expandable-list.component';
import {ExpandableListModule} from '../../../projects/gwipp/src/lib/lists/expandable-list/expandable-list.module';

@NgModule({
  declarations: [
    ListComponent,
    ExpandableListComponent
  ],
  imports: [
    CommonModule,
    PortletModule,
    PortletActionMenuModule,
    ExpandableListModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
