import { Component, OnInit } from '@angular/core';
import {SelectionOption} from '../../../projects/gwipp/src/lib/input/components/dropdown-selection/model/selectionOption';
import {InputConfig} from '../../../projects/gwipp/src/lib/input/decorators/input.decorators';
import {InputConfiguration} from '../../../projects/gwipp/src/lib/input/foundation/configuration/input-configuration';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html'
})
export class InputsComponent {

  @InputConfig({label: 'Drop Down'})
  dropDownConfig: InputConfiguration;

  selectItems: SelectionOption<string>[] = [{value: 'One'}, {value: 'Two'}, {value: 'Three'}];
}
