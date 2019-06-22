import {Component, ContentChild, Input, OnDestroy, OnInit} from '@angular/core';
import {NavItemDetailDirective} from '../nav-item-detail.directive';
import {Observable, Subject} from 'rxjs';
import {NavDropMenuState} from '../../foundation/model/navDropMenuState';
import {NavDropMenuService} from '../../foundation/services/nav-drop-menu.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'gwipp-nav-menu-item',
  templateUrl: './nav-menu-item.component.html'
})
export class NavMenuItemComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<any>();

  @Input() title: string;

  @ContentChild(NavItemDetailDirective)
  itemDetail: NavItemDetailDirective;

  showMenu: boolean;
  state$: Observable<NavDropMenuState>;

  constructor(private readonly menuService: NavDropMenuService) {
    this.state$ = this.menuService.register();
  }

  ngOnInit(): void {
    this.state$
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        if (this.itemDetail.key === state.key) {
          this.showMenu = state.visible;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
