import {ContentChild, Directive, Input, TemplateRef} from '@angular/core';
import {DetailDirective} from '../../../foundation/templates/detail.directive';
import {DropMenuDetailDirective} from './drop-menu-detail.directive';

@Directive({
  selector: '[drop-menu]'
})
export class DropMenuDirective {

  @Input() menuKey: string;

  @ContentChild(DropMenuDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;
}

