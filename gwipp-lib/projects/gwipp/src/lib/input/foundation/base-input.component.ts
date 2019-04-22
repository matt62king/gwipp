import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';

import {InputConfiguration} from './configuration/input-configuration';

@Component({
  selector: 'gwipp-base-input',
  template: '<div></div>'
})
export class BaseInputComponent implements OnInit {
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') inputRef: ElementRef;

  @Input() formControl: FormControl = new FormControl();
  @Input() config: InputConfiguration;

  innerValue: any;
  errors: Array<any>;

  constructor() { }

  ngOnInit() {
  }
}
