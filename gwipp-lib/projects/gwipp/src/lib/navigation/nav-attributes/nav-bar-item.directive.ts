import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[nav-item]'
})
export class NavBarItemDirective {

  constructor(private ref: ElementRef, private render: Renderer2) {
    render.addClass(ref.nativeElement, 'gwipp-nav-bar-item');
  }

}
