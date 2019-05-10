import {Component, OnInit, ViewChild} from '@angular/core';
import {Button, ButtonType, Ginput, IconAnimation, IconSize, InputConfiguration} from 'gwipp';
import {ButtonConfiguration} from '../../projects/gwipp/src/lib/button/foundation/configuation/button-configuration';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Tabs} from '../../projects/gwipp/src/lib/menus/tab-menu/foundation/model/tabs';
import {TabItem} from '../../projects/gwipp/src/lib/menus/tab-menu/foundation/model/tab-item';
import {FormEvent} from '../../projects/gwipp/src/lib/form/foundation/event/form-event';
import {FormEventType} from '../../projects/gwipp/src/lib/form/foundation/event/form-event-type';
import {FormMode} from '../../projects/gwipp/src/lib/form/foundation/consts/form-mode';
import {FormComponent} from '../../projects/gwipp/src/lib/form/components/form/form.component';

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

  @Button({label: 'Confirm Button', buttonType: ButtonType.PRIMARY })
  confirmConfig: ButtonConfiguration;

  @Button({label: 'Cancel', buttonType: ButtonType.SECONDARY})
  cancelConfig: ButtonConfiguration;

  @Button({label: 'Submit', buttonType: ButtonType.PRIMARY})
  submitConfig: ButtonConfiguration;

  @Ginput({label: 'Name', infoLabel: 'someone@example.com'})
  inputConfig: InputConfiguration;

  @Ginput({label: 'Password', infoLabel: 'Min length of 8'})
  passwordConfig: InputConfiguration;

  @Ginput({label: 'Agree to Terms'})
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
