import {Component, OnDestroy, OnInit} from '@angular/core';
import {Consumer, Patch, Push, Set} from 'grippio-gstate';
import {StateKeys} from '../state/state-keys';
import {Observable, Subject} from 'rxjs';
import {PortletsState} from '../state/portlets.state';
import {Icon} from '../../../projects/gwipp/src/lib/icon/decorators/icon.decorator';
import {IconNames} from '../../../projects/gwipp/src/lib/icon/icon/constants/icon-names';
import {IconConfiguration} from '../../../projects/gwipp/src/lib/icon/foundation/config/icon-configuration';
import {NavDropMenuService} from '../../../projects/gwipp/src/lib/navigation/foundation/services/nav-drop-menu.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject();

  @Consumer(StateKeys.PORTLET_STATE)
  portlets$: Observable<PortletsState>;

  @Icon({name: IconNames.CHECK})
  checkIcon: IconConfiguration;

  private portlets: PortletsState = {
    blocks: false,
    buttons: false,
    grids: false,
    inputs: false,
    lists: false,
    menus: false,
  };

  constructor(private readonly menuService: NavDropMenuService) {

  }

  @Set(StateKeys.PORTLET_STATE) defaultState = (state: PortletsState): PortletsState => state;

  ngOnInit() {
    this.portlets$
      .pipe(takeUntil(this.destroy$))
      .subscribe((portlets) => {
        this.portlets = {...this.portlets, ...portlets};
    });

    this.defaultState(this.portlets);
  }

  @Push(StateKeys.PORTLET_STATE) getPortlets = () => ({});

  toggle(event: Event, key: string): void {
    event.stopPropagation();
    this.portlets[key] = !this.portlets[key];
    this.updatePortlets(this.portlets);
    this.menuService.toggleMenu('cMenu', false);
  }

  @Patch(StateKeys.PORTLET_STATE) updatePortlets = (state: PortletsState): PortletsState => state;

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
