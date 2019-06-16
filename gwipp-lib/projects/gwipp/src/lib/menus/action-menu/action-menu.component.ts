import {Component, ContentChild, OnDestroy, OnInit} from '@angular/core';
import {IconNames} from '../../icon/icon/constants/icon-names';
import {DropMenuService} from '../foundataion/service/drop-menu/drop-menu.service';
import {Observable, Subject} from 'rxjs';
import {DropMenuState} from '../foundataion/model/drop-menu.state';
import {takeUntil} from 'rxjs/operators';
import {DropMenuDirective} from '../foundataion/templates/drop-menu.directive';

@Component({
  selector: 'gwipp-action-menu',
  templateUrl: './action-menu.component.html'
})
export class ActionMenuComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<any>();

  // @Icon({name: IconNames.ELLIPSIS_H})
  // actionIcon: IconConfiguration;
  ellipsisIcon = IconNames.ELLIPSIS_H;

  @ContentChild(DropMenuDirective)
  dropMenu: DropMenuDirective;

  showMenu: boolean;
  menuState$: Observable<DropMenuState>;

  constructor(private readonly menuService: DropMenuService) {
    this.menuState$ = menuService.register();
  }

  ngOnInit() {
    this.menuState$
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        if (state.key === this.dropMenu.menuKey) {
          this.showMenu = state.visible;
        }
      });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
