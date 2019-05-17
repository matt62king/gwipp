import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonModule, IconModule} from 'gwipp';
import {NavAttributesModule} from '../../projects/gwipp/src/lib/navigation/nav-attributes/nav-attributes.module';
import {FormModule} from '../../projects/gwipp/src/lib/form/form.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlayModule} from '../../projects/gwipp/src/lib/views/overlay/overlay.module';
import {TabMenuModule} from '../../projects/gwipp/src/lib/menus/tab-menu/tab-menu.module';
import {InputModule} from '../../projects/gwipp/src/lib/input/input.module';
import {NavigationModule} from '../../projects/gwipp/src/lib/navigation/navigation.module';

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
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
