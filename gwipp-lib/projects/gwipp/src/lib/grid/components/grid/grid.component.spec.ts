import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import {GridColumnsDirective} from './grid-columns.directive';
import {GridCellDirective} from '../../templates/grid-cell.directive';
import {GridHeaderCellDirective} from '../../templates/grid-header-cell.directive';
import {GridFooterDirective} from '../../templates/grid-footer.directive';
import {GridConfiguration} from '../../foundation/configuration/grid-configuration';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridComponent,
        GridColumnsDirective,
        GridCellDirective,
        GridHeaderCellDirective,
        GridFooterDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    component.columns = new GridColumnsDirective();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resolve cell style', () => {
    const style = 'gwipp-grid-cell-base input-style gwipp-grid-cell';
    expect(component.resolvedCellStyle('input-style')).toEqual(style);
  });

  it('should resolve header cell style', () => {
    const style = 'gwipp-grid-cell-base input-style';
    expect(component.resolvedHeaderCellStyle('input-style')).toEqual(style);
  });

  it('should resolve row style', () => {
    const style = 'd-flex flex-row gwipp-grid-row';
    expect(component.resolvedRowStyle()).toEqual(style);
  });

  it('should resolve header row style', () => {
    const style = 'd-flex flex-row gwipp-grid-header';
    expect(component.resolvedHeaderRowStyle()).toEqual(style);
  });

  it('should resolve footer style', () => {
    const style = 'gwipp-grid-footer';
    expect(component.resolvedFooterStyle()).toEqual(style);
  });

  it('should merge configurations', () => {
    const config: GridConfiguration = {
      cellStyle: 'gwipp-grid-cell',
      rowStyle: undefined,
      headerStyle: 'gwipp-grid-header',
      footerStyle: 'gwipp-grid-footer'
    };
    component.config = {rowStyle: undefined};

    expect(config).toEqual(component.configuration);
  });
});
