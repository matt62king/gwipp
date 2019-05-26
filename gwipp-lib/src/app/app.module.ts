import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavAttributesModule} from '../../projects/gwipp/src/lib/navigation/nav-attributes/nav-attributes.module';
import {FormModule} from '../../projects/gwipp/src/lib/form/form.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlayModule} from '../../projects/gwipp/src/lib/views/overlay/overlay.module';
import {TabMenuModule} from '../../projects/gwipp/src/lib/menus/tab-menu/tab-menu.module';
import {InputModule} from '../../projects/gwipp/src/lib/input/input.module';
import {NavigationModule} from '../../projects/gwipp/src/lib/navigation/navigation.module';
import {IconModule} from '../../projects/gwipp/src/lib/icon/icon.module';
import {ButtonModule} from '../../projects/gwipp/src/lib/button/button.module';
import {OutputModule} from '../../projects/gwipp/src/lib/output/output.module';
import {ToastModule} from '../../projects/gwipp/src/lib/views/toast/toast.module';
import {TemplatesModule} from '../../projects/gwipp/src/lib/foundation/templates/templates.module';
import {MenuModule} from '../../projects/gwipp/src/lib/menus/menu/menu.module';
import {PortletModule} from '../../projects/gwipp/src/lib/views/portlet/portlet.module';
import {WorkingBlockModule} from '../../projects/gwipp/src/lib/output/component/blocks/working-block/working-block.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    NavAttributesModule,
    IconModule,
    ButtonModule,
    FormModule,
    ReactiveFormsModule,
    InputModule,
    OverlayModule,
    TabMenuModule,
    OutputModule,
    ToastModule,
    TemplatesModule,
    MenuModule,
    PortletModule,
    WorkingBlockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
