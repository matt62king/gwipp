import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {GridColumnsDirective} from './grid-columns.directive';
import {GridFooterDirective} from '../../templates/grid-footer.directive';
import {GridConfiguration} from '../../foundation/configuration/grid-configuration';

@Component({
  selector: 'gwipp-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent {

  private defaultConfig = {
    cellStyle: 'gwipp-grid-cell',
    rowStyle: 'gwipp-grid-row',
    headerStyle: 'gwipp-grid-header',
    footerStyle: 'gwipp-grid-footer'
  };

  @Input() rows: any[];

  @ContentChild(GridColumnsDirective)
  columns: GridColumnsDirective;

  @ContentChild(GridFooterDirective, {read: TemplateRef})
  footer: TemplateRef<any>;

  configuration: GridConfiguration = this.defaultConfig;

  @Input()
  set config(config: GridConfiguration) {
    this.configuration = {...this.defaultConfig, ...config};
  }

  resolvedCellStyle(inputStyle: string): string {
    return `gwipp-grid-cell-base ${inputStyle || ''} ${this.configuration.cellStyle || ''}`;
  }

  resolvedHeaderCellStyle(inputStyle: string): string {
    return `gwipp-grid-cell-base ${inputStyle || ''}`;
  }

  resolvedRowStyle(): string {
    return `d-flex flex-row ${this.configuration.rowStyle || ''}`;
  }

  resolvedHeaderRowStyle(): string {
    return `d-flex flex-row ${this.configuration.headerStyle || ''}`;
  }

  resolvedFooterStyle(): string {
    return `${this.configuration.footerStyle || ''}`;
  }
}
