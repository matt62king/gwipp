import { Component, OnInit } from '@angular/core';
import {InputConfig} from '../../../../projects/gwipp/src/lib/input/decorators/input.decorators';
import {InputConfiguration} from '../../../../projects/gwipp/src/lib/input/foundation/configuration/input-configuration';
import {Icon} from '../../../../projects/gwipp/src/lib/icon/decorators/icon.decorator';
import {IconNames} from '../../../../projects/gwipp/src/lib/icon/icon/constants/icon-names';
import {IconSize} from '../../../../projects/gwipp/src/lib/icon/icon/constants/icon-size';
import {IconConfiguration} from '../../../../projects/gwipp/src/lib/icon/foundation/config/icon-configuration';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Patch} from 'grippio-gstate';
import {GwippStateKey} from '../../../../projects/gwipp/src/lib/foundation/state/state-keys';
import {ClickToEditState} from '../../../../projects/gwipp/src/lib/interactive/click-to-edit/state/click-to-edit-state';
import {EditMode} from '../../../../projects/gwipp/src/lib/foundation/model/editMode';

@Component({
  selector: 'app-click-edit',
  templateUrl: './click-edit.component.html',
  styleUrls: ['./click-edit.component.scss']
})
export class ClickEditComponent implements OnInit {

  @InputConfig({label: ''})
  editField: InputConfiguration;

  @Icon({name: IconNames.CHECK_CIRCLE_FAR, size: IconSize.LG})
  check: IconConfiguration;

  @Icon({name: IconNames.TIMES_CIRCLE_FAR, size: IconSize.LG})
  times: IconConfiguration;

  clickToEditId = '[clickToEdit]';
  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      clickToEdit: ['Click To Edit']
    });
  }

  getClickToEditValue(): string {
    return this.formGroup.value.clickToEdit;
  }

  cancel(): void {
    this.formGroup.reset({clickToEdit: 'Click To Edit'});
    this.close();
  }

  @Patch(GwippStateKey.CLICK_TO_EDIT) close = (): ClickToEditState =>
    ({id: this.clickToEditId, editMode: EditMode.READ_ONLY})
}
