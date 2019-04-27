import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gwipp-overlay-view',
  templateUrl: './overlay-view.component.html'
})
export class OverlayViewComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
