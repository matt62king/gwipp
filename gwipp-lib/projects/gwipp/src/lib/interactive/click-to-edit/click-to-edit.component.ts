import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {EditDetailDirective} from './templates/edit-detail.directive';
import {ReadDetailDirective} from './templates/read-detail.directive';
import {EditMode} from '../../foundation/model/editMode';
import {IconConfiguration} from '../../icon/foundation/config/icon-configuration';
import {IconNames} from '../../icon/icon/constants/icon-names';
import {IconSize} from '../../icon/icon/constants/icon-size';
import {ActionDetailDirective} from './templates/action-detail.directive';
import {Consumer, Patch} from 'grippio-gstate';
import {GwippStateKey} from '../../foundation/state/state-keys';
import {Observable} from 'rxjs';
import {ClickToEditState} from './state/click-to-edit-state';
import {takeUntil} from 'rxjs/operators';
import {GwippComponent} from '../../foundation/component/gwipp-component';

@Component({
  selector: 'gwipp-click-to-edit',
  templateUrl: './click-to-edit.component.html',
  styleUrls: ['./click-to-edit.component.css']
})
export class ClickToEditComponent extends GwippComponent implements OnInit {

  @ContentChild(ActionDetailDirective, {read: TemplateRef})
  actionDetail: TemplateRef<any>;

  @ContentChild(EditDetailDirective, {read: TemplateRef})
  editDetail: TemplateRef<any>;

  @ContentChild(ReadDetailDirective, {read: TemplateRef})
  readDetail: TemplateRef<any>;

  @Consumer(GwippStateKey.CLICK_TO_EDIT)
  state$: Observable<ClickToEditState>;

  penIcon: IconConfiguration = {name: IconNames.PEN, size: IconSize.LG};
  state: ClickToEditState = {id: this.id, editMode: EditMode.READ_ONLY};

  showEditOption: boolean;

  @Input()
  set editIcon(config: IconConfiguration) {
    this.penIcon = {...this.penIcon, ...config};
  }

  @Input()
  set setState(state: ClickToEditState) {
    this.state = {...this.state, ...state};
    this.showEditOption = state.editMode !== EditMode.READ_ONLY;
  }

  ngOnInit(): void {
    this.state$
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        if (state.id === this.id) {
          this.setState = state;
        }
      });
  }

  isReadOnly(): boolean {
    return this.state.editMode === EditMode.READ_ONLY;
  }

  toggleShowEditOption() {
    this.showEditOption = !this.showEditOption;
  }

  toggleEditMode(): void {
    if (this.isReadOnly()) {
      this.patchEditMode(this.isReadOnly() ? EditMode.EDIT : EditMode.READ_ONLY);
    }
  }

  @Patch(GwippStateKey.CLICK_TO_EDIT) patchEditMode = (mode: EditMode) => ({id: this.id, editMode: mode});
}
