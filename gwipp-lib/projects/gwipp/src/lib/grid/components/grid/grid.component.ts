import {Component, ContentChild, ContentChildren, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {GridColumnsDirective} from './grid-columns.directive';
import {GridFooterDirective} from '../../templates/grid-footer.directive';
import {GridConfiguration} from '../../foundation/configuration/grid-configuration';

@Component({
  selector: 'gwipp-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent {

  private readonly defaultConfig = {
    cellStyle: 'gwipp-grid-cell',
    rowStyle: 'gwipp-grid-row',
    headerStyle: 'gwipp-grid-header',
    footerStyle: 'gwipp-grid-footer',
    clickableRows: false
  };

  @Output() rowClick: EventEmitter<any> = new EventEmitter();

  @Input() rows: any[];

  @ContentChildren(GridColumnsDirective)
  columns: GridColumnsDirective[];

  @ContentChild(GridFooterDirective, {read: TemplateRef})
  footer: TemplateRef<any>;

  configuration: GridConfiguration = this.defaultConfig;

  @Input()
  set config(config: GridConfiguration) {
    this.configuration = {...this.defaultConfig, ...config};
  }

  resolvedCellStyle(inputStyle: string, columnStyle: string): string {
    return `gwipp-grid-cell-base ${inputStyle || ''} ${this.configuration.cellStyle || ''} ${columnStyle || ''}`;
  }

  resolvedHeaderCellStyle(inputStyle: string, columnStyle: string): string {
    return `gwipp-grid-cell-base ${inputStyle || ''} ${columnStyle || ''}`;
  }

  resolvedRowStyle(): string {
    return `d-flex flex-row ${this.configuredRowStlye()}`;
  }

  private configuredRowStlye(): string {
    const style = `${this.configuration.rowStyle || ''}`;
    const clickStyle = `${this.configuration.clickableRows ? 'gwipp-click-block' : ''}`;

    return `${style} ${clickStyle}`;
  }

  resolvedHeaderRowStyle(): string {
    return `d-flex flex-row ${this.configuration.headerStyle || ''}`;
  }

  resolvedFooterStyle(): string {
    return `${this.configuration.footerStyle || ''}`;
  }

  onRowClick(row: any): void {
    if (this.configuration.clickableRows) {
      this.rowClick.emit(row);
    }
  }
}
