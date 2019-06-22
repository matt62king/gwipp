import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {Colors} from '../../../foundation/style/colors/colors';

@Component({
  selector: 'gwipp-progress-bar',
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {
  @ViewChild('progressBar') progressBar: ElementRef;

  @Input() label: string;

  lastValue = 'w-25';
  lastColor = 'bg-danger';

  constructor(private readonly render: Renderer2) {
  }

  public setStatusColor(color: Colors): void {
    this.removeAndUpdateClass(this.lastColor, color);
    this.lastColor = color;
  }

  public setValue(value: string): void {
    this.removeAndUpdateClass(this.lastValue, value);
    this.lastValue = value;
  }

  public setStatusLabel(text: string): void {
    this.label = text;
  }

  removeAndUpdateClass(last: string, update: string): void {
    this.render.removeClass(this.progressBar.nativeElement, last);
    this.render.addClass(this.progressBar.nativeElement, update);
  }
}
