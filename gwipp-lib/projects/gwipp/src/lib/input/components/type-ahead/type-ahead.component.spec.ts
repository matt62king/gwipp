import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAheadComponent } from './type-ahead.component';
import {TypeAheadService} from './service/type-ahead.service';
import {InputServicesModule} from '../../input-services.module';
import {StyleModule} from '../../../foundation/style/style.module';
import {CommonModule} from '@angular/common';
import {SelectionOption} from '../../foundation/shared/model/selectionOption';

describe('TypeAheadComponent', () => {
  let component: TypeAheadComponent;
  let fixture: ComponentFixture<TypeAheadComponent>;

  const selectItems: SelectionOption<string>[] = [{value: 'One'}, {value: 'Two'}, {value: 'Three'}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAheadComponent ],
      imports: [ CommonModule, InputServicesModule, StyleModule ],
      providers: [ TypeAheadService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAheadComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set options', () => {
    component.options = selectItems;
    expect(component.allOptions).toEqual(selectItems);
  });

  it('should toggle focus', () => {
    component.toggleFocus();
    expect(component.hasFocus).toBeTruthy();
  });

  it('should not toggle focus', () => {
    component.disabled = true;
    component.toggleFocus();

    expect(component.hasFocus).toBeFalsy();
  });

  it('should toggle mouse over', () => {
    component.toggleMouseOver();
    expect(component.mouseOver).toBeTruthy();
  });

  it('should toggle focus on blur', () => {
    component.toggleFocus();
    component.onBlur();

    expect(component.hasFocus).toBeFalsy();
  });

  it('should keep focus on blur', () => {
    component.toggleFocus();
    component.toggleMouseOver();
    component.onBlur();

    expect(component.hasFocus).toBeTruthy();
  });

  it('should forward text input', () => {
    const spy = spyOn(component.service, 'dispatch');
    component.forwardTextInput('input');

    expect(spy).toHaveBeenCalledWith({input: 'input'});
  });

  it('should forward changes', () => {
    const spy = spyOn(component, 'onChange');
    component.selectValue(selectItems[0]);

    expect(spy).toHaveBeenCalledWith(selectItems[0].value);
  });

  it('should blur on value change', () => {
    component.toggleFocus();
    component.selectValue(selectItems[0]);

    expect(component.hasFocus).toBeFalsy();
  });

  it('should reset mouse over on change', () => {
    component.toggleMouseOver();
    component.selectValue(selectItems[0]);

    expect(component.mouseOver).toBeFalsy();
  });

  it('should blur on disable', () => {
    component.toggleFocus();
    component.setDisabledState(true);

    expect(component.hasFocus).toBeFalsy();
  });

  it('should reset mouse on disable', () => {
    component.toggleMouseOver();
    component.setDisabledState(true);

    expect(component.mouseOver).toBeFalsy();
  });

  it('should set disable state', () => {
    component.setDisabledState(true);

    expect(component.disabled).toBeTruthy();
  });
});
