import {Component} from '@angular/core';
import {ToastService} from '../../projects/gwipp/src/lib/views/toast/service/toast.service';
import {OverlayService} from '../../projects/gwipp/src/lib/views/overlay/service/overlay.service';
import {NavDropMenuService} from '../../projects/gwipp/src/lib/navigation/foundation/services/nav-drop-menu.service';
import {Consumer} from 'grippio-gstate';
import {StateKeys} from './state/state-keys';
import {Observable} from 'rxjs';
import {PortletsState} from './state/portlets.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gwipp-lib';

  @Consumer(StateKeys.PORTLET_STATE)
  portlets$: Observable<PortletsState>;

  constructor(private toastService: ToastService,
              private overlayService: OverlayService,
              private navMenuService: NavDropMenuService) {

  }

  closeNavMenu(): void {
    this.navMenuService.toggleMenu('cMenu', false);
  }
}
