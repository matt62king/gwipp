import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[gwippClickable]'
})
export class ClickableDirective {

  constructor(private ref: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.toggle('pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.toggle('auto');
  }

  private toggle(hover: string): void {
    this.render.setStyle(this.ref.nativeElement, 'cursor', hover);
  }

}
