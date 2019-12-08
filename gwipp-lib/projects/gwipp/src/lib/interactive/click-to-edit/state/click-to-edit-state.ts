import {ViewState} from '../../../foundation/state/view-state';
import {EditMode} from '../../../foundation/model/editMode';

export interface ClickToEditState extends ViewState {
  id?: string;
  editMode?: EditMode;
}
