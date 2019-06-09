import {Component, Input} from '@angular/core';
import {IconConfiguration} from '../foundation/config/icon-configuration';

@Component({
  selector: 'gwipp-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input() icon: string;
  @Input() size: string;
  @Input() animation: string;


  @Input()
  set config(config: IconConfiguration) {
    this.icon = config.name || '';
    this.size = config.size || '';
    this.animation = config.animation || '';
  }

  buildIcon(): string {
    return this.icon + ' ' + this.size + ' ' + this.animation;
  }
}
