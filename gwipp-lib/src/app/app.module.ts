import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonModule, IconModule, NavigationModule} from 'gwipp';
import {NavAttributesModule} from '../../projects/gwipp/src/lib/navigation/nav-attributes/nav-attributes.module';
import {FormModule} from "../../projects/gwipp/src/lib/form/form.module";

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
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
