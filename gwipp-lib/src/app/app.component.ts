import {Component, OnInit} from '@angular/core';
import {Button, ButtonType, Ginput, IconAnimation, IconSize, InputConfiguration} from 'gwipp';
import {ButtonConfiguration} from '../../projects/gwipp/src/lib/button/foundation/configuation/button-configuration';
import {FormConfiguration} from '../../projects/gwipp/src/lib/form/foundation/configuration/form-configuration';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Tabs} from '../../projects/gwipp/src/lib/menus/tab-menu/foundation/model/tabs';
import {TabItem} from "../../projects/gwipp/src/lib/menus/tab-menu/foundation/model/tab-item";

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

  @Ginput({label: 'Name', infoLabel: 'someone@example.com'})
  inputConfig: InputConfiguration;

  @Ginput({label: 'Password', infoLabel: 'Min length of 8'})
  passwordConfig: InputConfiguration;

  @Ginput({label: 'Agree to Terms'})
  switchConfig: InputConfiguration;

  @Tabs(['Sign In', 'Create Account'])
  tabItems: TabItem[];

  formConfig: FormConfiguration;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', Validators.required)
    });

    this.formConfig = new FormConfiguration({submitConfiguration: this.submitConfig, cancelConfiguration: this.cancelConfig});
  }
}
