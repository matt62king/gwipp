import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OverlayModule} from '../../projects/gwipp/src/lib/views/overlay/overlay.module';
import {ToastModule} from '../../projects/gwipp/src/lib/views/toast/toast.module';
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
    GwippModule,
    OverlayModule,
    ToastModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
