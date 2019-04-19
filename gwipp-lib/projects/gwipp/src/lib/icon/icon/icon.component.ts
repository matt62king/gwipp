import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gwipp-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit {
  @Input() icon: string;
  @Input() size: string;
  @Input() animation: string;

  constructor() { }

  ngOnInit() {
  }

  buildIcon(): string {
    return this.icon + ' ' + this.size + ' ' + this.animation;
  }
}
