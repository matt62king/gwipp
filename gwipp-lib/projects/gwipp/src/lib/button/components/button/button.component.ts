import {Component, OnInit} from '@angular/core';
import {ButtonStyleBuilder} from '../../foundation/util/button-style-builder.service';
import {IconNames} from '../../../icon/icon/constants/icon-names';
import {BaseButtonComponent} from '../../foundation/base-button/base-button.component';

@Component({
  selector: 'gwipp-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent extends BaseButtonComponent implements OnInit {

  errorIcon = IconNames.EXCLAMATION_TRIANGLE;

  constructor(protected styleBuilder: ButtonStyleBuilder) {
    super(styleBuilder);
  }

  ngOnInit() {

  }

}
