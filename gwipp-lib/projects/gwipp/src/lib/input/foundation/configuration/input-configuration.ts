import {InputConfigurationOptions} from './input-configuration-options';

export class InputConfiguration implements InputConfigurationOptions {
  errorLabel: string;
  infoLabel: string;
  label: string;
  fieldId: string;
  optional: boolean;
  inline: boolean;
  maxLength: number;

  constructor(options: {
      fieldId?: string,
      errorLabel?: string,
      infoLabel?: string,
      label?: string,
      optional?: boolean,
      inline?: boolean,
      maxLength?: number}) {
    this.fieldId = options.fieldId || '';
    this.errorLabel = options.errorLabel || '';
    this.infoLabel = options.infoLabel || '';
    this.label = options.label || '';
    this.optional = options.optional || false;
    this.inline = options.inline || false;
    this.maxLength = options.maxLength || 99999;
  }
}
