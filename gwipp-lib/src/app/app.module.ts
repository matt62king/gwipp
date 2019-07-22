import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormModule} from '../../projects/gwipp/src/lib/form/form.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlayModule} from '../../projects/gwipp/src/lib/views/overlay/overlay.module';
import {OutputModule} from '../../projects/gwipp/src/lib/output/output.module';
import {ToastModule} from '../../projects/gwipp/src/lib/views/toast/toast.module';
import {TextFieldModule} from '../../projects/gwipp/src/lib/input/components/text-field/text-field.module';
import {PasswordFieldModule} from '../../projects/gwipp/src/lib/input/components/password-field/password-field.module';
import {SwitchModule} from '../../projects/gwipp/src/lib/input/components/switch/switch.module';
import {GwippModule} from '../../projects/gwipp/src/lib/gwipp.module';
import {InputsModule} from './inputs/inputs.module';
import {NavBarModule} from './nav-bar/nav-bar.module';
import {BlocksModule} from './blocks/blocks.module';
import {ButtonsModule} from './buttons/buttons.module';
import {AppGridModule} from './grid/grid.module';
import {ListModule} from './list/list.module';
import {MenusModule} from './menus/menus.module';
import {OverlaysModule} from './overlays/overlays.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppGridModule,
    BlocksModule,
    ButtonsModule,
    InputsModule,
    ListModule,
    MenusModule,
    NavBarModule,
    OverlaysModule,
    BrowserModule,
    FormModule,
    ReactiveFormsModule,
    TextFieldModule,
    PasswordFieldModule,
    SwitchModule,
    OutputModule,
    ReactiveFormsModule,
    GwippModule,
    OverlayModule,
    ToastModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
