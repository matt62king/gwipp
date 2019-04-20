import {Injectable} from '@angular/core';
import {StyleModule} from '../../../foundation/style/style.module';
import {ButtonType} from '../type/button-type';

@Injectable({providedIn: StyleModule})
export class ButtonStyleBuilder {

  constructor() {

  }

  public buildForType(buttonType: ButtonType): string {
    return 'btn btn-lg ' + this.styleForType(buttonType);
  }

  private styleForType(buttonType: ButtonType): string {
    switch (buttonType) {
      case ButtonType.SUCCESS :
        return 'btn-success';
      case ButtonType.SECONDARY :
        return 'btn-secondary';
      case ButtonType.PRIMARY :
        return 'btn-primary';
      case ButtonType.DANGER :
        return 'btn-danger';
      case ButtonType.NONE :
        return '';
    }
  }
}
