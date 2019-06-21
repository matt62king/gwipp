import {Component, Input} from '@angular/core';
import {IconConfiguration} from '../foundation/config/icon-configuration';
import {IconNames} from './constants/icon-names';

@Component({
  selector: 'gwipp-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {
  private readonly defaultConfig = {name: IconNames.TERMINAL};

  @Input() icon: string;
  @Input() size: string;
  @Input() animation: string;


  @Input()
  set config(config: IconConfiguration) {
    const mergedConfig = {...this.defaultConfig, ...config};

    this.icon = mergedConfig.name || '';
    this.size = mergedConfig.size || '';
    this.animation = mergedConfig.animation || '';
  }

  buildIcon(): string {
    return this.icon + ' ' + this.size + ' ' + this.animation;
  }
}
