import {Injectable} from '@angular/core';
import {StyleModule} from '../../../foundation/style/style.module';
import {ButtonType} from '../type/button-type';
import {ButtonActionType} from '../type/button-action.type';

@Injectable({providedIn: StyleModule})
export class ButtonStyleBuilder {

  public buildForType(buttonType: ButtonType, buttonAction: ButtonActionType): string {
    return `btn btn-lg  ${this.styleForType(buttonType, buttonAction)} ${this.styleForAction(buttonAction)}`;
  }

  private styleForType(buttonType: ButtonType, buttonAction: ButtonActionType): string {
    let color: string;

    switch (buttonType) {
      case ButtonType.SUCCESS :
        color = '-success';
        break;
      case ButtonType.SECONDARY :
        color = '-secondary';
        break;
      case ButtonType.PRIMARY :
        color = '-primary';
        break;
      case ButtonType.DANGER :
        color = '-danger';
        break;
      case ButtonType.NONE :
        color = '';
        break;
      default :
        color = '-primary';
        break;
    }

    let outline = '';

    if (buttonAction === ButtonActionType.CANCEL_OUTLINE) {
      outline = '-outline';
    }

    if (buttonAction === ButtonActionType.CANCEL_LINK) {
      return `btn-link text${color}`;
    }

    return `btn${outline}${color}`;
  }

  private styleForAction(buttonAction: ButtonActionType): string {
    if (buttonAction === ButtonActionType.ACTION) {
      return 'gwipp-btn-action';
    }

    return '';
  }

}
