import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[gwippNavBarTitle]'
})
export class NavBarTitleDirective {

  constructor(private ref: ElementRef, private render: Renderer2) {
    render.addClass(ref.nativeElement, 'gwipp-nav-bar-title');
  }

}
