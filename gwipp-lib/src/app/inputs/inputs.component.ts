import {Component} from '@angular/core';
import {SelectionOption} from '../../../projects/gwipp/src/lib/input/components/dropdown-selection/model/selectionOption';
import {InputConfig} from '../../../projects/gwipp/src/lib/input/decorators/input.decorators';
import {InputConfiguration} from '../../../projects/gwipp/src/lib/input/foundation/configuration/input-configuration';
import {Button} from '../../../projects/gwipp/src/lib/button/decorators/button.decorator';
import {ButtonConfiguration} from '../../../projects/gwipp/src/lib/button/foundation/configuation/button-configuration';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html'
})
export class InputsComponent {

  @Button({label: 'Toggle Disabled'})
  disableButton: ButtonConfiguration;

  @InputConfig({label: 'Drop Down'})
  dropDownConfig: InputConfiguration;

  selectItems: SelectionOption<string>[] = [{value: 'One'}, {value: 'Two'}, {value: 'Three'}];
  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      dropdown: [undefined]
    });
  }

  toggleDisable(): void {
    this.formGroup.disabled ? this.formGroup.enable() : this.formGroup.disable();
  }
}
