import {Component, OnInit, ViewChild} from '@angular/core';
import {ButtonConfiguration} from '../../projects/gwipp/src/lib/button/foundation/configuation/button-configuration';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Tabs} from '../../projects/gwipp/src/lib/menus/tab-menu/foundation/model/tabs';
import {TabItem} from '../../projects/gwipp/src/lib/menus/tab-menu/foundation/model/tab-item';
import {FormEvent} from '../../projects/gwipp/src/lib/form/foundation/event/form-event';
import {FormEventType} from '../../projects/gwipp/src/lib/form/foundation/event/form-event-type';
import {FormMode} from '../../projects/gwipp/src/lib/form/foundation/consts/form-mode';
import {FormComponent} from '../../projects/gwipp/src/lib/form/components/form/form.component';
import {Button} from '../../projects/gwipp/src/lib/button/decorators/button.decorator';
import {InputConfig} from '../../projects/gwipp/src/lib/input/decorators/input.decorators';
import {ButtonType} from '../../projects/gwipp/src/lib/button/foundation/type/button-type';
import {ButtonActionType} from '../../projects/gwipp/src/lib/button/foundation/type/button-action.type';
import {IconSize} from '../../projects/gwipp/src/lib/icon/icon/constants/icon-size';
import {IconAnimation} from '../../projects/gwipp/src/lib/icon/icon/constants/icon-animation';
import {InputConfiguration} from '../../projects/gwipp/src/lib/input/foundation/configuration/input-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gwipp-lib';
  iconSize = IconSize.TEN_X;
  animation = IconAnimation.SPIN;

  @ViewChild('form') form: FormComponent;

  @Button({label: 'Button', buttonType: ButtonType.PRIMARY})
  buttonConfig: ButtonConfiguration;

  @Button({label: 'Confirm Button', buttonType: ButtonType.DANGER })
  confirmConfig: ButtonConfiguration;

  @Button({label: 'Action', buttonType: ButtonType.PRIMARY, buttonAction: ButtonActionType.ACTION})
  actionButton: ButtonConfiguration;

  @Button({label: 'Outline', buttonType: ButtonType.PRIMARY, buttonAction: ButtonActionType.CANCEL_OUTLINE})
  outlineButton: ButtonConfiguration;

  @Button({label: 'Link', buttonType: ButtonType.PRIMARY, buttonAction: ButtonActionType.CANCEL_LINK})
  linkButton: ButtonConfiguration;

  // @Button({label: 'Cancel', buttonType: ButtonType.SECONDARY, buttonAction: ButtonActionType.CANCEL_LINK})
  // cancelConfig: ButtonConfiguration;
  //
  // @Button({label: 'Submit', buttonType: ButtonType.PRIMARY})
  // submitConfig: ButtonConfiguration;

  @InputConfig({label: 'Name', infoLabel: 'someone@example.com'})
  inputConfig: InputConfiguration;

  @InputConfig({label: 'Password', infoLabel: 'Min length of 8'})
  passwordConfig: InputConfiguration;

  @InputConfig({label: 'Agree to Terms'})
  switchConfig: InputConfiguration;

  @Tabs(['Sign In', 'Create Account'])
  tabItems: TabItem[];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
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
}
