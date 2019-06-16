import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionMenuComponent } from './action-menu.component';
import {MenuTemplatesModule} from '../foundataion/templates/menu-templates.module';
import {IconModule} from '../../icon/icon.module';
import {StyleModule} from '../../foundation/style/style.module';
import {DropMenuService} from '../foundataion/service/drop-menu/drop-menu.service';
import {GwippModule} from '../../gwipp.module';
import {of, Subject} from 'rxjs';
import {DropMenuDirective} from '../foundataion/templates/drop-menu.directive';
import {DropMenuState} from '../foundataion/model/drop-menu.state';

describe('ActionMenuComponent', () => {
  const state$ = new Subject<DropMenuState>();

  let component: ActionMenuComponent;
  let fixture: ComponentFixture<ActionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionMenuComponent ],
      imports: [ GwippModule, MenuTemplatesModule, IconModule, StyleModule ],
      providers: [DropMenuService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMenuComponent);

    component = fixture.componentInstance;
    component.dropMenu = new DropMenuDirective();
    component.menuState$ = state$.asObservable();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu', () => {
    component.toggleMenu();
    expect(component.showMenu).toBeTruthy();
  });

  it('should toggle menu from service', () => {
    component.dropMenu.menuKey = 'menu_key';
    state$.next({key: 'menu_key', visible: true});

    expect(component.showMenu).toBeTruthy();
  });

  it('should ignore menu service', () => {
    component.dropMenu.menuKey = 'menu_key';
    state$.next({key: 'menu_key_1', visible: true});

    expect(component.showMenu).toBeFalsy();
  });
});
