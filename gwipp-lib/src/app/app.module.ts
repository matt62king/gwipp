import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavAttributesModule} from '../../projects/gwipp/src/lib/navigation/nav-attributes/nav-attributes.module';
import {FormModule} from '../../projects/gwipp/src/lib/form/form.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlayModule} from '../../projects/gwipp/src/lib/views/overlay/overlay.module';
import {TabMenuModule} from '../../projects/gwipp/src/lib/menus/tab-menu/tab-menu.module';
import {NavigationModule} from '../../projects/gwipp/src/lib/navigation/navigation.module';
import {IconModule} from '../../projects/gwipp/src/lib/icon/icon.module';
import {ButtonModule} from '../../projects/gwipp/src/lib/button/button.module';
import {OutputModule} from '../../projects/gwipp/src/lib/output/output.module';
import {ToastModule} from '../../projects/gwipp/src/lib/views/toast/toast.module';
import {MenuModule} from '../../projects/gwipp/src/lib/menus/menu/menu.module';
import {PortletModule} from '../../projects/gwipp/src/lib/views/portlet/portlet.module';
import {WorkingBlockModule} from '../../projects/gwipp/src/lib/output/component/blocks/working-block/working-block.module';
import {ErrorBlockModule} from '../../projects/gwipp/src/lib/output/component/blocks/error-block/error-block.module';
import {TextFieldModule} from '../../projects/gwipp/src/lib/input/components/text-field/text-field.module';
import {PasswordFieldModule} from '../../projects/gwipp/src/lib/input/components/password-field/password-field.module';
import {SwitchModule} from '../../projects/gwipp/src/lib/input/components/switch/switch.module';
import {DropdownSelectionModule} from '../../projects/gwipp/src/lib/input/components/dropdown-selection/dropdown-selection.module';
import { InputsComponent } from './inputs/inputs.component';
import { ExpandableListComponent } from './list/expandable-list/expandable-list.component';
import {ExpandableListModule} from '../../projects/gwipp/src/lib/lists/expandable-list/expandable-list.module';
import { BasicGridComponent } from './basic-grid/basic-grid.component';
import {GridModule} from '../../projects/gwipp/src/lib/grid/grid.module';
import { MenusComponent } from './menus/menus.component';
import {ActionMenuModule} from '../../projects/gwipp/src/lib/menus/action-menu/action-menu.module';
import {MenuTemplatesModule} from '../../projects/gwipp/src/lib/menus/foundataion/templates/menu-templates.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BlocksComponent } from './blocks/blocks.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {TypeAheadModule} from '../../projects/gwipp/src/lib/input/components/type-ahead/type-ahead.module';
import {InputTemplateModule} from '../../projects/gwipp/src/lib/input/foundation/templates/input-template.module';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    ExpandableListComponent,
    BasicGridComponent,
    MenusComponent,
    NavBarComponent,
    BlocksComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    NavAttributesModule,
    IconModule,
    ButtonModule,
    FormModule,
    ReactiveFormsModule,
    TextFieldModule,
    PasswordFieldModule,
    SwitchModule,
    DropdownSelectionModule,
    OverlayModule,
    TabMenuModule,
    OutputModule,
    ToastModule,
    MenuModule,
    PortletModule,
    WorkingBlockModule,
    ErrorBlockModule,
    ExpandableListModule,
    GridModule,
    ActionMenuModule,
    MenuTemplatesModule,
    ReactiveFormsModule,
    TypeAheadModule,
    InputTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
