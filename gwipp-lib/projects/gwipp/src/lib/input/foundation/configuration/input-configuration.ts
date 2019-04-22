import {InputConfigurationOptions} from './input-configuration-options';

export class InputConfiguration implements InputConfigurationOptions {
  errorLabel: string;
  infoLabel: string;
  label: string;
  optional: boolean;

  constructor(options: {
      errorLabel?: string,
      infoLabel?: string,
      label?: string,
      optional?: boolean}) {
    this.errorLabel = options.errorLabel || '';
    this.infoLabel = options.infoLabel || '';
    this.label = options.label || '';
    this.optional = options.optional || false;
  }
}
