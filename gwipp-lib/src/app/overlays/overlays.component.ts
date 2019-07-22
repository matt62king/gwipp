import {Component, OnInit, TemplateRef} from '@angular/core';
import {ButtonConfiguration} from '../../../projects/gwipp/src/lib/button/foundation/configuation/button-configuration';
import {ButtonActionType} from '../../../projects/gwipp/src/lib/button/foundation/type/button-action.type';
import {ButtonType} from '../../../projects/gwipp/src/lib/button/foundation/type/button-type';
import {Button} from '../../../projects/gwipp/src/lib/button/decorators/button.decorator';
import {ToastService} from '../../../projects/gwipp/src/lib/views/toast/service/toast.service';
import {OverlayService} from '../../../projects/gwipp/src/lib/views/overlay/service/overlay.service';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.component.html'
})
export class OverlaysComponent implements OnInit {

  @Button({label: 'Toast', buttonType: ButtonType.PRIMARY, buttonAction: ButtonActionType.CANCEL_LINK})
  toastButton: ButtonConfiguration;

  @Button({label: 'Model View', buttonType: ButtonType.PRIMARY, buttonAction: ButtonActionType.CANCEL_LINK})
  overlayButton: ButtonConfiguration;

  @Button({label: 'Cancel', buttonType: ButtonType.SECONDARY, buttonAction: ButtonActionType.CANCEL_OUTLINE})
  cancelButton: ButtonConfiguration;

  constructor(private toastService: ToastService,
              private overlayService: OverlayService) { }

  ngOnInit() {
  }

  toast(template: TemplateRef<any>): void {
    this.toastService.toast(true, template);
  }

  overlay(title: TemplateRef<any>, detail: TemplateRef<any>): void {
    this.overlayService.toggle(true, detail, title);
  }

  closeOverlay(): void {
    this.overlayService.toggle(false);
  }
}
