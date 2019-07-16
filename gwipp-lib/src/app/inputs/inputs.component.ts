import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelectionOption} from '../../../projects/gwipp/src/lib/input/foundation/shared/model/selectionOption';
import {InputConfig} from '../../../projects/gwipp/src/lib/input/decorators/input.decorators';
import {InputConfiguration} from '../../../projects/gwipp/src/lib/input/foundation/configuration/input-configuration';
import {Button} from '../../../projects/gwipp/src/lib/button/decorators/button.decorator';
import {ButtonConfiguration} from '../../../projects/gwipp/src/lib/button/foundation/configuation/button-configuration';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TypeAheadService} from '../../../projects/gwipp/src/lib/input/components/type-ahead/service/type-ahead.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Icon} from '../../../projects/gwipp/src/lib/icon/decorators/icon.decorator';
import {IconNames} from '../../../projects/gwipp/src/lib/icon/icon/constants/icon-names';
import {IconConfiguration} from '../../../projects/gwipp/src/lib/icon/foundation/config/icon-configuration';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html'
})
export class InputsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  @Button({label: 'Toggle Disabled'})
  disableButton: ButtonConfiguration;

  @InputConfig({label: 'Drop Down'})
  dropDownConfig: InputConfiguration;

  @InputConfig({fieldId: 'demo', label: 'Type Ahead'})
  typeAheadConfig: InputConfiguration;

  @Icon({name: IconNames.SEARCH})
  searchIcon: IconConfiguration;

  selectItems: SelectionOption<string>[] = [{value: 'One'}, {value: 'Two'}, {value: 'Three'}];
  typeAheadItems: SelectionOption<string>[] = [];
  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly typeAhead: TypeAheadService) {
    this.buildForm();
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      dropdown: [undefined],
      typeAhead: [undefined],
    });
  }

  ngOnInit(): void {
    this.typeAhead.state()
      .pipe(takeUntil(this.destroy$))
      .subscribe((input) => {
        const regex = new RegExp(input.input, 'i');
        this.typeAheadItems = this.selectItems.filter((item) => regex.test(item.value));
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  toggleDisable(): void {
    this.formGroup.disabled ? this.formGroup.enable() : this.formGroup.disable();
  }
}
