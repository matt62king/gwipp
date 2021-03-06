import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ButtonConfiguration} from '../../projects/gwipp/src/lib/button/foundation/configuation/button-configuration';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormEvent} from '../../projects/gwipp/src/lib/form/foundation/event/form-event';
import {FormEventType} from '../../projects/gwipp/src/lib/form/foundation/event/form-event-type';
import {FormMode} from '../../projects/gwipp/src/lib/form/foundation/consts/form-mode';
import {FormComponent} from '../../projects/gwipp/src/lib/form/components/form/form.component';
import {Button} from '../../projects/gwipp/src/lib/button/decorators/button.decorator';
import {InputConfig} from '../../projects/gwipp/src/lib/input/decorators/input.decorators';
import {ButtonType} from '../../projects/gwipp/src/lib/button/foundation/type/button-type';
import {ButtonActionType} from '../../projects/gwipp/src/lib/button/foundation/type/button-action.type';
import {InputConfiguration} from '../../projects/gwipp/src/lib/input/foundation/configuration/input-configuration';
import {ToastService} from '../../projects/gwipp/src/lib/views/toast/service/toast.service';
import {OverlayService} from '../../projects/gwipp/src/lib/views/overlay/service/overlay.service';
import {NavDropMenuService} from '../../projects/gwipp/src/lib/navigation/foundation/services/nav-drop-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gwipp-lib';

  @ViewChild('form') form: FormComponent;

  @Button({label: 'Toast', buttonType: ButtonType.PRIMARY, buttonAction: ButtonActionType.ACTION})
  toastButton: ButtonConfiguration;

  @Button({label: 'Overlay', buttonType: ButtonType.PRIMARY, buttonAction: ButtonActionType.ACTION})
  overlayButton: ButtonConfiguration;

  @InputConfig({label: 'Name', infoLabel: 'someone@example.com'})
  inputConfig: InputConfiguration;

  @InputConfig({label: 'Password', infoLabel: 'Min length of 8'})
  passwordConfig: InputConfiguration;

  @InputConfig({label: 'Agree to Terms'})
  switchConfig: InputConfiguration;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toastService: ToastService,
              private overlayService: OverlayService,
              private navMenuService: NavDropMenuService) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      agree: new FormControl('', Validators.required)
    });
  }

  onFormEvent(formEvent: FormEvent): void {
    switch (formEvent.eventType) {
      case FormEventType.CANCEL :
        this.formGroup.reset();
        break;
      case FormEventType.SUBMIT :
        this.form.formMode = FormMode.SUBMITTING;
        break;
    }
  }

  toast(template: TemplateRef<any>): void {
    this.toastService.toast(true, template);
  }

  overlay(title: TemplateRef<any>, detail: TemplateRef<any>): void {
    this.overlayService.toggle(true, detail, title);
  }

  closeNavMenu(): void {
    this.navMenuService.toggleMenu('cMenu', false);
  }
}
