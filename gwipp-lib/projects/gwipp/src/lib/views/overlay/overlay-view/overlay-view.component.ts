import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {TitleDirective} from '../../../foundation/templates/title.directive';
import {DetailDirective} from '../../../foundation/templates/detail.directive';
import {Observable} from 'rxjs';
import {OverlayState} from '../model/overlay-state';
import {OverlayService} from '../service/overlay.service';

@Component({
  selector: 'gwipp-overlay-view',
  templateUrl: './overlay-view.component.html'
})
export class OverlayViewComponent implements OnInit {
  @ContentChild(TitleDirective, {read: TemplateRef})
  title: TemplateRef<any>;

  @ContentChild(DetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;

  overlay$: Observable<OverlayState>;

  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
    this.overlay$ = this.overlayService.register();
  }

}
