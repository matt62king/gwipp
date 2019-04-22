import {Component, OnInit} from '@angular/core';
import {Button, ButtonType, IconAnimation, IconSize} from 'gwipp';
import {ButtonConfiguration} from '../../projects/gwipp/src/lib/button/foundation/configuation/button-configuration';
import {Form} from '../../projects/gwipp/src/lib/foundation/configuration/congifurations';
import {FormConfiguration} from '../../projects/gwipp/src/lib/form/foundation/configuration/form-configuration';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gwipp-lib';
  iconSize = IconSize.TEN_X;
  animation = IconAnimation.SPIN;

  @Button({label: 'Button', buttonType: ButtonType.PRIMARY})
  buttonConfig: ButtonConfiguration;

  @Button({label: 'Confirm Button', buttonType: ButtonType.PRIMARY })
  confirmConfig: ButtonConfiguration;

  @Button({label: 'Cancel', buttonType: ButtonType.SECONDARY})
  cancelConfig: ButtonConfiguration;

  @Button({label: 'Submit', buttonType: ButtonType.PRIMARY})
  submitConfig: ButtonConfiguration;

  formConfig: FormConfiguration;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({});

    this.formConfig = new FormConfiguration({submitConfiguration: this.submitConfig, cancelConfiguration: this.cancelConfig});
  }
}
