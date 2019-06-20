import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {OverlayState} from '../model/overlay-state';
import {OverlayService} from '../service/overlay.service';
import {OverlayTitleDirective} from '../foundation/overlay-title.directive';
import {OverlayDetailDirective} from '../foundation/overlay-detail.directive';

@Component({
  selector: 'gwipp-overlay-view',
  templateUrl: './overlay-view.component.html'
})
export class OverlayViewComponent implements OnInit {
  @ContentChild(OverlayTitleDirective, {read: TemplateRef})
  title: TemplateRef<any>;

  @ContentChild(OverlayDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;

  overlay$: Observable<OverlayState>;

  constructor(private readonly overlayService: OverlayService) { }

  ngOnInit() {
    this.overlay$ = this.overlayService.register();
  }

}
